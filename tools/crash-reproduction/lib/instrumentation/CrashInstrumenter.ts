/*
 * Copyright 2020-2023 Delft University of Technology and SynTest contributors
 *
 * This file is part of SynTest Framework - SynTest Javascript.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
    RootContext,
    Target
} from "@syntest/analysis-javascript";
import * as path from "node:path";
import { copySync, outputFileSync } from "fs-extra";
import {Instrumenter} from "@syntest/instrumentation-javascript";
import {Crash} from "@syntest/crash-reproduction-setup";

export interface OutputObject {
    fileCoverage?: any;
    sourceMappingURL?: any;
}

export class CrashInstrumenter extends Instrumenter {
    // TODO maybe the instrumenter should not be responsible for copying the files
    override async instrumentAll(
        rootContext: RootContext,
        targets: Target[],
        temporaryInstrumentedDirectory: string
    ): Promise<void> {
        // @ts-ignore
        const crash: Crash = global.crash;
        const absoluteRootPath = path.resolve(rootContext.rootPath );

        const destinationPath = path.resolve(
            temporaryInstrumentedDirectory + `/crashes${(crash.seeded ? '/seeded' : '')}/${crash.project}/${crash.crashId}`,
            // path.basename(absoluteRootPath)
        );


        // copy everything
        await copySync(absoluteRootPath, destinationPath, {overwrite: true, dereference: true});

        // overwrite the stuff that needs instrumentation

        const targetPaths = [...targets.values()].map((target) => target.path);

        for (const targetPath of targetPaths) {
            const source = rootContext.getSource(targetPath);
            const instrumentedSource = await this.instrument(source, targetPath);

            const _path = path
                .normalize(targetPath)
                .replace(absoluteRootPath, destinationPath);

            await outputFileSync(_path, instrumentedSource);
        }
    }
}
