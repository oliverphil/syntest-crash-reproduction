/*
 * Copyright 2020-2022 Delft University of Technology and SynTest contributors
 *
 * This file is part of SynTest JavaScript.
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
import { defaultBabelOptions } from "../../../configs/DefaultBabelConfig";
import * as path from "path";
import * as fs from "fs";
import { Properties } from "@syntest/core";
const { transformSync } = require("@babel/core");
const globby = require("globby");

export class AbstractSyntaxTreeGenerator {
  generate(source: string, target: string | null) {
    const options = JSON.parse(JSON.stringify(defaultBabelOptions));

    options.filename = target || String(new Date().getTime()) + ".js";

    // console.log(Properties.include);
    // console.log(Properties.exclude);

    if (Properties.exclude.includes(options.filename) || !Properties.include.includes(options.filename)) {
      // console.log(options.filename);
      return;
    }
    // for (const ex of Properties.exclude) {
    //   if (options.filename.includes(ex)) {
    //     return;
    //   }
    // }
    // for (const inc of Properties.include) {
    //   if (!options.filename.includes(inc)) {
    //     return;
    //   }
    // }
    if (source.includes('etch.dom')) {
      return;
    }

    const codeMap = transformSync(source, options);

    return codeMap.ast;
  }
}
