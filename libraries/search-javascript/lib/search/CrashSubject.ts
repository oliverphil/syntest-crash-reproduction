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
import { RootContext, SubTarget, Target } from "@syntest/analysis-javascript";
import { TargetType } from "@syntest/analysis";
import { ControlFlowGraph, Edge } from "@syntest/cfg";
import {
    FunctionObjectiveFunction,
    ObjectiveFunction,
    SearchSubject,
    ApproachLevel,
    shouldNeverHappen,
    BranchObjectiveFunction,
} from "@syntest/search";

import { JavaScriptTestCase } from "../testcase/JavaScriptTestCase";
import { BranchDistance } from "../criterion/BranchDistance";
import {StackTrace} from "@syntest/crash-reproduction-setup";
import StackFrameObjectiveFunction from "./objective/StackFrameObjectiveFunction";
import StackErrorObjectiveFunction from "./objective/StackErrorObjectiveFunction";
import {JavaScriptSubject} from "./JavaScriptSubject";
import {prng} from "@syntest/prng";

export class CrashSubject extends JavaScriptSubject {
    constructor(target: Target, rootContext: RootContext, stringAlphabet: string, stackTrace: StackTrace) {
        super(target, rootContext, stringAlphabet);
        this.stackTrace = stackTrace;
        this._extractObjectives();
    }

    private stackTrace: StackTrace;

    protected override _extractObjectives(): void {
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
        //             // Add objective function
        //             this._objectives.set(
        //                 new BranchObjectiveFunction(
        //                     new ApproachLevel(),
        //                     new BranchDistance(),
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
        //         new ApproachLevel(),
        //         new BranchDistance(),
        //         this,
        //         children[0].id
        //     );
        //     const childObjectives = this.findChildren(
        //         function_.graph,
        //         functionObjective
        //     );
        //     this._objectives.set(functionObjective, childObjectives);
        // }

        if (this.stackTrace) {
            for (const stackFrame of this.stackTrace.trace) {
                const objective = new StackFrameObjectiveFunction(
                    `stack-frame.${prng.nextInt}`,
                    this,
                    stackFrame
                );
                this._objectives.set(objective, []);
            }
            this._objectives.set(new StackErrorObjectiveFunction(
                `stack-error.${prng.nextInt}`,
                this,
                this.stackTrace
            ), []);
        }
    }
}
