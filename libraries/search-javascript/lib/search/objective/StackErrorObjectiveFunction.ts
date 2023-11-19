/*
 * Copyright 2020-2023 Delft University of Technology, Victoria University of Wellington and SynTest contributors
 *
 * This file is part of SynTest Framework - SynTest JavaScript.
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
import {ObjectiveFunction} from "@syntest/search/dist/lib/objective/ObjectiveFunction";
import {JavaScriptTestCase} from "../../testcase/JavaScriptTestCase";
import {SearchSubject} from "@syntest/search/dist/lib/SearchSubject";
import {StackTrace, StackTraceProcessor} from "@syntest/crash-reproduction-setup";
import Fuse from "fuse.js";


class StackErrorObjectiveFunction extends ObjectiveFunction<JavaScriptTestCase> {
    protected stackTrace: StackTrace;
    private fuzzySearch: Fuse<string>;

    constructor(
        id: string,
        subject: SearchSubject<JavaScriptTestCase>,
        stackTrace: StackTrace
    ) {
        super(id, subject);
        this.stackTrace = stackTrace;
        this.fuzzySearch = new Fuse([stackTrace.error.errorMessage], {
            threshold: 0.2
        });
    }

    calculateDistance(encoding: JavaScriptTestCase): number {
        let distance = 1;
        if (encoding.getExecutionResult().getError()) {
            let actualExceptionString = encoding.getExecutionResult().getError().message;
            if (actualExceptionString.includes('Received type string')) {
                const split = actualExceptionString.split('Received type string');
                actualExceptionString = split[0] + 'Received type string';
            }
            // console.log(actualExceptionString)
            if (actualExceptionString.includes(this.stackTrace.error.errorMessage)) {
                // distance -= 0.8;
                distance = 0;
                // console.log("Exception hit")
            }
            // if (actualException.error.errorType === this.stackTrace.error.errorType) {
            //     distance -= 0.2;
            // }
        }

        return distance;
    }

    override getIdentifier(): string {
        return `Stack Objective: ${this.stackTrace.error.errorMessage}`;
    }

}

export default StackErrorObjectiveFunction;
