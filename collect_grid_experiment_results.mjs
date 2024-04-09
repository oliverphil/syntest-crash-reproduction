import * as fs from 'fs';
import {execSync} from "child_process";
import exp from "node:constants";
import {all} from "eslint-plugin-promise/rules/lib/promise-statics.js";

const TARGET_REGEX = /Target:\s\/local\/tmp\/oliverphil\/[0-9\.]+\/syntest-crash-reproduction\/benchmark\/crashes\/([A-Za-z\-]+)\/([A-Za-z\-]+)\/([A-Za-z0-9\-_\.]+)\/([A-Za-z0-9_\/\-\.]+)/
const OBJECTIVE_REGEX = /Objective:\s([a-zA-Z\-]+)\s:\s([0-9\.]+)/
const POST_SEARCH_OBJECTIVE_REGEX = /(?:Post-Search\sObjective:\s([a-zA-Z\-]+)\s:\s([0-9\.e\+]+))?/
const REGEX_CONNECTOR = /\n/

const handleOneRun = (runNumber, syntestFile, outputFileDirectory, outputFiles) => {
    const functions = [];
    if (syntestFile.combination || !syntestFile.singleObjective) {
        functions.push(...syntestFile.functions);
    } else {
        functions.push(syntestFile.function);
    }

    const runResults = {};

    const regex = constructRegexForMultipleObjectives(functions.length);
    for (const file of outputFiles) {
        const results = handleOneOutputFile(`${outputFileDirectory}/${file}`, functions.length, regex, syntestFile.useCoverage);
        if (!runResults[`syntest-${runNumber}`]) {
            runResults[`syntest-${runNumber}`] = results;
        } else {
            for (const key of Object.keys(results)) {
                if (!runResults[`syntest-${runNumber}`][key]) {
                    runResults[`syntest-${runNumber}`][key] = [
                        ...results[key]
                    ]
                } else {
                    runResults[`syntest-${runNumber}`][key].push(...results[key]);
                }
            }
            // runResults[`syntest-${runNumber}`] = {
            //     ...runResults[`syntest-${runNumber}`],
            //     ...results
            // }
        }
    }

    return runResults;
}

const handleOneOutputFile = (outputFile, numberOfObjectives, regex, useCoverage) => {
    const outputFileContents = fs.readFileSync(outputFile).toString();
    const results = {};
    let regexResults;
    for (; regexResults = regex.exec(outputFileContents); ) {
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
        const postSearchObjectiveResults = {};
        for (let i = 0; i < 2; i++) {
            const postSearchIndex = 5 + ((i + numberOfObjectives) * 2);
            if (regexResults.length > postSearchIndex) {
                const postSearchObjective = regexResults[postSearchIndex];
                if (!postSearchObjective) continue;
                const result = Number.parseFloat(regexResults[postSearchIndex + 1]);
                postSearchObjectiveResults[postSearchObjective] = result;
            }
        }
        const resultObject = {
            crashProject,
            crashId,
            crashType,
            targetFile,
            useCoverage,
            functionResults,
            postSearchObjectiveResults
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
    expression = expression + REGEX_CONNECTOR.source + "?" + POST_SEARCH_OBJECTIVE_REGEX.source;
    expression = expression + REGEX_CONNECTOR.source + "?" + POST_SEARCH_OBJECTIVE_REGEX.source;
    return new RegExp(expression, 'gm');
}

const cleanup = (resultsDirectory) => {
    try {
        execSync(`rm -rf ${resultsDirectory}/vol`);
    } catch {
        console.log("Nothing to Clean");
    }
}

const createSingleRunCSV = (num, runResults, resultsDirectory, useCoverage) => {
    const outputFileName = `results_${num}.csv`
    let outputString = '';
    const outputHeader = `Run, Crash Type, Crash Project, Crash ID, Target File, Function 1, Function 1 Result, Function 2, Function 2 Result, Function 3, Function 3 Result, Post Search 1, Result, Post Search 2, Result, Coverage\n`;
    for (const result of Object.values(runResults[`syntest-${num}`])) {
        for (const targetFile of result) {
            outputString += `${num}, ${targetFile.crashType}, ${targetFile.crashProject}, ${targetFile.crashId}, ${targetFile.targetFile}`;
            let funcs = 0;
            for (const func of Object.keys(targetFile.functionResults).sort((a, b) => a.localeCompare(b))) {
                if (funcs >= 3) break
                funcs++;
                outputString += `, ${func}, ${targetFile.functionResults[func]}`;
            }
            switch (funcs) {
                case 1:
                    outputString += ', N/A, N/A';
                case 2:
                    outputString += ', N/A, N/A';
                    break;
            }
            funcs = 0;
            for (const func of Object.keys(targetFile.postSearchObjectiveResults)) {
                if (funcs >= 2) break;
                funcs++;
                outputString += `, ${func}, ${targetFile.postSearchObjectiveResults[func]}`;
            }
            switch (funcs) {
                case 0:
                    outputString += `, N/A, N/A`;
                case 1:
                    outputString += `, N/A, N/A`;
                    break;
            }
            outputString += ', ' + targetFile.useCoverage;
            outputString += '\n';
        }
    }
    const finalOutputString = outputHeader + outputString;
    fs.writeFileSync(`${resultsDirectory}/${outputFileName}`, finalOutputString);
    return outputString;
}

const createFullCSV = (resultsDirectory, allResultsStrings) => {
    const outputFileName = `results_full.csv`
    const outputHeader = `Run, Crash Type, Crash Project, Crash ID, Target File, Function 1, Function 1 Result, Function 2, Function 2 Result, Function 3, Function 3 Result, Post Search 1, Result, Post Search 2, Result, Coverage\n`;
    const finalOutputString = outputHeader + allResultsStrings.join('');
    fs.writeFileSync(`${resultsDirectory}/${outputFileName}`, finalOutputString);
}

const createFullCSVWithoutSyntest = (resultsDirectory, allResultsStrings) => {
    const outputFileName = 'results_full_no_syntest.csv';
    const outputHeader = `Run, Crash Type, Crash Project, Crash ID, Target File, Function 1, Function 1 Result, Function 2, Function 2 Result, Function 3, Function 3 Result, Post Search 1, Result, Post Search 2, Result, Coverage\n`;
    const resultStrings = allResultsStrings.map(s => s.split('\n').filter(res => !res.includes('syntest-collected')));
    const finalOutputString = outputHeader + resultStrings.map(s => s.join('\n')).join('');
    fs.writeFileSync(`${resultsDirectory}/${outputFileName}`, finalOutputString);
}

const createStats = (resultsDirectory, allResults) => {
    const stats = {}
    for (const run of Object.keys(allResults)) {
        const runResults = allResults[run];
        const runStats = {};
        let totalFramesCovered = 0;
        let numCrashesWithFramesCovered = 0;
        for (const crashKey of Object.keys(runResults)) {
            const crashResults = runResults[crashKey];
            let bestFramesCoveredResultForOneTarget = 0;
            let framesForCrash_mayContainDuplicates = 0;
            let bestEvoCrashResult = Number.MAX_VALUE;
            for (const crashResult of crashResults) {
                const framesCoveredForCrash = crashResult.postSearchObjectiveResults['stack-checkStackFramesCoveredAfterSearch'];
                const evoCrashResultForCrash = crashResult.postSearchObjectiveResults['stack-evoCrash'];
                framesForCrash_mayContainDuplicates += framesCoveredForCrash || 0;
                if (framesCoveredForCrash && framesCoveredForCrash > bestFramesCoveredResultForOneTarget) {
                    bestFramesCoveredResultForOneTarget = framesCoveredForCrash;
                }
                if (evoCrashResultForCrash && evoCrashResultForCrash < bestEvoCrashResult) {
                    bestEvoCrashResult = evoCrashResultForCrash;
                }
            }
            if (bestFramesCoveredResultForOneTarget > 0) {
                numCrashesWithFramesCovered++;
            }
            totalFramesCovered += bestFramesCoveredResultForOneTarget;
            runStats[crashKey] = {
                bestFramesCoveredResultForOneTarget,
                bestEvoCrashResult,
                framesForCrash_mayContainDuplicates
            }
        }

        stats[run] = {
            ...runStats,
            totalFramesCovered,
            numCrashesWithFramesCovered
        };
    }

    fs.writeFileSync(`${resultsDirectory}/stats.json`, JSON.stringify(stats, undefined, 4));
}

const main = () => {
    const resultsDirectory = 'results_archive/24-04-08_function_re_run';
    // const resultsDirectory = 'results_archive/24-03-14_terms_with_coverage';
    cleanup(resultsDirectory);
    // const syntestFiles = fs.readdirSync(resultsDirectory).filter(file => file.includes('.syntest-'));
    const syntestFiles = ['.syntest-25.json'];
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
        // if (runConfiguration.functions.map(f => f.functionName).includes('stackMatchWrongCrash')) continue;
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
    createFullCSV(resultsDirectory, allResultsStrings);
    createFullCSVWithoutSyntest(resultsDirectory, allResultsStrings);
    createStats(resultsDirectory, allResults);
}

main();