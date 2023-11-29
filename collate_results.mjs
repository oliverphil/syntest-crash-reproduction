import * as fsPromises from 'fs/promises';
import * as fs from 'fs';

// const resultRegex = /\s*(\d*\s\/\s\d*)\s\|\s*(\d*\s\/\s\d*)\s\|\s*(\d*\s\/\s\d*)\s\|\s*([\d\.N/A]*)\s\|\s\/.*\/syntest-crash-reproduction\/benchmark\/crashes\/(?:seeded)?\/?([A-Za-z-]*)\/([A-Za-z\d-]*)\/node_modules\/(.*)/
const resultRegex = /║\s.*:\s(?:[A-Za-z\.]*)\s+│\s(\d+\s\/\s\d+)\s+│\s(\d+\s\/\s\d+)\s+│\s(\d+\s\/\s\d+)\s+│\s(\d+\s\/\s\d+)\s+│\s\/.*\/syntest-crash-reproduction\/benchmark\/crashes\/([A-Za-z-]+)\/([A-Za-z-]+)\/([A-Za-z0-9-]+)\/(?:[A-Za-z0-9-]+\/)*?(?:node_modules\/)?([A-Za-z\/\.0-9-_]+)\s+║/
// const resultFiles = [];
const resultFiles = fs.readdirSync('output/').filter(f => f.includes('output')).map(f => `output/${f}`);
// const projects = ['atom', 'eslint', 'express', 'http-server', 'node', 'standard', 'webpack']
const runMap = {};
// for (let i = 1; i <= 20; i++) {
//     runMap[`results/output_${i}.csv`] = '';
//     for (let project of projects) {
//         resultFiles.push(`results/output_${project}_${i}.log`);
//         resultFiles.push(`results/output_${project}_syntest_${i}.log`)
//     }
// }

console.log(resultFiles);

let crashes = new Set();

for (let i = 0; i < resultFiles.length; i++) {
    const resultFile = resultFiles[i];
    console.log(resultFile);
    let regexResults = ''; // 'Source,Project,CrashId,File,Branch,Branch %,Statement,Statement %,Function,Function %,Objective,Objective %\n';
    try {
        const file = await fsPromises.open(resultFile);
        for await (const line of file.readLines()) {
            const regexResult = resultRegex.exec(line);
            if (regexResult) {
                const statementCoverage = regexResult[1].toString().replaceAll(/\s/g, '');
                const branchCoverage = regexResult[2].toString().replaceAll(/\s/g, '');
                const functionCoverage = regexResult[3].toString().replaceAll(/\s/g, '');
                const objectiveCoverage = regexResult[4].toString().replaceAll(/\s/g, '');
                const source = regexResult[5];
                const project = regexResult[6];
                const crashId = regexResult[7];
                const file = regexResult[8];

                crashes.add(crashId);

                let statement = {
                    coverage: statementCoverage,
                    percentage: '0%'
                };
                let branch = {
                    coverage: branchCoverage,
                    percentage: '0%'
                };
                let fn = {
                    coverage: functionCoverage,
                    percentage: '0%'
                };
                let objective = {
                    coverage: objectiveCoverage,
                    percentage: '0%'
                };

                for (const item of [statement, branch, fn, objective]) {
                    try {
                        const split = item.coverage.split('/');
                        const numerator = Number.parseInt(split[0]);
                        const denominator = Number.parseInt(split[1]);
                        if (denominator === 0) continue;
                        item.percentage = `${Math.round(numerator/denominator * 100)}%`;
                    } catch (error) {
                        console.log(error);
                    }
                }

                regexResults += `${source},${project},${crashId},N,${file},${branchCoverage},${branch.percentage},`+
                    `${statementCoverage},${statement.percentage},${functionCoverage},${fn.percentage},` +
                    `${objectiveCoverage},${objective.percentage}\n`;
            }
        }

        const runMapFile = `${resultFile.split('-')[0].replace('output', 'results')}.csv`;
        if (!runMap[runMapFile]) {
            runMap[runMapFile] = '';
        }
        runMap[runMapFile] += regexResults;
        console.log('open file');
        const outfile = `${resultFile.substring(0, resultFile.length - 4).replace('output', 'results')}.csv`;
        const outputFile = await fsPromises.open(outfile, 'w');
        console.log(outfile);
        console.log('write to file');
        await outputFile.writeFile('Source,Project,CrashId,File,Branch,Branch %,Statement,Statement %,Function,Function %,Objective,Objective %\n' + regexResults);
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
        await outputFile.writeFile('Source,Project,CrashId,File,Branch,Branch %,Statement,Statement %,Function,Function %,Objective,Objective %\n' + runMap[key]);
    }
} catch (e) {
    console.log(e);
}

console.log(crashes.size);
