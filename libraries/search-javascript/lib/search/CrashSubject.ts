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
        const objs = new Set();
        if (!this.stackTrace) return;
        objectives.push(new StackErrorObjectiveFunction(
            `stack-error.${this.stackTrace.error.errorType}:${this.stackTrace.error.errorMessage}`,
            this.stackTrace
        ));
        for (const cff of this.controlFlowProgram.functions) {
            const paths = this.extractPathsFromFunction(cff);
            for (const path of paths) {
                // console.log(path);
                // const frame = this.stackTrace.trace.find(frame => frame.method.includes(cff.name));
                const frames = this.stackTrace.trace.filter(frame => cff.id.includes(frame.file));
                const frame = frames.find(frame => frame.method.includes(cff.name));
                if (frame) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    // objectives.push(
                    //     new StackFrameObjectiveFunction(
                    //         `stack-frame.${frame.file}:${frame.lineNumber}:${frame.charNumber}`,
                    //         this.controlFlowProgram,
                    //         path,
                    //         this.approachLevelCalculator,
                    //         this.branchDistanceCalculator,
                    //         this,
                    //         frame
                    //     )
                    // );
                    if (!objs.has(`stack-frame.${frame.file}:${frame.lineNumber}:${frame.charNumber}`)){
                        objectives.push(
                            new StackFrameObjectiveFunction(
                                `stack-frame.${frame.file}:${frame.lineNumber}:${frame.charNumber}`,
                                this.controlFlowProgram,
                                path,
                                this.approachLevelCalculator,
                                this.branchDistanceCalculator,
                                frame
                            )
                        );
                        objs.add(`stack-frame.${frame.file}:${frame.lineNumber}:${frame.charNumber}`);
                    }
                }
                // objectives.push(
                //     new PathObjectiveFunction(
                //         prng.uniqueId(),
                //         cfp,
                //         path,
                //         approachLevelCalculator,
                //         branchDistanceCalculator
                //     )
                // );
            }
        }
        this.numStackObjectives = objs.size + 1;
        // if (this.stackTrace) {
        //     for (const stackFrame of this.stackTrace.trace) {
        //         const objective = new StackFrameObjectiveFunction(
        //             `stack-frame.${stackFrame.file}:${stackFrame.lineNumber}:${stackFrame.charNumber}`,
        //             this.controlFlowProgram,
        //             this.controlFlowPath,
        //             this.approachLevelCalculator,
        //             this.branchDistanceCalculator,
        //             this,
        //             stackFrame
        //         );
        //         objectives.push(objective);
        //         this.numStackObjectives += 1;
        //     }
        //     objectives.push(new StackErrorObjectiveFunction(
        //         `stack-error.${this.stackTrace.error.errorType}:${this.stackTrace.error.errorMessage}`,
        //         this.controlFlowProgram,
        //         this.controlFlowPath,
        //         this.approachLevelCalculator,
        //         this.branchDistanceCalculator,
        //         this,
        //         this.stackTrace
        //     ));
        //     this.numStackObjectives += 1;
        // }
        // this._objectives = objectives;
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
