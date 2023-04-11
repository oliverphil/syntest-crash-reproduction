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
import { ControlFlowGraph, Edge } from "@syntest/cfg-core";
import {
  FunctionObjectiveFunction,
  ObjectiveFunction,
  SearchSubject,
  BranchObjectiveFunction,
  ApproachLevel,
} from "@syntest/core";

import { JavaScriptTestCase } from "../testcase/JavaScriptTestCase";
import { BranchDistance } from "../criterion/BranchDistance";

export class JavaScriptSubject extends SearchSubject<JavaScriptTestCase> {
  constructor(target: Target, rootContext: RootContext) {
    super(target, rootContext);
  }

  protected _extractObjectives(): void {
    const graph = this._rootContext.getControlFlowProgram(
      this._target.path
    ).graph;
    const functions = this._rootContext.getControlFlowProgram(
      this._target.path
    ).functions;

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

    // FUNCTION objectives
    for (const function_ of functions) {
      // Add objective
      const functionObjective = new FunctionObjectiveFunction(
        new ApproachLevel(),
        new BranchDistance(),
        this,
        function_.id
      );
      const childrenObject = this.findChildren(
        function_.graph,
        functionObjective
      );
      this._objectives.set(functionObjective, childrenObject);
    }
  }

  findChildren(
    graph: ControlFlowGraph<unknown>,
    object: ObjectiveFunction<JavaScriptTestCase>
  ): ObjectiveFunction<JavaScriptTestCase>[] {
    let childrenObject: ObjectiveFunction<JavaScriptTestCase>[] = [];

    let edges2Visit = graph.edges.filter(
      (edge) => edge.source === object.getIdentifier()
    );
    const visitedEdges: Edge[] = [];

    while (edges2Visit.length > 0) {
      const edge = edges2Visit.pop();

      if (visitedEdges.includes(edge))
        // this condition is made to avoid infinite loops
        continue;

      visitedEdges.push(edge);

      const found = this.getObjectives().filter(
        (child) => child.getIdentifier() === edge.target
      );
      if (found.length === 0) {
        const additionalEdges = graph.edges.filter(
          (nextEdge) => nextEdge.source === edge.target
        );
        edges2Visit = [...edges2Visit, ...additionalEdges];
      } else {
        childrenObject = [...childrenObject, ...found];
      }
    }

    return childrenObject;
  }

  getActionableTargets(): SubTarget[] {
    return this._target.subTargets.filter((t) => {
      return (
        t.type === TargetType.FUNCTION ||
        t.type === TargetType.CLASS ||
        t.type === TargetType.METHOD ||
        t.type === TargetType.OBJECT ||
        t.type === TargetType.OBJECT_FUNCTION
      );
    });
  }

  getActionableTargetsByType(type: TargetType): SubTarget[] {
    return this.getActionableTargets().filter((t) => t.type === type);
  }
}
