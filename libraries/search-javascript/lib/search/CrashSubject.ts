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
import {
    ApproachLevelCalculator,
    ControlFlowPath,
    ObjectiveFunction, PathObjectiveFunction
} from "@syntest/search";
import {JavaScriptTestCase} from "../testcase/JavaScriptTestCase";
import {TargetType} from "@syntest/analysis";
import {ControlFlowProgram, ControlFlowFunction, EdgeType} from "@syntest/cfg";
import {BranchDistanceCalculator} from "../criterion/BranchDistance";
import CrashFitnessFunction1 from "./objective/CrashFitnessFunction1";

export class CrashSubject extends JavaScriptSubject {
    constructor(target: Target, stackTrace: StackTrace, objectives: ObjectiveFunction<JavaScriptTestCase>[],
        controlFlowProgram: ControlFlowProgram,
        approachLevelCalculator: ApproachLevelCalculator,
        branchDistanceCalculator: BranchDistanceCalculator
    ) {
        super(target, objectives);
        this.stackTrace = stackTrace;
        this.numStackObjectives = 0;
        this.controlFlowProgram = controlFlowProgram;
        this.approachLevelCalculator = approachLevelCalculator;
        this.branchDistanceCalculator = branchDistanceCalculator;
        this._extractObjectives(objectives);
    }

    private controlFlowProgram: ControlFlowProgram;
    private approachLevelCalculator: ApproachLevelCalculator;
    private branchDistanceCalculator: BranchDistanceCalculator;

    private stackTrace: StackTrace;
    public numStackObjectives: number;

    protected _extractObjectives(objectives): void {
        let numObjectives = 0;
        if (this.stackTrace) {
            // objectives.push(new CrashFitnessFunction1(
            //     `stack-test`,
            //     this.stackTrace
            // ));
            objectives.push(new StackErrorObjectiveFunction(
                `stack-error`,
                this.stackTrace
            ));
            numObjectives += 1;
            for (const frame of this.stackTrace.trace) {
                numObjectives += 1;
                objectives.push(
                    new StackFrameObjectiveFunction(
                        `stack-frame.${frame.file}:${frame.lineNumber}:${frame.charNumber}`,
                        this.controlFlowProgram,
                        undefined,
                        this.approachLevelCalculator,
                        this.branchDistanceCalculator,
                        frame
                    )
                );
            }
        };

        for (const cff of this.controlFlowProgram.functions) {
            const paths = this.extractPathsFromFunction(cff);
            for (const path of paths) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                objectives.push(
                    new PathObjectiveFunction(
                        prng.uniqueId(),
                        this.controlFlowProgram,
                        path,
                        this.approachLevelCalculator,
                        this.branchDistanceCalculator
                    )
                );
            }
        }
        this.numStackObjectives = numObjectives;
        this._objectives = objectives;
    }

    private extractPathsFromFunction(cff: ControlFlowFunction) {
        const paths: ControlFlowPath[] = [];

        const graph = cff.graph;
        const queue: ControlFlowPath[] = [
            new ControlFlowPath(undefined, [graph.entry.id]),
        ];
        while (queue.length > 0) {
            const current = queue.shift();
            const lastNodeId = current.last;
            const outgoingEdges = graph.getOutgoingEdges(lastNodeId);

            if (outgoingEdges.length === 0) {
                paths.push(current);
                continue;
            }

            for (const edge of outgoingEdges) {
                if (edge.type !== EdgeType.BACK_EDGE && current.contains(edge.target)) {
                    // skip going into the same node twice (unless we are on a backedge)
                    continue;
                }

                const clone = current.clone();
                clone.addNodeToPath(edge.target);

                if (edge.type === EdgeType.CONDITIONAL_TRUE) {
                    clone.setControlNode(lastNodeId, true);
                } else if (edge.type === EdgeType.CONDITIONAL_FALSE) {
                    clone.setControlNode(lastNodeId, false);
                }

                queue.push(clone);
            }
        }

        return paths;
    }
}
