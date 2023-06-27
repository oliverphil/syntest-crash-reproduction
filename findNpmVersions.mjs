import * as globby from 'globby';
import {execSync} from "child_process";
import {EnvironmentGenerator} from "@syntest/crash-reproduction-setup";
import * as fs from 'fs';

// const crashProjects = ['atom', 'eslint', 'express', 'http-server', 'node', 'standard', 'webpack'];
const crashProjects = ['webpack'];
const benchmarkDirectory = 'benchmark/crashes';
const environmentGenerator = new EnvironmentGenerator();

for (const project of crashProjects) {
    const crashes = environmentGenerator.loadAssets(project, false, false);
    const results = [];

    for (const crash of crashes.filter(c => c.crashId === 'webpack-13380')) {
        try {
            const crashDirectory = `${benchmarkDirectory}/${crash.project}/${crash.crashId}`;
            const stackTraceFiles = crash.stackTrace.trace.map(frame => frame.file);

            const dependencies = Object.keys(crash.dependencies);

            for (const dependency of dependencies) {
                const versions = JSON.parse(execSync(`npm view ${dependency} versions --json`).toString());
                const filesForThisDependency = [...(new Set(stackTraceFiles.filter(file => file.split('/')[0] === dependency)))];
                if (filesForThisDependency.length < 1) {
                    continue;
                }
                for (const version of versions) {
                    console.log(`${dependency}@${version}`);
                    try {
                        execSync(`rm -rf ${crashDirectory}/node_modules`);
                        execSync(`npm --prefix=${crashDirectory} i ${dependency}@${version} --legacy-peer-deps`);
                    } catch (e) {
                        continue;
                    }
                    const existingFiles = globby.sync(filesForThisDependency.map(file => `${crashDirectory}/**/${file}`));
                    if (existingFiles.length === filesForThisDependency.length) {
                        const frames = crash.stackTrace.trace;
                        for (const file of existingFiles) {
                            const framesForFile = frames.filter(value => file.includes(value.file));
                            for (const frame of framesForFile) {
                                const index = frames.indexOf(frame);
                                if (index === 0) {
                                    const line = execSync(`cat ${file} | awk 'NR == ${frame.lineNumber}'`).toString();
                                    if (line !== '' && line !== '\n') {
                                        results.push({
                                            crashId: crash.crashId,
                                            dependency,
                                            version
                                        });
                                    }
                                    continue;
                                }
                                const prevFrame = frames[index - 1];
                                const line = execSync(`cat ${file} | awk 'NR == ${frame.lineNumber}'`).toString();
                                if (line.includes(prevFrame.file) || line.includes(prevFrame.method) || prevFrame.isEmbeddedOrAnonymous) {
                                    results.push({
                                        crashId: crash.crashId,
                                        dependency,
                                        version
                                    });
                                }
                            }
                        }
                    }
                }
            }
        } catch (e) {
            console.log(e);
            console.log("Failed for crash: " + crash.crashId);
        }
    }

    fs.writeFileSync(`results_${project}.json`, JSON.stringify(results));
}

