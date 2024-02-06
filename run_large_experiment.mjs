import largeExperimentConfig from './largeExperimentConfig.json' assert { type: "json" };
import {writeFileSync} from "fs";
import fs from "fs";
import {execSync} from "child_process";

const fitnessConfigs = [];

for (const fitness of largeExperimentConfig.stackTraceUtils) {
    if (fitness.range) {
        const min = fitness.range[0];
        const max = fitness.range[1];
        for (let i = min; i <= max; i++) {
            fitnessConfigs.push({
                ...fitness,
                N: i,
                combination: false
            })
        }
    } else {
        fitnessConfigs.push({
            ...fitness,
            combination: false
        })
    }
}

console.log(fitnessConfigs.length);

let withCombinations = new Set(fitnessConfigs);
// for (const item of fitnessConfigs.flatMap((v, i) => fitnessConfigs.slice(i + 1)
//     .map((w => {
//         return {
//             combination: true,
//             functions: [
//                 v,
//                 w
//             ]
//         }
//     }))).filter(v => {
//         if (v.combination) {
//             return v.functions[0].functionName !== v.functions[1].functionName
//                 && ((v.functions[0].range && !v.functions[1].range)
//                 || (v.functions[1].range && !v.functions[0].range)
//                 || (!v.functions[0].range && !v.functions[1].range))
//         }
//         return true;
//     })) {
//     withCombinations.add(item);
// }
withCombinations = [...withCombinations];

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

console.log("Number of Configs: ", withCombinations.length);
writeFileSync('configs.json', JSON.stringify([...withCombinations].filter(c => c.combination), undefined, 2))
let time = withCombinations.length * (60 * 60 * 3)
console.log("Seconds: ", time);
console.log("Minutes: ", time / 60);
console.log("Hours: ", time / 60 / 60);
console.log("Days: ", time / 60 / 60 / 24);

withCombinations.forEach((config, index) => {
    const syntestFile = {
        ...JSON.parse(fs.readFileSync('.syntest.json').toString()),
        ...config
    };
    writeFileSync(`.syntest-${index + 1}.json`, JSON.stringify(syntestFile, undefined, 4));
});

console.log(execSync(`./queue_experiment.sh 1 ${withCombinations.length} 1`).toString());
