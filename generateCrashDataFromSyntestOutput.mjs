import * as fsPromises from 'fs/promises';
import * as fs from 'fs';

const resultRegex = /======\sException\sfor\sDataset\s=======\n(.*\n(?:\s*at.*\n)*)======\sEnd\sException\s=======/gm
const resultFiles = [];
const projects = ['atom', 'eslint', 'express', 'http-server', 'node', 'standard', 'webpack']
for (let i = 1; i <= 30; i++) {
    for (let project of projects) {
        resultFiles.push(`results/output_${project}_${i}.log`);
    }
}

console.log(resultFiles);

// for (let i = 0; i < resultFiles.length; i++) {
for (let i = 0; i < 1; i++) {
    const resultFile = resultFiles[i];
    console.log(resultFile);
    let regexResults = [];
    try {
        // const file = await fsPromises.open(resultFile);
        const text = fs.readFileSync(resultFile).toString();
        let regexResult;
        while ((regexResult = resultRegex.exec(text)) !== null) {
            const stackTrace = regexResult[1];
            let contained = false;
            for (let trace of regexResults) {
                if (checkSameStackTraces(trace, stackTrace)) {
                    contained = true;
                    break;
                }
            }
            if (!contained) {
                regexResults.push(stackTrace);
            }
        }

        console.log(regexResults);
        // console.log('open file');
        // const outfile = `${resultFile.substring(0, resultFile.length - 4)}.csv`;
        // const outputFile = await fsPromises.open(outfile, 'w');
        // console.log(outfile);
        // console.log('write to file');
        // await outputFile.writeFile(regexResults);
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
