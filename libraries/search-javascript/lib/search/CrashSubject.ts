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
import {RootContext, SubTarget, Target} from "@syntest/analysis-javascript";
import {StackTrace} from "@syntest/crash-reproduction-setup";
import {prng} from "@syntest/prng";

import {JavaScriptSubject} from "./JavaScriptSubject";
import StackErrorObjectiveFunction from "./objective/StackErrorObjectiveFunction";
import StackFrameObjectiveFunction from "./objective/StackFrameObjectiveFunction";
import {ObjectiveFunction} from "../../../../../syntest-core/libraries/search";
import {JavaScriptTestCase} from "../testcase/JavaScriptTestCase";
import {TargetType} from "@syntest/analysis";

export class CrashSubject extends JavaScriptSubject {
    constructor(target: Target, stackTrace: StackTrace, objectives: ObjectiveFunction<JavaScriptTestCase>[]) {
        super(target, objectives);
        this.stackTrace = stackTrace;
        this.numStackObjectives = 0;
        this._extractObjectives(objectives);
    }

    private stackTrace: StackTrace;
    public numStackObjectives: number;

    protected _extractObjectives(objectives): void {
        if (this.stackTrace) {
            for (const stackFrame of this.stackTrace.trace) {
                const objective = new StackFrameObjectiveFunction(
                    `stack-frame.${stackFrame.file}:${stackFrame.lineNumber}:${stackFrame.charNumber}`,
                    this,
                    stackFrame
                );
                objectives.push(objective);
                this.numStackObjectives += 1;
            }
            objectives.push(new StackErrorObjectiveFunction(
                `stack-error.${this.stackTrace.error.errorType}:${this.stackTrace.error.errorMessage}`,
                this,
                this.stackTrace
            ));
            this.numStackObjectives += 1;
        }
        this._objectives = objectives;
    }
}
