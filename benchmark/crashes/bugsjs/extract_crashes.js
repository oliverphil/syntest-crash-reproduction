const execSync = require('child_process').execSync;
const fs = require('fs');

const projectFile = fs.readFileSync('Projects.csv').toString().split('\n');
const projects = {};
for (let i = 1; i < projectFile.length; i++) {
    const line = projectFile[i].split(';');
    projects[line[0]] = Number.parseInt(line[2]);
}

if (!fs.existsSync('test_out')) {
    execSync('mkdir test_out');
}

for (const project of Object.keys(projects)) {
    const projectLower = project.toLowerCase();
    if (!fs.existsSync(`test_out/${projectLower}`)) {
        execSync(`mkdir test_out/${projectLower}`);
    }
    for (let num = 1; num <= projects[project]; num++) {
        try {
            console.log(project + num);
            try {
                console.log(execSync(`python3 main.py -p ${project} -b ${num} -t test -v buggy -o output/`).toString());
            } catch (e) {
                console.log(e);
            }
            // execSync(`cp -r output/${projectLower}/test test_out/${projectLower}/test-${num}`);
            execSync(`cp -r output/**/*test* testFiles/`);
            execSync(`cp output/${projectLower}/test_results.json test_out/${projectLower}/${projectLower}-${num}.json`);
            execSync(`cp output/${projectLower}/package.json test_out/${projectLower}/package-${projectLower}-${num}.json`);
        } catch (e) {
            // console.log(e);
        }
    }
}

