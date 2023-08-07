const execSync = require('child_process').execSync;
const fs = require('fs');
const environmentGenerator = require('libraries/crash-reproduction-setup/lib/setup/EnvironmentGenerator').EnvironmentGenerator;

const types = ['standard, seeded, bugsjs, syntest-collected'];
const projects = ['atom', 'eslint', 'express', 'http-server', 'node', 'standard', 'bower', 'hexo', 'pencilblue'];

const envGen = new environmentGenerator();

for (const type of types.filter(t => t === 'standard')) {
    execSync(`sed -i "s/^.*syntest-type.*$/  \\"syntest-type\\": \\"${type}\\",/" .syntest.json`);
    for (const project of projects.filter(p => p === 'express')) {
        execSync(`sed -i "s/^.*syntest-project.*$/  \\"syntest-project\\": \\"${project}\\",/" .syntest.json`);
        const crashes = envGen.loadAssets(project, type);
        for (const crash of crashes) {
            execSync(`sed -i "s/^.*syntest-crash.*$/  \\"syntest-crash\\": \\"${crash.crashId}\\",/" .syntest.json`);
            execSync(`./run_experiments_on_grid.sh ${crash.crashId}`);
        }
    }
}
