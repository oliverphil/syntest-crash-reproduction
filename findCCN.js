const fs = require('fs');
const execSync = require('child_process').execSync;

// github crashes
// for (const project of ['atom', 'eslint', 'express', 'http-server', 'node', 'standard', 'webpack']) {
//     const path = `benchmark/crashes/github/${project}`;
//     const crashes = fs.readdirSync(path);
//     for (const crash of crashes) {
//         try {
//             const crashPath = path + '/' + crash;
//             if (project === 'atom') {
//                 execSync(`cr --format=json -e ${crashPath}/atom*/src -o analysis/github/ccn_${crash}.json`);
//             } else if (project === 'node') {
//                 execSync(`cr --format=json -e ${crashPath}/node-v*/lib -o analysis/github/ccn_${crash}.json`)
//             } else if (project === 'standard') {
//                 execSync(`cr --format=json -e ${crashPath}/node_modules/standard/ -o analysis/github/ccn_${crash}.json`);
//             } else {
//                 execSync(`cr --format=json -e ${crashPath}/node_modules/${project}/lib -o analysis/github/ccn_${crash}.json`);
//             }
//         } catch {
//             //
//         }
//     }
//
//     const ccns = [];
//     for (const ccnFile of fs.readdirSync('analysis/github/').filter(f => f.startsWith(`ccn_${project}`))) {
//         const ccnJson = JSON.parse(fs.readFileSync(ccnFile).toString());
//         ccns.push(ccnJson.cyclomatic);
//     }
//     console.log(project);
//     console.log(ccns);
//     console.log(ccns.reduce((a, b) => a + b) / ccns.length);
// }

// secbench crashes
for (const project of ['code-injection']) {
    const path = `benchmark/crashes/secbench/${project}`;
    const crashes = fs.readdirSync(path);
    for (const crash of crashes) {
        const dependency = crash.split('_')[0];
        try {
            const crashPath = path + '/' + crash;
            if (dependency === 'json-ptr' || dependency === 'realms-shim') {
                console.log(execSync(`cr --format=json -e ${crashPath}/node_modules/${dependency}/dist -o analysis/secbench/ccn_${crash}.json`).toString());
            } else if (dependency === 'm-log' || dependency === 'mongoosemask' || dependency === 'thenify' || dependency === 'underscore') {
                console.log(execSync(`cr --format=json -e ${crashPath}/node_modules/${dependency} -o analysis/secbench/ccn_${crash}.json`).toString());
            } else if (dependency === 'modulify') {
                console.log(execSync(`cr --format=json -e ${crashPath}/node_modules/${dependency}/src -o analysis/secbench/ccn_${crash}.json`).toString());
            } else {
                console.log(execSync(`cr --format=json -e ${crashPath}/node_modules/${dependency}/lib -o analysis/secbench/ccn_${crash}.json`).toString());
            }
        } catch (e) {
            console.log(e);
        }
    }

    const ccns = [];
    for (const ccnFile of fs.readdirSync('analysis/secbench/').filter(f => f.startsWith(`ccn`))) {
        const ccnJson = JSON.parse(fs.readFileSync(`analysis/secbench/${ccnFile}`).toString());
        ccns.push(ccnJson.cyclomatic);
    }
    console.log(project);
    console.log(ccns);
    console.log(ccns.reduce((a, b) => a + b) / ccns.length);
}
