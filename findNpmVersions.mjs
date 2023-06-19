import * as globby from 'globby';
import {execSync} from "child_process";
import {EnvironmentGenerator} from "@syntest/crash-reproduction-setup";
import * as fs from 'fs';

const crashProjects = ['atom', 'eslint', 'express', 'http-server', 'node', 'standard', 'webpack'];
const benchmarkDirectory = 'benchmark/crashes';
const environmentGenerator = new EnvironmentGenerator();
const results = []

for (const project of crashProjects) {
    const crashes = environmentGenerator.loadAssets(project, false, false);

    for (const crash of crashes) {
        try {
            const crashDirectory = `${benchmarkDirectory}/${crash.project}/${crash.crashId}`;
            const stackTraceFiles = crash.stackTrace.trace.map(frame => frame.file);

            const dependencies = Object.keys(crash.dependencies);
            if (crash.requireCrashDependency) {
                dependencies.push(crash.project);
            }

            for (const dependency of dependencies) {
                const versions = JSON.parse(execSync(`npm view ${dependency} versions --json`).toString());
                const filesForThisDependency = stackTraceFiles.filter(file => file.split('/')[0] === dependency);
                if (filesForThisDependency.length < 1) {
                    continue;
                }
                for (const version of versions) {
                    execSync(`npm --prefix=${crashDirectory} i ${dependency}@${version}`);
                    const existingFiles = globby.sync(...filesForThisDependency.map(file => `${crashDirectory}/**/${file}`));
                    if (existingFiles.length === filesForThisDependency.length) {
                        results.push({
                            crashId: crash.crashId,
                            dependency,
                            version
                        });
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

