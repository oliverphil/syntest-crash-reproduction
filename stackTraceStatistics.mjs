import {EnvironmentGenerator} from "@syntest/crash-reproduction-setup";
import {WriteStream} from "fs";

const environmentGenerator = new EnvironmentGenerator();

let numberOfCrashes = 0;

const summary = {};

for (const project of ['bugsjs', 'github', 'syntest-collected', 'secbench']) {
    console.log(project);
    const stdout = process.stdout;
    const crashes = environmentGenerator.loadAssets(undefined, project, undefined);
    numberOfCrashes += crashes.length;

    const traces = crashes.map(crash => {
        return {
            trace: crash.stackTrace.trace,
            project: crash.project,
            type: crash.stackTrace.error.errorType,
            message: crash.stackTrace.error.errorMessage
        };
    });
    let lengthStats = {
        summary: {
            total: 0,
            num: 0,
            min: Number.MAX_VALUE,
            max: 0,
            values: [],
            TypeError: {
                total: 0,
                num: 0,
                values: []
            },
            AssertionError: {
                total: 0,
                num: 0,
                values: []
            },
            YAMLException: {
                total: 0,
                num: 0,
                values: []
            },
            SyntaxError: {
                total: 0,
                num: 0,
                values: []
            },
            Other: {
                total: 0,
                num: 0,
                values: []
            }
        }
    }
    let errorStats = {
    }

    const errorTypeStats = {
        TypeError: {
            total: 0,
            num: 0,
            values: []
        },
        AssertionError: {
            total: 0,
            num: 0,
            values: []
        },
        YAMLException: {
            total: 0,
            num: 0,
            values: []
        },
        SyntaxError: {
            total: 0,
            num: 0,
            values: []
        },
        Other: {
            total: 0,
            num: 0,
            values: []
        }
    };

    for (const crash of traces) {
        if (!lengthStats[crash.project]) {
            lengthStats[crash.project] = {
                total: crash.trace.length,
                num: 1,
                max: crash.trace.length,
                min: crash.trace.length,
                values: [crash.trace.length],
                TypeError: {
                    total: 0,
                    num: 0,
                    values: []
                },
                AssertionError: {
                    total: 0,
                    num: 0,
                    values: []
                },
                YAMLException: {
                    total: 0,
                    num: 0,
                    values: []
                },
                SyntaxError: {
                    total: 0,
                    num: 0,
                    values: []
                },
                Other: {
                    total: 0,
                    num: 0,
                    values: []
                }
            }
        } else {
            lengthStats[crash.project].total += crash.trace.length;
            lengthStats[crash.project].values.push(crash.trace.length);
            lengthStats[crash.project].num++;
            if (lengthStats[crash.project].max < crash.trace.length) {
                lengthStats[crash.project].max = crash.trace.length;
            }
            if (lengthStats[crash.project].min > crash.trace.length) {
                if (crash.trace.length === 0) {
                    console.log(crash.crashId);
                }
                lengthStats[crash.project].min = crash.trace.length
            }
        }
        lengthStats.summary.total += crash.trace.length
        lengthStats.summary.values.push(crash.trace.length);
        lengthStats.summary.num++;
        if (lengthStats.summary.max < crash.trace.length) {
            lengthStats.summary.max = crash.trace.length;
        }
        if (lengthStats.summary.min > crash.trace.length) {
            lengthStats.summary.min = crash.trace.length
        }

        if (Object.keys(errorStats).includes(crash.type)) {
            errorStats[crash.type]++;
        } else {
            errorStats[crash.type] = 1;
        }
        if (Object.keys(summary).includes(crash.type)) {
            summary[crash.type]++;
        } else {
            summary[crash.type] = 1;
        }
        if (Object.keys(errorTypeStats).includes(crash.type)) {
            errorTypeStats[crash.type].total += crash.trace.length;
            errorTypeStats[crash.type].num += 1;
            errorTypeStats[crash.type].values.push(crash.trace.length);
        } else {
            errorTypeStats.Other.total += crash.trace.length;
            errorTypeStats.Other.num += 1;
            errorTypeStats.Other.values.push(crash.trace.length);
        }
        if (Object.keys(lengthStats[crash.project]).includes(crash.type)) {
            lengthStats[crash.project][crash.type].total += crash.trace.length;
            lengthStats[crash.project][crash.type].num += 1;
            lengthStats[crash.project][crash.type].values.push(crash.trace.length);
            lengthStats.summary[crash.type].total += crash.trace.length;
            lengthStats.summary[crash.type].num += 1;
            lengthStats.summary[crash.type].values.push(crash.trace.length);
        } else {
            lengthStats[crash.project].Other.total += crash.trace.length;
            lengthStats[crash.project].Other.num += 1;
            lengthStats[crash.project].Other.values.push(crash.trace.length);
            lengthStats.summary.Other.total += crash.trace.length;
            lengthStats.summary.Other.num += 1;
            lengthStats.summary.Other.values.push(crash.trace.length);
        }
    }

    for (const key of Object.keys(lengthStats).filter(p => !p.includes('Error') && !p.includes('Exception') && p !== 'Other')) {
        const project = lengthStats[key];
        const mean = project.total / project.num;
        project.average = mean;
        project.standardDeviation = Math.sqrt(project.values.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / project.values.length);
        for (const error of ['TypeError', 'AssertionError', 'YAMLException', 'SyntaxError', 'Other']) {
            const mean = project[error].total / project[error].num;
            project[error].average = mean;
            try {
                project[error].standardDeviation = Math.sqrt(project[error].values.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / project[error].values.length);
            } catch {
                project[error].standardDeviation = 0;
            }
        }
    }
    for (const project of Object.values(errorTypeStats)) {
        const mean = project.total / project.num;
        project.average = mean;
        try {
            project.standardDeviation = Math.sqrt(project.values.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / project.values.length);
        } catch {
            project.standardDeviation = 0;
        }
    }

    console.log(project);
    let outputString = '';
    for (const key of Object.keys(lengthStats)) {
        const project = lengthStats[key];
        outputString += `${key} & \\emph{st} & ${project.TypeError.num} & ${project.AssertionError.num} & ${project.YAMLException.num} & ${project.SyntaxError.num} & ${project.Other.num} & ${project.num} \\\\\n`;
        outputString += `& \\emph{fr} & ${project.TypeError.total} & ${project.AssertionError.total} & ${project.YAMLException.total} & ${project.SyntaxError.total} & ${project.Other.total} & ${project.total} \\\\\n`;
        outputString += `& $\\overline{\\emph{fr}}$ & ${project.TypeError.average.toFixed(1)} & ${project.AssertionError.average.toFixed(1)} & ${project.YAMLException.average.toFixed(1)} & ${project.SyntaxError.average.toFixed(1)} & ${project.Other.average.toFixed(1)} & ${project.average.toFixed(1)} \\\\\n`;
        outputString += `& $\\sigma$ & ${project.TypeError.standardDeviation.toFixed(1)} & ${project.AssertionError.standardDeviation.toFixed(1)} & ${project.YAMLException.standardDeviation.toFixed(1)} & ${project.SyntaxError.standardDeviation.toFixed(1)} & ${project.Other.standardDeviation.toFixed(1)} & ${project.standardDeviation.toFixed(1)} \\\\\n`
        outputString += '\\hline\n';
    }
    console.log(outputString.replaceAll('NaN', '0'));
    // console.log(lengthStats);
    // for (const project of Object.keys(lengthStats)) {
    //     console.log(project);
    //     console.log(lengthStats[project].errors);
    // }
    // console.log(errorStats);
    // console.log(errorTypeStats);
}
console.log(summary);
console.log("Number of Crashes", numberOfCrashes);
