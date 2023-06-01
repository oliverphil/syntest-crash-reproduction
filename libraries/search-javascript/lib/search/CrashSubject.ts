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

import { BranchDistance } from "../criterion/BranchDistance";
import {JavaScriptSubject} from "./JavaScriptSubject";
import {ControlFlowProgram} from "@syntest/cfg/dist/lib/ControlFlowProgram";
import {JavaScriptTestCase} from "../testcase/JavaScriptTestCase";

export class CrashSubject extends JavaScriptSubject {
    constructor(target: Target, rootContext: RootContext, targets: Target[]) {
        super(target, rootContext);
        this._targets = targets;
        this._extractObjectives();
    }

    private _targets: Target[];

    override getCfgs() {
        const cfgs = [];
        for (const target of this._targets) {
            cfgs.push(this._rootContext.getControlFlowProgram(target.path));
        }
        return cfgs;
    }

    protected override _extractObjectives(): void {
        if (!this._targets) {
            return;
        }
        for (const target of this._targets) {
            const functions = this._rootContext.getControlFlowProgram(
                target.path
            ).functions;

            // FUNCTION objectives
            for (const function_ of functions) {
                const graph = function_.graph;
                // Branch objectives
                // Find all control nodes
                // I.E. nodes that have more than one outgoing edge
                const controlNodeIds = [...graph.nodes.keys()].filter(
                    (node) => graph.getOutgoingEdges(node).length > 1
                );

                for (const controlNodeId of controlNodeIds) {
                    const outGoingEdges = graph.getOutgoingEdges(controlNodeId);

                    for (const edge of outGoingEdges) {
                        // Add objective function
                        this._objectives.set(
                            new BranchObjectiveFunction(
                                new ApproachLevel(),
                                new BranchDistance(),
                                this,
                                edge.target
                            ),
                            []
                        );
                    }
                }

                for (const objective of this._objectives.keys()) {
                    const childrenObject = this.findChildren(graph, objective);
                    this._objectives.get(objective).push(...childrenObject);
                }

                const entry = function_.graph.entry;

                const children = function_.graph.getChildren(entry.id);

                if (children.length !== 1) {
                    throw new Error(shouldNeverHappen("JavaScriptSubject")); //, "entry node has more than one child"))
                }

                // Add objective
                const functionObjective = new FunctionObjectiveFunction(
                    new ApproachLevel(),
                    new BranchDistance(),
                    this,
                    children[0].id
                );
                const childObjectives = this.findChildren(
                    function_.graph,
                    functionObjective
                );
                this._objectives.set(functionObjective, childObjectives);
            }
        }
    }

    override getActionableTargets(): SubTarget[] {
        const subtargets = []
        for (const target of this._targets) {
            subtargets.push(...target.subTargets.filter((t) => {
                return (
                    t.type === TargetType.FUNCTION ||
                    t.type === TargetType.CLASS ||
                    t.type === TargetType.METHOD ||
                    t.type === TargetType.OBJECT ||
                    t.type === TargetType.OBJECT_FUNCTION
                );
            }));
        }
        return subtargets;
    }
}
