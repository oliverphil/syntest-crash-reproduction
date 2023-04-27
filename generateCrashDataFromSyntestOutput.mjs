import * as fsPromises from 'fs/promises';
import * as fs from 'fs';

const resultRegex = /======\sException\sfor\sDataset\s=======\n([A-Za-z1-9\-]*)\n(.*\n(?:\s*at.*\n)*)(?:\s.*[^}])?}?\n?======\sEnd\sException\s=======/gm
const resultFiles = [];
const projects = ['atom', 'eslint', 'express', 'http-server', 'node', 'standard', 'webpack']
for (let i = 1; i <= 1; i++) {
    for (let project of projects) {
        resultFiles.push(`results/output_${project}_${i}.log`);
    }
}

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
            const crashNumber = regexResult[1];
            const stackTrace = regexResult[2];
            let contained = false;
            for (let item of regexResults) {
                if (checkSameStackTraces(item.stackTrace, stackTrace)) {
                    contained = true;
                    break;
                }
            }
            if (!contained) {
                regexResults.push({
                    crashNumber,
                    stackTrace
                });
            }
        }

        const obj = {};
        let num = 1;
        for (let item of regexResults) {
            let trace = item.stackTrace;
            let crashNum = `crash${num++}`;
            obj[crashNum] = {
                crashNumber: item.crashNumber,
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
        const altFile = await fsPromises.open(outfile + '.txt', 'w');
        await altFile.writeFile(regexResults);
        await altFile.close();
    } catch (e) { console.log(e); }
}

const jsonFiles = [];
for (let project of projects) {
    jsonFiles.push(`results/output_${project}_${1}.json`);
}

for (let i = 0; i < jsonFiles.length; i++) {
    const resultFile = jsonFiles[i];
    try {
        // const file = await fsPromises.open(resultFile);
        const jsonObj = JSON.parse(fs.readFileSync(resultFile).toString());
        let num = 1;
        for (let item of Object.values(jsonObj).filter(v => !v.crashNumber.includes('node-error') && !v.crashNumber.includes('seeded'))) {
            const crashId = item.crashNumber;
            let crashProject = crashId.split('-');
            crashProject.pop()
            crashProject = crashProject.join('-');
            const stackTrace = item.trace;
            const crashFile = JSON.parse(fs.readFileSync(`benchmark/crashes/${crashProject}/${crashId}/${crashId}.json`).toString());
            crashFile.crashId = `${crashId}-${num}`;
            fs.mkdirSync(`benchmark/crashes/${crashProject}/${crashId}-${num}`, {recursive: true});
            const outfile = `benchmark/crashes/${crashProject}/${crashId}-${num}/${crashId}-${num}`;
            let outputFile = await fsPromises.open(outfile + '.json', 'w');
            await outputFile.writeFile(JSON.stringify(crashFile));
            await outputFile.close();
            outputFile = await fsPromises.open(outfile + '.log', 'w');
            await outputFile.writeFile(stackTrace);
            await outputFile.close();
            num++;
        }
    } catch (e) { console.log(e); }
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
        if (stack1Array[i].includes(".syntest/tests/tempTest.spec.js") && stack2Array[i].includes(".syntest/tests/tempTest.spec.js")) {
            continue;
        }
        if (stack1Array[i] !== stack2Array[i]) return false;
    }
    return true;
}
