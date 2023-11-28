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
import { RootContext, Target } from "@syntest/analysis-javascript";
import {StackTrace} from "@syntest/crash-reproduction-setup";
import {prng} from "@syntest/prng";

import {JavaScriptSubject} from "./JavaScriptSubject";
import StackErrorObjectiveFunction from "./objective/StackErrorObjectiveFunction";
import StackFrameObjectiveFunction from "./objective/StackFrameObjectiveFunction";
import {ObjectiveFunction} from "../../../../../syntest-core/libraries/search";
import {JavaScriptTestCase} from "../testcase/JavaScriptTestCase";

export class CrashSubject extends JavaScriptSubject {
    constructor(target: Target, rootContext: RootContext, syntaxForgiving: boolean, stringAlphabet: string, stackTrace: StackTrace, objectives: ObjectiveFunction<JavaScriptTestCase>[]) {
        super(target, objectives);
        this.stackTrace = stackTrace;
        this.numStackObjectives = 0;
        this._extractObjectives();
    }

    private stackTrace: StackTrace;
    public numStackObjectives: number;

    protected _extractObjectives(): void {
        // this._objectives = new Map<
        //     ObjectiveFunction<JavaScriptTestCase>,
        //     ObjectiveFunction<JavaScriptTestCase>[]
        // >();
        //
        // const functions = this._rootContext.getControlFlowProgram(
        //     this._target.path
        // ).functions;
        //
        // // FUNCTION objectives
        // for (const function_ of functions) {
        //     const graph = function_.graph;
        //     // Branch objectives
        //     // Find all control nodes
        //     // I.E. nodes that have more than one outgoing edge
        //     const controlNodeIds = [...graph.nodes.keys()].filter(
        //         (node) => graph.getOutgoingEdges(node).length > 1
        //     );
        //
        //     for (const controlNodeId of controlNodeIds) {
        //         const outGoingEdges = graph.getOutgoingEdges(controlNodeId);
        //
        //         for (const edge of outGoingEdges) {
        //             if (["ENTRY", "SUCCESS_EXIT", "ERROR_EXIT"].includes(edge.target)) {
        //                 throw new Error(
        //                     `Function ${function_.name} in ${function_.id} ends in entry/exit node`
        //                 );
        //             }
        //             // Add objective function
        //             this._objectives.set(
        //                 new BranchObjectiveFunction(
        //                     new ApproachLevel(),
        //                     new BranchDistance(this.syntaxForgiving, this.stringAlphabet),
        //                     this,
        //                     edge.target
        //                 ),
        //                 []
        //             );
        //         }
        //     }
        //
        //     for (const objective of this._objectives.keys()) {
        //         const childrenObject = this.findChildren(graph, objective);
        //         this._objectives.get(objective).push(...childrenObject);
        //     }
        //
        //     const entry = function_.graph.entry;
        //
        //     const children = function_.graph.getChildren(entry.id);
        //
        //     if (children.length !== 1) {
        //         throw new Error(shouldNeverHappen("JavaScriptSubject")); //, "entry node has more than one child"))
        //     }
        //
        //     // Add objective
        //     const functionObjective = new FunctionObjectiveFunction(
        //         this,
        //         function_.id
        //     );
        //
        //     // find first control node in function
        //     let firstControlNodeInFunction = children[0];
        //     while (
        //         function_.graph.getChildren(firstControlNodeInFunction.id).length === 1
        //         ) {
        //         firstControlNodeInFunction = function_.graph.getChildren(
        //             firstControlNodeInFunction.id
        //         )[0];
        //     }
        //
        //     // there are control nodes in the function
        //     if (
        //         function_.graph.getChildren(firstControlNodeInFunction.id).length === 2
        //     ) {
        //         const firstObjectives = function_.graph
        //             .getChildren(firstControlNodeInFunction.id)
        //             .map((child) => {
        //                 return [...this._objectives.keys()].find(
        //                     (objective) => objective.getIdentifier() === child.id
        //                 );
        //             });
        //
        //         if (!firstObjectives[0] || !firstObjectives[1]) {
        //             throw new Error(
        //                 `Cannot find objective with id: ${firstControlNodeInFunction.id}`
        //             );
        //         }
        //
        //         this._objectives.set(functionObjective, [...firstObjectives]);
        //     } else {
        //         // no control nodes so no sub objectives
        //         this._objectives.set(functionObjective, []);
        //     }
        // }

        if (this.stackTrace) {
            for (const stackFrame of this.stackTrace.trace) {
                const objective = new StackFrameObjectiveFunction(
                    `stack-frame.${stackFrame.file}:${stackFrame.lineNumber}:${stackFrame.charNumber}`,
                    this,
                    stackFrame
                );
                this._objectives.push(objective);
                this.numStackObjectives += 1;
            }
            this._objectives.push(new StackErrorObjectiveFunction(
                `stack-error.${this.stackTrace.error.errorType}:${this.stackTrace.error.errorMessage}`,
                this,
                this.stackTrace
            ));
            this.numStackObjectives += 1;
        }
    }
}
