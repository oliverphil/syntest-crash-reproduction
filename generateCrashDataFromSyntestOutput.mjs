import * as fsPromises from 'fs/promises';
import * as fs from 'fs';
import {execSync} from "child_process";

// const resultRegex = /======\sException\sfor\sDataset\s=======\n([A-Za-z1-9\-]*)\n(.*\n(?:\s*at.*\n)*)(?:\s.*[^}])?}?\n?======\sEnd\sException\s=======/gm
const resultRegex = /Start\sError\n(.*\n(?:\s*at.*\n)*)(?:\s.*[^}])?}?\n?End\sError/gm
const resultFiles = ['commander.log', 'express.log', 'javascript-algorithms.log', 'lodash.log'];
// const projects = ['atom', 'eslint', 'express', 'http-server', 'node', 'standard', 'webpack']
const projects = ['commander', 'express', 'javascript-algorithms', 'lodash'];
// for (let i = 1; i <= 1; i++) {
//     for (let project of projects) {
//         resultFiles.push(`results/output_${project}_${i}.log`);
//     }
// }

console.log(resultFiles);

for (let i = 0; i < resultFiles.length; i++) {
    const resultFile = resultFiles[i];
    console.log(resultFile);
    let regexResults = [];
    try {
        // const file = await fsPromises.open(resultFile);
        const text = fs.readFileSync(resultFile).toString();
        let regexResult;
        while ((regexResult = resultRegex.exec(text)) !== null) {
            // const crashNumber = regexResult[1];
            const stackTrace = regexResult[1];
            let contained = false;
            const splitStackTrace = stackTrace.split('\n');
            let finalStackTraceArray = [splitStackTrace[0]];
            for (let i = 1; i < splitStackTrace.length; i++) {
                const line = splitStackTrace[i];
                if (line.includes('instrumented')) {
                    const firstPart = line.split('.syntest/')[0];
                    const secondPart = line.split('instrumented/')[1];
                    finalStackTraceArray.push(firstPart + secondPart);
                } else if (line.includes('.syntest')) {
                    const firstPart = line.split('.syntest/')[0];
                    const secondPart = line.split('tests/')[1];
                    finalStackTraceArray.push(firstPart + '.syntest/tests/' + secondPart);
                } else {
                    finalStackTraceArray.push(line);
                }
            }
            const finalStackTrace = finalStackTraceArray.join('\n');
            for (let item of regexResults) {
                if (checkSameStackTraces(item.stackTrace, finalStackTrace)) {
                    contained = true;
                    break;
                }
            }
            if (finalStackTraceArray[1].includes('tests/tempTest.spec.js')) {
                continue;
            }
            if (!contained) {
                regexResults.push({
                    resultFile,
                    stackTrace: finalStackTrace
                });
            }
        }

        const obj = {};
        let num = 1;
        for (let item of regexResults) {
            let trace = item.stackTrace;
            let crashNum = `crash${num++}`;
            obj[crashNum] = {
                crashProject: item.resultFile.split('.')[0],
                trace
            };
        }

        console.log(regexResults);
        console.log('open file');
        const outfile = `${resultFile.substring(0, resultFile.length - 4)}`;
        const outputFile = await fsPromises.open(outfile + '.json', 'w');
        console.log(outfile);
        console.log('write to file');
        await outputFile.writeFile(JSON.stringify(obj));
        await outputFile.close();
        // const altFile = await fsPromises.open(outfile + '.txt', 'w');
        // await altFile.writeFile(obj.toString());
        // await altFile.close();
    } catch (e) {
        console.log(e);
    }
}

const jsonFiles = [];
for (let project of projects) {
    jsonFiles.push(`${project}.json`);
}

for (let i = 0; i < jsonFiles.length; i++) {
    const resultFile = jsonFiles[i];
    try {
        // const file = await fsPromises.open(resultFile);
        const jsonObj = JSON.parse(fs.readFileSync(resultFile).toString());
        let num = 1;
        for (let item of Object.entries(jsonObj)) {
            const crashId = item[0].replace('crash', '');
            let crashProject = resultFile.split('.json')[0];
            // crashProject.pop()
            // crashProject = crashProject.join('-');
            const stackTrace = item[1].trace;
            const packageFile = JSON.parse(fs.readFileSync(`${crashProject}/package.json`).toString());
            const crashFile = {
                issueNumber: `${crashProject}-${crashId}`,
                info: stackTrace.split('\n')[0],
                url: packageFile?.repository?.url,
                version: packageFile.version,
                dependencies: packageFile.dependencies || {},
                requireCrashDependency: true
            }
            if (packageFile.devDependencies) {
                for (const dep of Object.entries(packageFile.devDependencies)) {
                    crashFile.dependencies[dep[0]] = dep[1];
                }
            }
            crashFile.crashId = `${crashProject}-${crashId}`;
            fs.mkdirSync(`benchmark/crashes/syntest-collected/${crashProject}/${crashProject}-${crashId}`, {recursive: true});
            const outfile = `benchmark/crashes/syntest-collected/${crashProject}/${crashProject}-${crashId}/${crashProject}-${crashId}`;
            let outputFile = await fsPromises.open(outfile + '.json', 'w');
            await outputFile.writeFile(JSON.stringify(crashFile));
            await outputFile.close();
            outputFile = await fsPromises.open(outfile + '.log', 'w');
            await outputFile.writeFile(stackTrace);
            await outputFile.close();
            num++;
            // execSync(`cp -r ${crashProject} benchmark/crashes/syntest-collected/${crashProject}/${crashProject}-${crashId}/`)
        }
    } catch (e) {
        console.log(e);
    }
}

function checkSameStackTraces(stack1, stack2) {
    const stack1Array = stack1.split('\n');
    const stack2Array = stack2.split('\n');
    if (stack1Array.length !== stack2Array.length) {
        return false;
    }
    if (stack1Array[0] !== stack2Array[0]) {
        return false;
    }
    for (let i = 1; i < stack1Array.length; i++) {
        if (stack1Array[i].includes("tests/tempTest.spec.js") && stack2Array[i].includes("tests/tempTest.spec.js")) {
            continue;
        }
        if (stack1Array[i] !== stack2Array[i]) return false;
    }
    return true;
}
