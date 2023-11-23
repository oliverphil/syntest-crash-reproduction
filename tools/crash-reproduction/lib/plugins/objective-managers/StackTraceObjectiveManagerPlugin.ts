/*
 * Copyright 2020-2023 Delft University of Technology and SynTest contributors
 *
 * This file is part of SynTest Framework - SynTest Core.
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
import {ObjectiveManagerOptions, ObjectiveManagerPlugin } from "@syntest/base-language";
import {
    Encoding,
    ObjectiveManager,
} from "@syntest/search";
import {StackTraceObjectiveManager} from "@syntest/search-javascript";
import {StackTrace} from "@syntest/crash-reproduction-setup";

/**
 * Plugin for SignalTerminationTrigger
 *
 * @author Dimitri Stallenberg
 */
export class StackTraceObjectiveManagerPlugin<
    T extends Encoding
    > extends ObjectiveManagerPlugin<T> {
    constructor() {
        super("stackTrace", "A stack trace based objective manager");
    }

    createObjectiveManager(
        options: ObjectiveManagerOptions<T>
    ): ObjectiveManager<T> {
        return new StackTraceObjectiveManager(
            options.runner,
            options.secondaryObjectives,
            options.exceptionObjectivesEnabled,
            (<StackTrace>(<any><unknown>options).stackTrace)
        );
    }

    override getOptions() {
        return new Map();
    }
}
