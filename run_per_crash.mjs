import {EnvironmentGenerator} from "./libraries/crash-reproduction-setup/dist/lib/setup/EnvironmentGenerator.js";
import {execSync} from "child_process";
import * as fs from "fs";
import {writeFileSync} from "fs";

const types = ['github', 'bugsjs', 'syntest-collected', 'secbench'];
const projects = ['atom', 'eslint', 'express', 'http-server', 'node', 'standard', 'bower', 'hexo', 'pencilblue', 'lodash', 'javascript-algorithms', 'commander', 'code-injection', 'moment'];
const envGen = new EnvironmentGenerator();

const syntestFile = JSON.parse(fs.readFileSync('.syntest.json').toString());

let numberOfCrashes = 0;

for (const type of types) {
    syntestFile['syntest-type'] = type;
    // execSync(`sed -i "s/^.*syntest-type.*$/  \\"syntest-type\\": \\"${type}\\",/" .syntest.json`);
    for (const project of projects) {
        try {
            syntestFile['syntest-project'] = project;
            // execSync(`sed -i "s/^.*syntest-project.*$/  \\"syntest-project\\": \\"${project}\\",/" .syntest.json`);
            const crashes = envGen.loadAssets(project, type);
            numberOfCrashes += crashes.length;
            const CRASHES_PER_RUN = 20;
            for (let i = 0; i < crashes.length; i += CRASHES_PER_RUN) {
                const finalIndex = i + CRASHES_PER_RUN < crashes.length ? i + CRASHES_PER_RUN : crashes.length - 1;
                const currentCrashes = crashes.slice(i, finalIndex);
                syntestFile['syntest-crash'] = currentCrashes.map(c => c.crashId);
                writeFileSync(`.syntest-${type}-${currentCrashes[0].crashId}.json`, JSON.stringify(syntestFile, undefined, 4));
                console.log(execSync(`./run_experiments_on_grid.sh ${type}-${currentCrashes[0].crashId}`).toString());
            }
        } catch (e) {
            console.log(e);
        }
    }
}

console.log(numberOfCrashes)
