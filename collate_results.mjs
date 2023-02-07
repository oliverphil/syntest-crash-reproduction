import * as fsPromises from 'fs/promises';

const resultRegex = /\s*(\d*\s\/\s\d*)\s\|\s*(\d*\s\/\s\d*)\s\|\s*(\d*\s\/\s\d*)\s\|\s\/local\/scratch\/syntest-crash-reproduction\/benchmark\/crashes\/([A-Za-z-]*)\/([A-Za-z\d-]*)\/node_modules\/(.*)/
const resultFiles = [];
for (let i = 1; i <= 15; i++) {
    resultFiles.push(`output_${i}.log`);
}

console.log(resultFiles);

for (let i = 0; i < resultFiles.length; i++) {
    const resultFile = resultFiles[i];
    console.log(resultFile);
    let regexResults = '';
    const file = await fsPromises.open(resultFile);
    for await (const line of file.readLines()) {
        const regexResult = resultRegex.exec(line);
        if (regexResult) {
            const branchCoverage = regexResult[1];
            const statementCoverage = regexResult[2];
            const functionCoverage = regexResult[3];
            const project = regexResult[4];
            const crashId = regexResult[5];
            const file = regexResult[6];

            regexResults += `${project},${crashId},N,${file},${branchCoverage},,${statementCoverage},,${functionCoverage},\n`;
        }
    }

    console.log('open file');
    const outputFile = await fsPromises.open(`output_${i + 1}.csv`, 'w');
    console.log('write to file');
    await outputFile.writeFile(regexResults);
}
