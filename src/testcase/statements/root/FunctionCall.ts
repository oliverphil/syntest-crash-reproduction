/*
 * Copyright 2020-2021 Delft University of Technology and SynTest contributors
 *
 * This file is part of SynTest Solidity.
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

import {
  prng,
  Parameter, Properties,
} from "@syntest/framework";
import { JavaScriptTestCaseSampler } from "../../sampling/JavaScriptTestCaseSampler";
import { Decoding, Statement } from "../Statement";
import { RootStatement } from "./RootStatement";
import * as path from "path";

/**
 * @author Dimitri Stallenberg
 */
export class FunctionCall extends RootStatement {
  private readonly _functionName: string;

  /**
   * Constructor
   * @param type the return type of the function
   * @param uniqueId id of the gene
   * @param functionName the name of the function
   * @param args the arguments of the function
   */
  constructor(
    type: Parameter,
    uniqueId: string,
    functionName: string,
    args: Statement[]
  ) {
    super(type, uniqueId, args, []);
    this._classType = 'FunctionCall'

    this._functionName = functionName;
  }

  mutate(sampler: JavaScriptTestCaseSampler, depth: number): FunctionCall {
    const args = [...this.args.map((a: Statement) => a.copy())];

    if (args.length !== 0) {
      const index = prng.nextInt(0, args.length - 1);
      args[index] = args[index].mutate(sampler, depth + 1);
    }

    return new FunctionCall(
      this.type,
      prng.uniqueId(),
      this.functionName,
      args
    );
  }

  copy(): FunctionCall {
    const deepCopyArgs = [...this.args.map((a: Statement) => a.copy())];

    return new FunctionCall(
      this.type,
      this.id,
      this.functionName,
      deepCopyArgs
    );
  }

  get functionName(): string {
    return this._functionName;
  }

  decode(addLogs: boolean): Decoding[] {
    const args = this.args
      .map((a) => a.varName)
      .join(', ')

    const argStatements: Decoding[] = this.args
      .flatMap((a) => a.decode(addLogs))

    let decoded = `const ${this.varName} = ${this.functionName}(${args})`

    if (addLogs) {
      const logDir = path.join(
        Properties.temp_log_directory,
        // testCase.id,
        this.varName
      )
      decoded += `\nawait fs.writeFileSync('${logDir}', '' + ${this.varName})`
    }

    return [
      ...argStatements,
      {
        decoded: decoded,
        reference: this
      }
    ]
  }

  decodeErroring(): string {
    const args = this.args.map((a) => a.varName).join(', ')
    return `await expect(${this.functionName}(${args})).to.be.rejectedWith(Error);`;
  }


}
