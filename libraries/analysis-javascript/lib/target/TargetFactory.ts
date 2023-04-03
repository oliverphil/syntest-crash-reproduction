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

import path = require("path");

import { traverse } from "@babel/core";
import * as t from "@babel/types";
import { TargetFactory as CoreTargetFactory } from "@syntest/analysis";

import { ExportVisitor } from "./export/ExportVisitor";
import { Target } from "./Target";
import { TargetVisitor } from "./TargetVisitor";

/**
 * TargetFactory for Javascript.
 *
 * @author Dimitri Stallenberg
 */
export class TargetFactory implements CoreTargetFactory<t.Node> {
  /**
   * Generate function map for specified target.
   *
   * @param filePath The filePath of the target
   * @param AST The AST of the target
   */
  extract(filePath: string, AST: t.Node): Target {
    const exportVisitor = new ExportVisitor(filePath);

    traverse(AST, exportVisitor);

    const exports = exportVisitor.exports;
    const visitor = new TargetVisitor(filePath, exports);

    traverse(AST, visitor);

    // we should check wether every export is actually used
    // TODO

    return {
      path: filePath,
      name: path.basename(filePath),
      subTargets: visitor.subTargets,
    };
  }
}
