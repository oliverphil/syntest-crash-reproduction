import {EnvironmentGenerator} from "@syntest/crash-reproduction-setup";


const environmentGenerator = new EnvironmentGenerator();
const crashes = environmentGenerator.loadAssets(undefined, false, false);

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
        max: 0
    }
}
let errorStats = {

}

for (const crash of traces) {
    if (!lengthStats[crash.project]) {
        lengthStats[crash.project] = {
            total: crash.trace.length,
            num: 1,
            max: crash.trace.length,
            min: crash.trace.length
        }
    } else {
        lengthStats[crash.project].total += crash.trace.length;
        lengthStats[crash.project].num++;
        if (lengthStats[crash.project].max < crash.trace.length) {
            lengthStats[crash.project].max = crash.trace.length;
        }
        if (lengthStats[crash.project].min > crash.trace.length) {
            lengthStats[crash.project].min = crash.trace.length
        }
    }
    lengthStats.summary.total += crash.trace.length
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
}

for (const project of Object.values(lengthStats)) {
    project.average = project.total / project.num;
}

console.log(lengthStats);
console.log(errorStats);