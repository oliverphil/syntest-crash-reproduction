/*
 * Copyright 2020-2021 Delft University of Technology and SynTest contributors
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

import {
    ArchiveBasedObjectiveManager,
    Encoding,
    EncodingRunner,
    ObjectiveFunction,
    SearchSubject,
    SecondaryObjectiveComparator
} from "@syntest/search";
import {StackTrace} from "@syntest/crash-reproduction-setup";
import {JavaScriptTestCase} from "../../../testcase/JavaScriptTestCase";


/**
 * A simple objective manager that always evaluates an encoding on all objectives.
 *
 * @author Philip Oliver
 */
export class StackTraceObjectiveManager<
    T extends Encoding
    > extends ArchiveBasedObjectiveManager<T> {

    public stackTrace: StackTrace;

    constructor(
        runner: EncodingRunner<T>,
        secondaryObjectives: SecondaryObjectiveComparator<T>[],
        exceptionObjectivesEnabled: boolean,
        stackTrace: StackTrace
    ) {
        super(runner, secondaryObjectives, exceptionObjectivesEnabled);
        this.stackTrace = stackTrace;
    }

    public getSubject(): SearchSubject<T> {
        return this._subject;
    }

    /**
     * @inheritDoc
     * @protected
     */
    protected _updateObjectives(objectiveFunction: ObjectiveFunction<T>): ObjectiveFunction<T>[] {
        // Remove objective from the uncovered objectives
        this._uncoveredObjectives.delete(objectiveFunction);

        // Add objective to the covered objectives
        this._coveredObjectives.add(objectiveFunction);

        if (this._uncoveredObjectives.size === 0) {
            this._currentObjectives.clear();
        }

        return [];
    }

    /**
     * @inheritDoc
     */
    public load(subject: SearchSubject<T>): void {
        // Set the subject
        this._subject = subject;

        // TODO: Reset the objective manager
        const objectives = subject.objectives;

        for (const objective of objectives) {
            // Add all objectives to both the uncovered objectives and the current objectives
            this._uncoveredObjectives.add(objective);
            this._currentObjectives.add(objective);
        }
    }

    public override hasObjectives(): boolean {
        let totalStackObjs = 0;
        let coveredStackObjs = 0;
        for (const objective of this._uncoveredObjectives) {
            if (objective.getIdentifier().includes('stack')) {
                if (objective.getLowestDistance() === 0) {
                    coveredStackObjs++;
                }
                totalStackObjs++;
            }
        }
        return coveredStackObjs !== totalStackObjs;
    }
}
