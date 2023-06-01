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

import { unlinkSync, writeFileSync } from "node:fs";
import * as path from "node:path";

import { Datapoint, EncodingRunner, ExecutionResult } from "@syntest/search";
import {
  InstrumentationData,
  MetaData,
} from "@syntest/instrumentation-javascript";
import { getLogger, Logger } from "@syntest/logging";
import cloneDeep = require("lodash.clonedeep");
import { Runner } from "mocha";
import Mocha = require("mocha");

import {
  JavaScriptExecutionResult,
  JavaScriptExecutionStatus,
} from "../../search/JavaScriptExecutionResult";
import { JavaScriptSubject } from "../../search/JavaScriptSubject";
import { JavaScriptDecoder } from "../../testbuilding/JavaScriptDecoder";
import { JavaScriptTestCase } from "../JavaScriptTestCase";

import { ExecutionInformationIntegrator } from "./ExecutionInformationIntegrator";
import { SilentMochaReporter } from "./SilentMochaReporter";
import * as Process from "process";
import { exec } from "child_process";

export class JavaScriptRunner implements EncodingRunner<JavaScriptTestCase> {
  protected static LOGGER: Logger;

  protected decoder: JavaScriptDecoder;
  protected tempTestDirectory: string;
  protected executionInformationIntegrator: ExecutionInformationIntegrator;

  constructor(
    decoder: JavaScriptDecoder,
    executionInformationIntergrator: ExecutionInformationIntegrator,
    temporaryTestDirectory: string
  ) {
    JavaScriptRunner.LOGGER = getLogger(JavaScriptRunner.name);
    this.decoder = decoder;
    this.executionInformationIntegrator = executionInformationIntergrator;
    this.tempTestDirectory = temporaryTestDirectory;

    // process.on("uncaughtException", (reason) => {
    //   throw reason;
    // });
    // process.on("unhandledRejection", (reason) => {
    //   throw reason;
    // });
  }

  writeTestCase(
    filePath: string,
    testCase: JavaScriptTestCase,
    targetName: string,
    addLogs = false
  ): void {
    JavaScriptRunner.LOGGER.silly(`Writing test case to ${filePath}`);
    const decodedTestCase = this.decoder.decode(testCase, targetName, addLogs);

    writeFileSync(filePath, decodedTestCase);
  }

  /**
   * Deletes a certain file.
   *
   * @param filepath  the filepath of the file to delete
   */
  deleteTestCase(filepath: string): void {
    try {
      unlinkSync(filepath);
    } catch (error) {
      JavaScriptRunner.LOGGER.debug(error);
    }
  }

  async run(paths: string[]): Promise<Runner> {
    paths = paths.map((p) => path.resolve(p));

    const argv: Mocha.MochaOptions = <Mocha.MochaOptions>(<unknown>{
      spec: paths,
      reporter: SilentMochaReporter,
      // isWorker: true,
      // parallel: true
    });

    const mocha = new Mocha(argv); // require('ts-node/register')

    mocha.timeout(2000);

    // eslint-disable-next-line unicorn/prefer-module
    require("regenerator-runtime/runtime");
    // eslint-disable-next-line unicorn/prefer-module, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires
    require("@babel/register")({
      // eslint-disable-next-line unicorn/prefer-module
      presets: [require.resolve("@babel/preset-env")],
    });

    for (const _path of paths) {
      // eslint-disable-next-line unicorn/prefer-module
      delete require.cache[_path];
      mocha.addFile(_path);
    }

    let runner: Runner;
    // Finally, run mocha.
    await new Promise((resolve) => {
      runner = mocha.run((failures) => {
        // console.log("mocha done");
        resolve(failures)
      });
    });

    mocha.dispose();
    return runner;
  }

  async execute(
    subject: JavaScriptSubject,
    testCase: JavaScriptTestCase
  ): Promise<ExecutionResult> {
    JavaScriptRunner.LOGGER.silly("Executing test case");
    const testPath = path.resolve(
      path.join(this.tempTestDirectory, "tempTest.spec.js")
    );

    this.writeTestCase(testPath, testCase, subject.name);

    const runner = await this.run([testPath]);
    const test = runner.suite.suites[0].tests[0];
    const stats = runner.stats;

    // If one of the executions failed, log it
    this.executionInformationIntegrator.process(testCase, test, stats);

    // Retrieve execution traces
    const instrumentationData = <InstrumentationData>(
      cloneDeep(
        (<{ __coverage__: InstrumentationData }>(<unknown>global)).__coverage__
      )
    );
    const metaData = <MetaData>(
      cloneDeep((<{ __meta__: MetaData }>(<unknown>global)).__meta__)
    );

    const traces: Datapoint[] = [];

    for (const key of Object.keys(instrumentationData)) {
      for (const functionKey of Object.keys(instrumentationData[key].fnMap)) {
        const function_ = instrumentationData[key].fnMap[functionKey];
        const hits = instrumentationData[key].f[functionKey];

        traces.push({
          id: function_.loc.id,
          type: "function",
          path: key,
          line: function_.line,

          hits: hits,
        });
      }

      for (const statementKey of Object.keys(
        instrumentationData[key].statementMap
      )) {
        const statement = instrumentationData[key].statementMap[statementKey];
        const hits = instrumentationData[key].s[statementKey];

        traces.push({
          id: statement.id,
          type: "statement",
          path: key,
          line: statement.start.line,

          hits: hits,
        });
      }

      for (const branchKey of Object.keys(instrumentationData[key].branchMap)) {
        const branch = instrumentationData[key].branchMap[branchKey];
        const hits = <number[]>instrumentationData[key].b[branchKey];
        const meta =
          metaData === undefined ? undefined : metaData[key]?.meta?.[branchKey];

        traces.push({
          id: branch.locations[0].id,
          path: key,
          type: "branch",
          line: branch.line,

          hits: hits[0],

          condition_ast: meta?.condition_ast,
          condition: meta?.condition,
          variables: meta?.variables,
        });

        if (branch.locations.length > 2) {
          // switch case
          for (const [index, location] of branch.locations.entries()) {
            traces.push({
              id: location.id,
              path: key,
              type: branch.type,
              line: branch.line,

              hits: hits[index],

              condition_ast: meta?.condition_ast,
              condition: meta?.condition,
              variables: meta?.variables,
            });
          }
        } else if (branch.locations.length === 2) {
          // normal branch
          // or small switch
          traces.push({
            id: branch.locations[1].id,
            path: key,
            type: branch.type,
            line: branch.line,

            hits: hits[1],

            condition_ast: meta?.condition_ast,
            condition: meta?.condition,
            variables: meta?.variables,
          });
        } else if (
          branch.locations.length === 1 &&
          branch.type === "default-arg"
        ) {
          // this is the default-arg branch it only has one location
          traces.push({
            id: branch.locations[0].id,
            path: key,
            type: "branch",
            line: branch.line,

            hits: hits[0] ? 0 : 1,

            condition_ast: meta?.condition_ast,
            condition: meta?.condition,
            variables: meta?.variables,
          });
        } else {
          throw new Error(
            `Invalid number of locations for branch type: ${branch.type}`
          );
        }
      }
    }

    // Retrieve execution information
    let executionResult: JavaScriptExecutionResult;
    if (
      runner.suite.suites.length > 0 &&
      runner.suite.suites[0].tests.length > 0
    ) {
      const test = runner.suite.suites[0].tests[0];

      let status: JavaScriptExecutionStatus;
      let exception: string;

      if (test.isPassed()) {
        status = JavaScriptExecutionStatus.PASSED;
      } else if (test.timedOut) {
        status = JavaScriptExecutionStatus.TIMED_OUT;
      } else {
        status = JavaScriptExecutionStatus.FAILED;
        exception = test.err.message;
      }

      const duration = test.duration;

      executionResult = new JavaScriptExecutionResult(
        status,
        traces,
        duration,
        exception
      );
    } else {
      executionResult = new JavaScriptExecutionResult(
        JavaScriptExecutionStatus.FAILED,
        traces,
        stats.duration
      );
    }

    // Reset instrumentation data (no hits)
    this.resetInstrumentationData();

    // Remove test file
    this.deleteTestCase(testPath);

    return executionResult;
  }

  resetInstrumentationData() {
    const coverage = (<{ __coverage__: InstrumentationData }>(<unknown>global))
      .__coverage__;

    if (coverage === undefined) {
      return;
    }

    for (const key of Object.keys(coverage)) {
      for (const statementKey of Object.keys(coverage[key].s)) {
        coverage[key].s[statementKey] = 0;
      }
      for (const functionKey of Object.keys(coverage[key].f)) {
        coverage[key].f[functionKey] = 0;
      }
      for (const branchKey of Object.keys(coverage[key].b)) {
        coverage[key].b[branchKey] = [0, 0];
      }
    }
  }
}
