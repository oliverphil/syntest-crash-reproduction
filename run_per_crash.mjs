import {EnvironmentGenerator} from "./libraries/crash-reproduction-setup/dist/lib/setup/EnvironmentGenerator.js";
import {execSync} from "child_process";
import * as fs from "fs";

const types = ['standard', 'github', 'bugsjs', 'syntest-collected'];
const projects = ['atom', 'eslint', 'express', 'http-server', 'node', 'standard', 'bower', 'hexo', 'pencilblue'];
const envGen = new EnvironmentGenerator();

const syntestFile = JSON.parse(fs.readFileSync('.syntest.json').toString());

for (const type of types) {
    syntestFile['syntest-type'] = type;
    // execSync(`sed -i "s/^.*syntest-type.*$/  \\"syntest-type\\": \\"${type}\\",/" .syntest.json`);
    for (const project of projects) {
        syntestFile['syntest-project'] = project;
        // execSync(`sed -i "s/^.*syntest-project.*$/  \\"syntest-project\\": \\"${project}\\",/" .syntest.json`);
        const crashes = envGen.loadAssets(project, type);
        for (let i = 0; i < crashes.length; i += 10) {
            const finalIndex = i + 9 < crashes.length ? i + 9 : crashes.length - 1;
            const currentCrashes = crashes.splice(i, finalIndex);
            syntestFile['syntest-crash'] = currentCrashes.map(c => c.crashId);
            // execSync(`sed -i "s/^.*syntest-crash.*$/  \\"syntest-crash\\": \\"${crash.crashId}\\",/" .syntest.json`);
            execSync(`./run_experiments_on_grid.sh ${currentCrashes[0].crashId}`);
        }
    }
}
