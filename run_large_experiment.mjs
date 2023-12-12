import largeExperimentConfig from './largeExperimentConfig.json' assert { type: "json" };
import {writeFileSync} from "fs";

const fitnessConfigs = [];

for (const fitness of largeExperimentConfig.stackTraceUtils) {
    if (fitness.range) {
        const min = fitness.range[0];
        const max = fitness.range[1];
        for (let i = min; i <= max; i++) {
            fitnessConfigs.push({
                ...fitness,
                N: i
            })
        }
    } else {
        fitnessConfigs.push(fitness)
    }
}

console.log(fitnessConfigs.length);

const withCombinations = new Set(fitnessConfigs);
for (const item of fitnessConfigs.flatMap((v, i) => fitnessConfigs.slice(i + 1)
    .map((w => {
        return {
            combination: true,
            functions: [
                v,
                w
            ]
        }
    }))).filter(v => {
        if (v.combination) {
            return v.functions[0].functionName !== v.functions[1].functionName
                && ((v.functions[0].range && !v.functions[1].range)
                || (v.functions[1].range && !v.functions[0].range)
                || (!v.functions[0].range && !v.functions[1].range))
        }
        return true;
    })) {
    withCombinations.add(item);
}

// const configsToRun = [];
// for (const coverage of largeExperimentConfig.useCoverage) {
//     for (const config of withCombinations) {
//         configsToRun.push({
//             ...config,
//             "use-coverage": coverage
//         });
//     }
// }

// for (const config of configsToRun.filter(c => c.combination)) {
//     console.log(config);
// }

console.log("Number of Configs: ", withCombinations.size);
writeFileSync('configs.json', JSON.stringify([...withCombinations].filter(c => c.combination), undefined, 2))
let time = withCombinations.size * (60 * 60 * 3)
console.log("Seconds: ", time);
console.log("Minutes: ", time / 60);
console.log("Hours: ", time / 60 / 60);
console.log("Days: ", time / 60 / 60 / 24);
