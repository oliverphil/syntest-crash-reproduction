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

import { BranchDistance as CoreBranchDistance } from "@syntest/core";
import { BranchDistanceVisitor } from "./BranchDistanceVisitor";
import { traverse } from "@babel/core";

export class BranchDistance extends CoreBranchDistance {
  _calculate(
    conditionAST: string,
    condition: string,
    variables: Record<string, unknown>,
    trueOrFalse: boolean
  ): number {
    if (
      condition === undefined ||
      conditionAST === undefined ||
      variables === undefined
    ) {
      return 1;
    }

    const ast = JSON.parse(conditionAST);
    const visitor = new BranchDistanceVisitor(variables);

    traverse(ast, visitor);
    let distance = visitor.distance;

    if (!trueOrFalse) {
      distance = 1 - distance;
    }

    if (distance > 1 || distance < 0) {
      throw new Error("Invalid distance!");
    }

    return distance;
  }
}
