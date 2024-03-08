import * as fs from 'fs';
import {execSync} from "child_process";

const TARGET_REGEX = /Target:\s\/local\/tmp\/oliverphil\/[0-9\.]+\/syntest-crash-reproduction\/benchmark\/crashes\/([A-Za-z\-]+)\/([A-Za-z\-]+)\/([A-Za-z0-9\-]+)\/([A-Za-z0-9_\/\-\.]+)/
const OBJECTIVE_REGEX = /Objective:\s([a-zA-Z\-]+)\s:\s([0-9\.]+)/
const POST_SEARCH_OBJECTIVE_REGEX = /Post-Search\sObjective:\s([a-zA-Z\-]+)\s:\s([0-9\.]+)/
const REGEX_CONNECTOR = /\n/

const handleOneRun = (runNumber, syntestFile, outputFileDirectory, outputFiles) => {
    const functions = [];
    if (syntestFile.combination) {
        functions.push(...syntestFile.functions);
    } else {
        functions.push(syntestFile.function);
    }

    const runResults = {};

    const regex = constructRegexForMultipleObjectives(functions.length);
    for (const file of outputFiles) {
        const results = handleOneOutputFile(`${outputFileDirectory}/${file}`, functions.length, regex);
        if (!runResults[`syntest-${runNumber}`]) {
            runResults[`syntest-${runNumber}`] = results;
        } else {
            runResults[`syntest-${runNumber}`] = {
                ...runResults[`syntest-${runNumber}`],
                ...results
            }
        }
    }

    return runResults;
}

const handleOneOutputFile = (outputFile, numberOfObjectives, regex) => {
    const outputFileContents = fs.readFileSync(outputFile).toString();
    const results = {};
    for (let regexResults = regex.exec(outputFileContents); regexResults = regex.exec(outputFileContents); ) {
        const matchedString = regexResults[0];
        const crashType = regexResults[1];
        const crashProject = regexResults[2];
        const crashId = regexResults[3];
        const targetFile = regexResults[4];
        const functionResults = {};
        for (let i = 0; i < numberOfObjectives; i++) {
            const objective = regexResults[5 + (i * 2)];
            const result = Number.parseFloat(regexResults[5 + (i * 2) + 1]);
            functionResults[objective] = result;
        }
        const resultObject = {
            crashProject,
            crashId,
            crashType,
            targetFile,
            functionResults
        }
        if (!results[`${crashType}/${crashProject}/${crashId}`]) {
            results[`${crashType}/${crashProject}/${crashId}`] = [
                resultObject
            ]
        } else {
            results[`${crashType}/${crashProject}/${crashId}`].push(resultObject);
        }
    }

    return results;
}

const constructRegexForMultipleObjectives = (numberOfObjectives) => {
    let expression = TARGET_REGEX.source;
    for (let i = 1; i <= numberOfObjectives; i++) {
        expression = expression + REGEX_CONNECTOR.source + OBJECTIVE_REGEX.source;
    }
    return new RegExp(expression, 'gm');
}

const cleanup = (resultsDirectory) => {
    try {
        execSync(`rm -rf ${resultsDirectory}/vol`);
    } catch {
        console.log("Nothing to Clean");
    }
}

const createSingleRunCSV = (num, runResults, resultsDirectory) => {
    const outputFileName = `results_${num}.csv`
    let outputString = '';
    const outputHeader = `Run, Crash Type, Crash Project, Crash ID, Target File, Function 1, Function 1 Result, Function 2, Function 2 Result\n`;
    for (const result of Object.values(runResults[`syntest-${num}`])) {
        for (const targetFile of result) {
            outputString += `${num}, ${targetFile.crashType}, ${targetFile.crashProject}, ${targetFile.crashId}, ${targetFile.targetFile}`;
            let funcs = 0;
            for (const func of Object.keys(targetFile.functionResults)) {
                if (funcs >= 2) break
                funcs++;
                outputString += `, ${func}, ${targetFile.functionResults[func]}`;
            }
            if (funcs === 1) {
                outputString += ', N/A, N/A';
            }
            outputString += '\n';
        }
    }
    const finalOutputString = outputHeader + outputString;
    fs.writeFileSync(`${resultsDirectory}/${outputFileName}`, finalOutputString);
    return outputString;
}

const createFullCSV = (resultsDirectory, allResultsStrings) => {
    const outputFileName = `results_full.csv`
    const outputHeader = `Run, Crash Type, Crash Project, Crash ID, Target File, Function 1, Function 1 Result, Function 2, Function 2 Result\n`;
    const finalOutputString = outputHeader + allResultsStrings.join('');
    fs.writeFileSync(`${resultsDirectory}/${outputFileName}`, finalOutputString);
}

const main = () => {
    const resultsDirectory = 'results_archive/24-02-05_fitness_terms_experiment';
    cleanup(resultsDirectory);
    // const syntestFiles = fs.readdirSync(resultsDirectory).filter(file => file.includes('.syntest-'));
    const syntestFiles = ['.syntest-12.json', '.syntest-22.json'];
    const allResults = {};
    const allResultsStrings = [];
    for (const file of syntestFiles.sort((a, b) => {
        const aNum = a.split('-')[1].replaceAll('.json', '');
        const bNum = b.split('-')[1].replaceAll('.json', '');
        return parseInt(aNum) - parseInt(bNum);
    })) {
        const num = file.split('-')[1].replaceAll('.json', '');
        console.log(num);
        const runConfiguration = JSON.parse(fs.readFileSync(`${resultsDirectory}/${file}`).toString());
        try {
            execSync(`tar -zxf ${resultsDirectory}/output_${num}.tar.gz -C ${resultsDirectory} 2> /dev/null`);
        } catch {
            console.error(`No output file for run ${num}`);
            continue;
        }
        const outputFileDirectory = `${resultsDirectory}/vol/grid-solar/sgeusers/oliverphil/output`;
        const outputFiles = fs.readdirSync(outputFileDirectory).filter(f => f.includes('output'));
        const runResults = handleOneRun(num, runConfiguration, outputFileDirectory, outputFiles);
        if (Object.keys(runResults).length === 0) continue;
        const csvString = createSingleRunCSV(num, runResults, resultsDirectory);
        allResultsStrings.push(csvString);
        for (const key of Object.keys(runResults)) {
            if (!allResults[key]) {
                allResults[key] = runResults[key];
            } else {
                console.error(`Duplicate Key: ${key} in run: ${num}`);
            }
        }
        cleanup(resultsDirectory);
    }
    // createFullCSV(resultsDirectory, allResultsStrings);
}

main();