import * as fsPromises from 'fs/promises';

const resultRegex = /\s*(\d*\s\/\s\d*)\s\|\s*(\d*\s\/\s\d*)\s\|\s*(\d*\s\/\s\d*)\s\|\s*([\d\.N/A]*)\s\|\s\/.*\/syntest-crash-reproduction\/benchmark\/crashes\/(?:seeded)?\/?([A-Za-z-]*)\/([A-Za-z\d-]*)\/node_modules\/(.*)/
const resultFiles = [];
const projects = ['atom', 'eslint', 'express', 'http-server', 'node', 'standard', 'webpack']
const runMap = {};
for (let i = 1; i <= 20; i++) {
    runMap[`results/output_${i}.csv`] = '';
    for (let project of projects) {
        resultFiles.push(`results/output_${project}_${i}.log`);
        resultFiles.push(`results/output_${project}_syntest_${i}.log`)
    }
}

console.log(resultFiles);

for (let i = 0; i < resultFiles.length; i++) {
    const resultFile = resultFiles[i];
    console.log(resultFile);
    const splitFile = resultFile.substring(0, resultFile.length - 4).split('_');
    const num = splitFile[splitFile.length - 1];
    let regexResults = '';
    try {
        const file = await fsPromises.open(resultFile);
        for await (const line of file.readLines()) {
            const regexResult = resultRegex.exec(line);
            if (regexResult) {
                const branchCoverage = regexResult[1];
                const statementCoverage = regexResult[2];
                const functionCoverage = regexResult[3];
                const distance = regexResult[4];
                const project = regexResult[5];
                const crashId = regexResult[6];
                const file = regexResult[7];

                regexResults += `${project},${crashId},N,${file},${branchCoverage},,${statementCoverage},,${functionCoverage},,${distance}\n`;
            }
        }

        runMap[`results/output_${num}.csv`] += regexResults;
        console.log('open file');
        const outfile = `${resultFile.substring(0, resultFile.length - 4)}.csv`;
        const outputFile = await fsPromises.open(outfile, 'w');
        console.log(outfile);
        console.log('write to file');
        await outputFile.writeFile(regexResults);
        await outputFile.close();
    } catch (e) { console.log(e); }
}

try {
    for (let key of Object.keys(runMap)) {
        console.log('open file');
        const outfile = key;
        const outputFile = await fsPromises.open(outfile, 'w');
        console.log(outfile);
        console.log('write to file');
        await outputFile.writeFile(runMap[key]);
    }
} catch (e) {
    console.log(e);
}
