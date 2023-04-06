/*
 * Copyright 2020-2023 Delft University of Technology and SynTest contributors
 *
 * This file is part of SynTest Framework - SynTest JavaScript.
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

import { NodePath } from "@babel/core";
import * as t from "@babel/types";
import { shouldNeverHappen } from "@syntest/core";

import { Export } from "./Export";

function getName(node: t.Node): string {
  switch (node.type) {
    case "Identifier": {
      return node.name;
    }
    case "ArrayExpression":
    case "ObjectExpression": {
      return `${node.type}`;
    }
    case "FunctionExpression": {
      return node.id?.name || "anonymous";
    }
    case "ArrowFunctionExpression": {
      return "anonymous";
    }
  }

  if (node.type.includes("Literal")) {
    return `${node.type}`;
  }

  // throw new Error(`Cannot get name of node of type ${node.type}`)
  return "anonymous";
}

export function extractExportsFromExpressionStatement(
  filePath: string,
  path: NodePath<t.ExpressionStatement>
): Export[] | undefined {
  if (path.node.expression.type !== "AssignmentExpression") {
    // cannot happen (because we check this in the visitor)
    return undefined;
  }

  const assigned = path.node.expression.left;
  const init = path.node.expression.right;

  let name: string;
  let default_ = false;

  if (assigned.type === "Identifier" && assigned.name === "exports") {
    // e.g. exports = ??
    name = getName(init);
    default_ = true;
  } else if (assigned.type === "MemberExpression") {
    const object = assigned.object;
    const property = assigned.property;

    if (object.type === "Identifier") {
      if (object.name === "exports") {
        // e.g. exports.?? = ??
        if (property.type === "Identifier") {
          if (assigned.computed) {
            // e.g. exports[x] = ??
            // unsupported
            throw new Error("Unsupported export declaration");
          } else {
            // e.g. exports.x = ??
            name = property.name;
          }
        } else if (property.type === "StringLiteral") {
          // e.g. exports["x"] = ??
          name = property.value;
        } else {
          // e.g. exports.x() = ??
          // unsupported
          // dont think this is possible
          throw new Error("Unsupported export declaration");
        }
      } else if (object.name === "module") {
        // e.g. module.? = ??
        if (property.type === "Identifier" && property.name === "exports") {
          // e.g. module.exports = ??
          if (assigned.computed) {
            // e.g. module[exports] = ??
            // unsupported
            throw new Error("Unsupported export declaration");
          }
          name = getName(init);
          default_ = true;
        } else if (
          property.type === "StringLiteral" &&
          property.value === "exports"
        ) {
          // e.g. module["exports"] = ??
          name = getName(init);
          default_ = true;
        } else {
          // e.g. module.exports() = ??
          // e.g. module.somethingelse = ??
          // unsupported
          // should this just return undefined?
          // throw new Error("Unsupported export declaration");
          return undefined;
        }
      } else {
        // e.g. somethingelse.? = ??
        // e.g. somethingelse.? = ??
        // dont care
        return undefined;
      }
    } else if (object.type === "MemberExpression") {
      // e.g. ??.??.?? = ??
      const higherObject = object.object;
      const higherProperty = object.property;

      if (
        higherObject.type === "Identifier" &&
        higherObject.name === "module" &&
        higherProperty.type === "Identifier" &&
        higherProperty.name === "exports"
      ) {
        // e.g. module.exports.?? = ??
        if (property.type === "Identifier") {
          // e.g. module.exports.x = ??
          if (assigned.computed) {
            // e.g. module.exports[x] = ??
            // unsupported
            throw new Error("Unsupported export declaration");
          }
          name = property.name;
        } else if (property.type === "StringLiteral") {
          // e.g. module.exports["x"] = ??
          name = property.value;
        } else {
          // e.g. module.exports.x() = ??
          // unsupported
          // not possible i think
          throw new Error("Unsupported export declaration");
        }
      } else {
        // e.g. module.somethingelse.?? = ??
        // e.g. somethingelse.exports.?? = ??
        // e.g. somethingelse.somethingelse.?? = ??

        // dont care
        return undefined;
      }
    } else {
      return undefined;
    }
  } else {
    // this is probably an unrelated statement
    // e.g. not an export
    return undefined;
  }

  if (!name) {
    // not possible
    throw new Error(shouldNeverHappen("ExpressionStatement"));
  }

  const exports: Export[] = [];

  if (default_) {
    if (init.type === "ObjectExpression") {
      // e.g. exports = { a: ? }
      // e.g. module.exports = { a: ? }
      for (const property of init.properties) {
        if (property.type === "ObjectMethod") {
          // e.g. exports = { a() {} }

          if (property.key.type !== "Identifier") {
            // e.g. exports = { () {} }
            // unsupported
            // not possible i think
            throw new Error("Unsupported export declaration");
          }

          exports.push({
            scope: path.scope,
            filePath,
            name: property.key.name,
            renamedTo: property.key.name,
            default: false,
            module: true,
          });
        } else if (property.type === "SpreadElement") {
          // e.g. exports = { ...a }
          // unsupported
          throw new Error("Unsupported export declaration");
        } else {
          let key: string;
          if (property.key.type.includes("Literal")) {
            // e.g. exports = { "a": ? }
            // e.g. exports = { 1: ? }
            // e.g. exports = { true: ? }
            // e.g. exports = { null: ? }
            // eslint-disable-next-line unicorn/no-null
            key = `${"value" in property.key ? property.key.value : null}`;
          } else if (property.key.type === "Identifier") {
            // e.g. exports = { a: ? }
            key = property.key.name;
          } else {
            // e.g. exports = { 1: ? }
            // unsupported
            throw new Error("Unsupported export declaration");
          }

          if (property.value.type === "Identifier") {
            // e.g. exports = { a: b }
            exports.push({
              scope: path.scope,
              filePath,
              name: property.value.name,
              renamedTo: key,
              default: false,
              module: true,
            });
          } else {
            // e.g. exports = { a: 1 }
            exports.push({
              scope: path.scope,
              filePath,
              name: key,
              renamedTo: key,
              default: false,
              module: true,
            });
          }
        }
      }
    } else {
      // e.g. exports = obj
      // e.g. module.exports = obj
      exports.push({
        scope: path.scope,
        filePath,
        name: name,
        renamedTo: name,
        default: default_,
        module: true,
      });
    }
  } else {
    // e.g. exports.a = ??
    // e.g. module.exports.a = ??
    if (init.type === "Identifier") {
      // e.g. exports.a = b
      exports.push({
        scope: path.scope,
        filePath,
        name: init.name,
        renamedTo: name,
        default: default_,
        module: true,
      });
    } else {
      // e.g. exports.a = 1
      exports.push({
        scope: path.scope,
        filePath,
        name: name,
        renamedTo: name,
        default: default_,
        module: true,
      });
    }
  }

  return exports;
}
