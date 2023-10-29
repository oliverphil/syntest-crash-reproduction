const execSync = require('child_process').execSync;
const fs = require('fs');


const stackRegex = /console.log\n\s+([A-Za-z]*):\s([A-Za-z\s\d:']*)\s?\n(.*\n(?:\s*at.*\n)*)/gm;

const input = fs.readFileSync('output.log').toString();

let regexResults = [];
try {
    const text = fs.readFileSync('output.log').toString();
    let regexResult;
    while ((regexResult = stackRegex.exec(text)) !== null) {
        // const crashNumber = regexResult[1];
        const error = regexResult[1];
        const errorMessage = regexResult[2];
        const stackTrace = regexResult[3];
        const splitStackTrace = stackTrace.split('\n');
        const splitLine = splitStackTrace.find(t => t.includes('SecBench.js/')).split('SecBench.js/')[1].split('/');
        const exploitType = splitLine[0];
        const exploit = splitLine[1];
        let finalStackTraceArray = [`${error}: ${errorMessage}`];
        for (let i = 0; i < splitStackTrace.length; i++) {
            const line = splitStackTrace[i];
            if (line.includes('node_modules')) {
                const firstPart = line.split('/')[0];
                const secondPart = line.split('node_modules/')[1];
                finalStackTraceArray.push(firstPart + secondPart);
            } else {
                finalStackTraceArray.push(line);
            }
        }
        const finalStackTrace = finalStackTraceArray.join('\n');

        const package = JSON.parse(fs.readFileSync(`${exploitType}/${exploit}/package.json`).toString());

        // create crash files
        const crash = {
            issueNumber: exploit,
            info: errorMessage,
            url: package.homepage,
            version: package.version,
            dependencies: package.dependencies,
            requireCrashDependency: false
        };
        if (!fs.existsSync('secbench')) {
            execSync('mkdir secbench');
        }
        if (!fs.existsSync(`secbench/${exploitType}`)) {
            execSync(`mkdir secbench/${exploitType}`);
        }
        const crashName = exploit;
        const crashFolder = `secbench/${exploitType}/${crashName}`;
        if (!fs.existsSync(crashFolder)) {
            execSync(`mkdir ${crashFolder}`);
        }
        execSync(`cp ${exploitType}/${exploit}/*.test.js ${crashFolder}/`);
        fs.writeFileSync(`${crashFolder}/${crashName}.json`, JSON.stringify(crash));
        fs.writeFileSync(`${crashFolder}/${crashName}.log`, finalStackTrace);
    }
} catch (e) {
    console.log(e);
}

function checkSameStackTraces(stack1, stack2) {
    try {
        const stackTrace1 = process(stack1);
        const stackTrace2 = process(stack2);
        const stack1Array = stackTrace1.trace;
        const stack2Array = stackTrace2.trace;
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
    } catch {
        return false;
    }
}

function process(stackTrace, verbose ) {
    const lines = stackTrace.split('\n');
    const error = parseError(lines[0]);
    const trace = parseTrace(lines.slice(1), verbose);
    return {
        error,
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
    }
    return frames;
}
