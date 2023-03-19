import * as fsPromises from 'fs/promises';

const resultRegex = /\s*(\d*\s\/\s\d*)\s\|\s*(\d*\s\/\s\d*)\s\|\s*(\d*\s\/\s\d*)\s\|\s*([\d\.]*)\s\|\s\/.*\/syntest-crash-reproduction\/benchmark\/crashes\/(?:seeded)?\/?([A-Za-z-]*)\/([A-Za-z\d-]*)\/node_modules\/(.*)/
const resultFiles = [];
for (let i = 1; i <= 30; i++) {
    resultFiles.push(`results/output_${i}.log`);
}

console.log(resultFiles);

for (let i = 0; i < resultFiles.length; i++) {
    const resultFile = resultFiles[i];
    console.log(resultFile);
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

        console.log('open file');
        const outputFile = await fsPromises.open(`results/output_${i + 1}.csv`, 'w');
        console.log('write to file');
        await outputFile.writeFile(regexResults);
    } catch (e) { console.log(e); }
}
