const execSync = require('child_process').execSync;
const fs = require('fs');

const projects = fs.readdirSync('test_out');

for (const project of projects) {
    const existing = [];
    const inputFiles = fs.readdirSync(`test_out/${project}`).filter(f => !f.includes('package') && !f.includes('test'));
    for (const file of inputFiles) {
        const number = file.split('.')[0].split('-')[1];

        const inputFile = fs.readFileSync(`test_out/${project}/${file}`).toString();
        const inputArray = inputFile.split('\n')
        let input = '';
        let start = -1;
        let end = inputArray.length;
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i].includes('{') && start === -1) {
                start = i;
            }
            if (inputArray[i].includes('}')) {
                end = i + 1;
            }
        }
        input = inputArray.slice(start, end).join('\n');
        console.log(file);
        if (input === '') continue;
        const crashResults = JSON.parse(input).failures.filter(c => c.err && c.err.stack);
        const package = JSON.parse(fs.readFileSync(`test_out/${project}/package-${project}-${number}.json`).toString());

        for (var i = 0; i < crashResults.length; i++) {
            if (i === 195) continue;
            let crashStack = crashResults[i].err.stack || '';
            crashStack = crashStack.replaceAll('&quot;', '\'');
            crashStack = crashStack.replaceAll('<br> &nbsp; &nbsp;', '\n');

            let contained = false;
            const splitStackTrace = crashStack.split('\n');
            let finalStackTraceArray = [];
            for (let i = 1; i < splitStackTrace.length; i++) {
                const line = splitStackTrace[i];
                finalStackTraceArray.push(line);
            }
            const finalStackTrace = finalStackTraceArray.join('\n');
            for (let item of existing) {
                if (checkSameStackTraces(item.stackTrace, finalStackTrace)) {
                    contained = true;
                    break;
                }
            }
            if (!contained) {
                const deps = package.dependencies || {};
                for (const line of finalStackTraceArray) {
                    if (line.includes('node_modules')) {
                        const split = line.split('node_modules/');
                        const dep = split[split.length - 1].split('/')[0];
                        if (package.devDependencies[dep]) {
                            deps[dep] = package.devDependencies[dep];
                        }
                    }
                }
                let testFiles = finalStackTraceArray.filter(frame => frame.includes('test'));
                testFiles = testFiles.map(file => {
                    try {
                        return file.split('(')[1].split(':')[0];
                    } catch {
                        return undefined;
                    }
                });
                testFiles = testFiles.filter(file => file);
                existing.push({
                    project,
                    stackTrace: finalStackTrace,
                    errors: new Set([splitStackTrace[0]]),
                    version: package.version,
                    dependencies: deps,
                    url: package.homepage,
                    testFiles
                });
            } else {
                existing.find(item => checkSameStackTraces(item.stackTrace, finalStackTrace)).errors.add(splitStackTrace[0]);
            }
        }
    }
    const obj = {};
    let num = 1;
    for (let item of existing) {
        let trace = item.stackTrace;
        let crashNum = `crash${num}`;
        obj[crashNum] = {
            crashProject: item.project.split('.')[0],
            trace,
            errors: [...item.errors],
            version: item.version,
            url: item.url,
            dependencies: item.dependencies,
            testFiles: item.testFiles
        };

        num++;
    }

    console.log('open file');
    const outfile = project;
    console.log('write to file');
    fs.writeFileSync(outfile + '.json', JSON.stringify(obj, undefined, 4));

    let crashNumber = 1;
    for (const crash of Object.values(obj)) {
        for (const error of crash.errors) {
            if (error.trim().startsWith('at ')) {
                continue
            }
            const folder = `bugsjs/${project}/${project}-${crashNumber}`;
            try {
                execSync(`mkdir -p ${folder}`);
            } catch {
                //
            }
            const stackTrace = `${error}\n${crash.trace}`;
            const crashContent = {
                ...crash,
                requireCrashDependency: true,
                crashId: `${project}-${crashNumber}`
            };
            delete crashContent.errors;
            delete crashContent.trace;

            for (const testFile of crash.testFiles) {
                try {
                    execSync(`cp testFiles/**/${testFile} ${folder}/`);
                } catch {
                    //
                }
            }

            fs.writeFileSync(`${folder}/${project}-${crashNumber}.json`, JSON.stringify(crashContent, undefined, 4));
            fs.writeFileSync(`${folder}/${project}-${crashNumber}.log`, stackTrace);

            crashNumber++;
        }
    }
}

function checkSameStackTraces(stack1, stack2) {
    try {
        const stack1Array = process(stack1);
        const stack2Array = process(stack2);
        if (stack1Array.length !== stack2Array.length) {
            return false;
        }
        for (let i = 1; i < stack1Array.length; i++) {
            const file1 = stack1Array[i].file;
            const file2 = stack2Array[i].file;
            if (file1.includes("tests/tempTest.spec.js") && file2.includes("tests/tempTest.spec.js")) {
                continue;
            }
            const line1 = stack1Array[i].lineNumber;
            const line2 = stack2Array[i].lineNumber;
            const char1 = stack1Array[i].charNumber;
            const char2 = stack2Array[i].charNumber;
            if (file1 !== file2 && line1 !== line2 && char1 !== char2) return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}

function process(stackTrace, verbose ) {
    const lines = stackTrace.split('\n');
    // const error = parseError(lines[0]);
    const trace = parseTrace(lines.slice(1), verbose);
    return {
        // error,
        trace,
        rawTrace: stackTrace,
    };
}

/**
 * Process a stack trace after crash run
 * @param {string[]} stackTrace a list of stack trace lines
 * @return {StackTrace} a StackTrace object
 */
function processCrashStack(stackTrace) {
    const lines = stackTrace.slice(4);
    const error = parseError(lines[0]);
    const trace = parseTrace(lines.slice(1), true);
    return {
        error,
        trace,
        rawTrace: lines.join('\n'),
    };
}

/**
 * Parse an error from a stack trace
 * @param {string} lines an array of strings from a stack trace
 * @return {StackError} a StackError object containing the error
 * type and message
 * @private
 */
function parseError(lines) {
    const regex = /([a-zA-Z\[\]]+)[\s\[\]a-zA-Z_]*:?(.*)/m;
    const result = regex.exec(lines);
    if (result) {
        let errorMessage = result[2].toString().trim();
        if (errorMessage.includes('Received type string')) {
            const split = errorMessage.split('Received type string');
            errorMessage = split[0] + 'Received type string';
        }
        return {
            errorType: result[1].toString().trim(),
            errorMessage
        };
    }
    throw new Error('Error could not be read from stack trace');
}

/**
 * Parse each line within a stack trace
 * @param {string[]} lines the lines from the stack trace
 * @return {StackFrame[]} information parsed from the stack trace
 * @private
 */
function parseTrace(lines, verbose) {
    const moduleRegex =
        /at\s(.+)\s\(([\d\w~\/\\\-<>._?@+]+):(\d+):?(\d+)?\)/m;
    const fileRegex =
        /at\s([:a-zA-Z~\/\\\-<>._@+]+)(?::(\d+)?:?(\d+)?$|[\s()<>\\\w]+$)/m;
    const internalsRegex =
        /at\s(?:new)?\s?([:a-zA-Z~\/\\\-<>._@+]+)\s\(([A-Za-z]+:[A-Za-z/_]+):(\d+):(\d+)\)/m;
    const frames = [];
    for (const line of lines.filter((l) => l.length > 0)) {
        try {
            if (line.includes('.syntest/tests/tempTest.spec.js')) {
                continue;
            }
            let dependency = undefined;
            let result = moduleRegex.exec(line);
            const isEmbeddedOrAnonymous = line.includes('<anonymous>') ||
                line.includes('<embedded>');
            if (result) {
                let file = result[2].toString().replace(/\\/g, '/');
                if (file.includes('node_modules')) {
                    const fileSplit = file.split('node_modules/');
                    file = fileSplit[fileSplit.length - 1];
                    dependency = file.split('/')[1];
                }
                frames.push({
                    method: result[1].toString(),
                    lineNumber: parseInt(result[3].toString()),
                    charNumber: parseInt(result[4]?.toString()),
                    isModule: true,
                    isEmbeddedOrAnonymous,
                    file,
                    dependency
                });
            } else if (result = fileRegex.exec(line)) {
                if (result[2]) {
                    let file = result[1].toString().replace(/\\/g, '/');
                    if (file.includes('node_modules')) {
                        const fileSplit = file.split('node_modules/');
                        file = fileSplit[fileSplit.length - 1];
                        dependency = file.split('/')[1];
                    }
                    frames.push({
                        file,
                        lineNumber: parseInt(result[2].toString()),
                        charNumber: parseInt(result[3].toString()),
                        isModule: false,
                        isEmbeddedOrAnonymous,
                    });
                } else {
                    let file = result[1].toString().replace(/\\/g, '/');
                    if (file.includes('node_modules')) {
                        const fileSplit = file.split('node_modules/');
                        file = fileSplit[fileSplit.length - 1];
                        dependency = file.split('/')[1];
                    }
                    frames.push({
                        file,
                        isModule: false,
                        isEmbeddedOrAnonymous,
                    });
                }
            } else {
                result = internalsRegex.exec(line);
                if (result) {
                    let file = result[2].toString().replace(/\\/g, '/');
                    if (file.includes('node_modules')) {
                        const fileSplit = file.split('node_modules/');
                        file = fileSplit[fileSplit.length - 1];
                        dependency = file.split('/')[1];
                    }
                    frames.push({
                        method: result[1].toString(),
                        file,
                        lineNumber: parseInt(result[3].toString()),
                        charNumber: parseInt(result[4].toString()),
                        isModule: true,
                        isEmbeddedOrAnonymous,
                        internal: true,
                        dependency
                    });
                } else if (verbose) {
                    console.error(`Stack frame not parsed: ${line}`);
                }
            }
        } catch {
            //
        }
    }
    return frames;
}
