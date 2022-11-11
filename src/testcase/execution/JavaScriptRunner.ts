import {
  Datapoint,
  EncodingRunner,
  ExecutionResult, getUserInterface,
  Properties,
} from "@syntest/framework";
import { JavaScriptTestCase } from "../JavaScriptTestCase";
import { JavaScriptSubject } from "../../search/JavaScriptSubject";
import * as path from "path";
import { JavaScriptExecutionResult, JavaScriptExecutionStatus } from "../../search/JavaScriptExecutionResult";
import * as _ from 'lodash'
import { SilentMochaReporter } from "./SilentMochaReporter";
import ExecutionInformationIntegrator from "./ExecutionInformationIntegrator";

import { Runner } from "mocha";
import { unlinkSync, writeFileSync } from "fs";
import { JavaScriptDecoder } from "../../testbuilding/JavaScriptDecoder";
const Mocha = require('mocha')
const originalrequire = require("original-require");

export class JavaScriptRunner implements EncodingRunner<JavaScriptTestCase> {
  protected decoder: JavaScriptDecoder;
  protected errorProcessor: ExecutionInformationIntegrator
  protected mocha: Mocha;

  constructor(decoder: JavaScriptDecoder) {
    this.decoder = decoder
    this.errorProcessor = new ExecutionInformationIntegrator()

    if (process.listenerCount('uncaughtException') < 1) {
      process.on("uncaughtException", reason => {
        console.log(reason);
        // this.mocha.dispose();
        // throw reason;
      });
    }
    if (process.listenerCount('unhandledRejection') < 1) {
      process.on("unhandledRejection", reason => {
        console.log(reason);
        // this.mocha.dispose();
        // throw reason;
      });
    }
  }

  async writeTestCase(filePath: string, testCase: JavaScriptTestCase, targetName: string, addLogs = false): Promise<void> {
    const decodedTestCase = this.decoder.decode(
      testCase,
      targetName,
      addLogs
    );

    // const transpiledTestCase = ts.transpileModule(decodedTestCase, { compilerOptions: { module: ts.ModuleKind.CommonJS }}).outputText
    // await writeFileSync(filePath, transpiledTestCase);

    await writeFileSync(filePath, decodedTestCase);
  }

  /**
   * Deletes a certain file.
   *
   * @param filepath  the filepath of the file to delete
   */
  async deleteTestCase(filepath: string) {
    try {
      await unlinkSync(filepath);
    } catch (error) {
      getUserInterface().debug(error);
    }
  }

  async createSuite() {

  }

  async run(paths: string[]): Promise<Runner> {
    paths = paths.map((p) => path.resolve(p))

    const argv = {
      spec: paths,
      reporter: SilentMochaReporter,
      allowUncaught: true,
      isWorker: true,
      parallel: true,
      require: [
        '@babel/register',
        "@babel/preset-env",
        "@babel/preset-react",
        // "@babel/plugin-transform-react-jsx",
        // "@babel/plugin-proposal-object-rest-spread"
      ],
      timeout: Properties.search_time
    }

    this.mocha = new Mocha(argv)// require('ts-node/register'

    // require("regenerator-runtime/runtime");
    // require('@babel/register')({
    //   presets: [
    //     require.resolve("@babel/preset-env"),
    //     require.resolve("@babel/preset-react"),
    //     require.resolve("@babel/plugin-transform-react-jsx"),
    //     require.resolve("@babel/plugin-proposal-object-rest-spread"),
    //     require.resolve("@babel/plugin-transform-typescript"),
    //     require.resolve("@babel/plugin-syntax-jsx")
    //   ]
    // });

    for (const _path of paths) {
      delete originalrequire.cache[_path];
      this.mocha.addFile(_path);
    }

    let runner: Runner = null

    try {
      // Finally, run mocha.
      await new Promise((resolve, reject) => {
        try {
          console.log('mocha run');
          runner = this.mocha.run((failures) => failures > 0 ? reject(failures) : resolve(failures))
          resolve(runner);
        } catch (e) {
          console.log(e);
          reject(e);
        }
      })
      console.log('mocha done');
    } catch (e) {
      console.log('caught', e);
    }
    try {
      await runner.dispose();
    } catch(e) {
      await runner.abort();
    }
    console.log('return runner');
    return runner
  }

  async execute(
    subject: JavaScriptSubject,
    testCase: JavaScriptTestCase
  ): Promise<ExecutionResult> {
    const testPath = path.resolve(path.join(Properties.temp_test_directory, "tempTest.spec.js"))

    await this.writeTestCase(testPath, testCase, subject.name);

    let runner;
    try {
      runner = await this.run([testPath])
    } catch (e) {
      console.log(e);
    }
    const stats = runner.stats

    const test = runner.suite.suites[0]?.tests[0];

    // If one of the executions failed, log it
    if (stats.failures > 0) {
      this.errorProcessor.processError(testCase, test)
    } else {
      this.errorProcessor.processSuccess(testCase, test)
    }

    // Retrieve execution traces
    const instrumentationData = _.cloneDeep(global.__coverage__)
    const metaData = _.cloneDeep(global.__meta__)

    const traces: Datapoint[] = [];
    for (const key of Object.keys(instrumentationData || {})) {
      for (const functionKey of Object.keys(instrumentationData[key].fnMap)) {
          const fn = instrumentationData[key].fnMap[functionKey]
          const hits = instrumentationData[key].f[functionKey]

          traces.push({
            id: `f-${fn.line}`,
            type: "function",
            path: key,
            line: fn.line,

            hits: hits,
          })
        }

        for (const statementKey of Object.keys(instrumentationData[key].statementMap)) {
          const statement = instrumentationData[key].statementMap[statementKey]
          const hits = instrumentationData[key].s[statementKey]

          traces.push({
            id: `s-${statement.start.line}`,
            type: "statement",
            path: key,
            line: statement.start.line,

            hits: hits,
          })
        }

        for (const branchKey of Object.keys(instrumentationData[key].branchMap)) {
          const branch = instrumentationData[key].branchMap[branchKey]
          const hits = instrumentationData[key].b[branchKey]

          // if (!hits.find((h) => h !== 0)) {
          //   // if there are no hits the meta object is not created and thus we cannot query it
          //   continue
          // }
          //
          // if (!metaData[key] || !metaData[key].meta || !metaData[key].meta[branchKey]) {
          //   continue
          // }

          const meta = metaData?.[key]?.meta?.[branchKey]

          traces.push({
            id: `b-${branch.line}`,
            path: key,
            type: "branch",
            line: branch.line,

            locationIdx: 0,
            branchType: true,

            hits: hits[0],

            condition_ast: meta?.condition_ast,
            condition: meta?.condition,
            variables: meta?.variables
          });

          traces.push({
            id: `b-${branch.line}`,
            path: key,
            type: "branch",
            line: branch.line,

            locationIdx: 1,
            branchType: false,

            hits: hits[1],

            condition_ast: meta?.condition_ast,
            condition: meta?.condition,
            variables: meta?.variables
          });
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
      let exception: string = null;

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
    await this.deleteTestCase(testPath);

    return executionResult;
  }

  resetInstrumentationData () {
    for (const key of Object.keys(global.__coverage__ || {})) {
      for (const statementKey of Object.keys(global.__coverage__[key].s)) {
        global.__coverage__[key].s[statementKey] = 0
      }
      for (const functionKey of Object.keys(global.__coverage__[key].f)) {
        global.__coverage__[key].f[functionKey] = 0
      }
      for (const branchKey of Object.keys(global.__coverage__[key].b)) {
        global.__coverage__[key].b[branchKey] = [0, 0]
      }
    }
  }
}
