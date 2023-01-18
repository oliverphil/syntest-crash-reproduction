import {
  Datapoint,
  EncodingRunner,
  ExecutionResult,
  getUserInterface,
  Properties,
} from "@syntest/core";
import { JavaScriptTestCase } from "../JavaScriptTestCase";
import { JavaScriptSubject } from "../../search/JavaScriptSubject";
import * as path from "path";
import {
  JavaScriptExecutionResult,
  JavaScriptExecutionStatus,
} from "../../search/JavaScriptExecutionResult";
import cloneDeep = require("lodash.clonedeep");
import { SilentMochaReporter } from "./SilentMochaReporter";
import ExecutionInformationIntegrator from "./ExecutionInformationIntegrator";

import { Runner } from "mocha";
import { unlinkSync, writeFileSync, rmdirSync } from "fs";
import { JavaScriptDecoder } from "../../testbuilding/JavaScriptDecoder";
import Mocha = require("mocha");
import originalrequire = require("original-require");

export class JavaScriptRunner implements EncodingRunner<JavaScriptTestCase> {
  protected decoder: JavaScriptDecoder;
<<<<<<< HEAD
  protected errorProcessor: ExecutionInformationIntegrator
  protected mocha: Mocha;
=======
  protected errorProcessor: ExecutionInformationIntegrator;
>>>>>>> develop

  constructor(decoder: JavaScriptDecoder) {
    this.decoder = decoder;
    this.errorProcessor = new ExecutionInformationIntegrator();

<<<<<<< HEAD
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
=======
    process.on("uncaughtException", (reason) => {
      throw reason;
    });
    process.on("unhandledRejection", (reason) => {
      throw reason;
    });
>>>>>>> develop
  }

  async writeTestCase(
    filePath: string,
    testCase: JavaScriptTestCase,
    targetName: string,
    addLogs = false
  ): Promise<void> {
    const decodedTestCase = this.decoder.decode(testCase, targetName, addLogs);

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

  async run(paths: string[]): Promise<Runner> {
    paths = paths.map((p) => path.resolve(p));

    const argv: Mocha.MochaOptions = <Mocha.MochaOptions>(<unknown>{
      spec: paths,
      reporter: SilentMochaReporter,
<<<<<<< HEAD
      allowUncaught: true,
      // isWorker: true,
      // parallel: true,
      // require: [
      //   '@babel/register',
      //   "@babel/preset-env",
      //   "@babel/preset-react",
      //   // "@babel/plugin-transform-react-jsx",
      //   // "@babel/plugin-proposal-object-rest-spread"
      // ],
      timeout: Properties.search_time
    }

    this.mocha = new Mocha(argv)
    // require('ts-node/register');
    require("regenerator-runtime/runtime");
    require('@babel/register')({
      presets: [
        require.resolve("@babel/preset-env"),
    //     require.resolve("@babel/preset-react"),
    //     // require.resolve("@babel/plugin-transform-react-jsx"),
    //     // require.resolve("@babel/plugin-proposal-object-rest-spread"),
    //     // require.resolve("@babel/plugin-transform-typescript"),
    //     // require.resolve("@babel/plugin-syntax-jsx")
      ]
=======
    });

    const mocha = new Mocha(argv); // require('ts-node/register')

    // eslint-disable-next-line
    require("regenerator-runtime/runtime");
    // eslint-disable-next-line
    require("@babel/register")({
      presets: [require.resolve("@babel/preset-env")],
>>>>>>> develop
    });

    for (const _path of paths) {
      delete originalrequire.cache[_path];
      this.mocha.addFile(_path);
    }

    let runner: Runner = null;

<<<<<<< HEAD
    try {
      // Finally, run mocha.
      await new Promise((resolve, reject) => {
        try {
          // console.log('mocha run');
          runner = this.mocha.run((failures) => failures > 0 ? reject(failures) : resolve(failures))
          resolve(runner);
        } catch (e) {
          console.log(e);
          reject(e);
        }
      })
      // console.log('mocha done');
    } catch (e) {
      // console.log('caught', e);
    }
    try {
      await runner?.dispose();
    } catch(e) {
      await runner?.abort();
    }
    try {
      rmdirSync(path.join(process.cwd(), '/node_modules/.cache'), {recursive: true});
    } catch (e) {
      // console.log(e); 
    }
    // console.log('return runner');
    return runner
=======
    // Finally, run mocha.
    await new Promise((resolve) => {
      runner = mocha.run((failures) => resolve(failures));
    });

    await mocha.dispose();
    return runner;
>>>>>>> develop
  }

  async execute(
    subject: JavaScriptSubject,
    testCase: JavaScriptTestCase
  ): Promise<ExecutionResult> {
    const testPath = path.resolve(
      path.join(Properties.temp_test_directory, "tempTest.spec.js")
    );

    await this.writeTestCase(testPath, testCase, subject.name);

<<<<<<< HEAD
    let runner;
    try {
      runner = await this.run([testPath])
    } catch (e) {
      console.log(e);
    }
    const stats = runner.stats
=======
    const runner = await this.run([testPath]);

    const stats = runner.stats;
>>>>>>> develop

    const test = runner.suite.suites[0]?.tests[0];

    // If one of the executions failed, log it
    if (stats.failures > 0) {
      this.errorProcessor.processError(testCase, test);
    } else {
      this.errorProcessor.processSuccess(testCase, test);
    }

    // Retrieve execution traces
    const instrumentationData = cloneDeep(global.__coverage__);
    const metaData = cloneDeep(global.__meta__);

    const traces: Datapoint[] = [];
    for (const key of Object.keys(instrumentationData || {})) {
      for (const functionKey of Object.keys(instrumentationData[key].fnMap)) {
        const fn = instrumentationData[key].fnMap[functionKey];
        const hits = instrumentationData[key].f[functionKey];

        traces.push({
          id: `f-${fn.line}`,
          type: "function",
          path: key,
          line: fn.line,

          hits: hits,
        });
      }

      for (const statementKey of Object.keys(
        instrumentationData[key].statementMap
      )) {
        const statement = instrumentationData[key].statementMap[statementKey];
        const hits = instrumentationData[key].s[statementKey];

        traces.push({
          id: `s-${statement.start.line}`,
          type: "statement",
          path: key,
          line: statement.start.line,

          hits: hits,
        });
      }

      for (const branchKey of Object.keys(instrumentationData[key].branchMap)) {
        const branch = instrumentationData[key].branchMap[branchKey];
        const hits = instrumentationData[key].b[branchKey];

        // if (!hits.find((h) => h !== 0)) {
        //   // if there are no hits the meta object is not created and thus we cannot query it
        //   continue
        // }
        //
        // if (!metaData[key] || !metaData[key].meta || !metaData[key].meta[branchKey]) {
        //   continue
        // }

        const meta = metaData?.[key]?.meta?.[branchKey];

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
          variables: meta?.variables,
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
          variables: meta?.variables,
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
        exception = test.err?.message;
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
    // console.log(executionResult.hasPassed(), executionResult.hasTimedOut(), executionResult.getExceptions());

    // Reset instrumentation data (no hits)
    this.resetInstrumentationData();

    // Remove test file
    await this.deleteTestCase(testPath);

    return executionResult;
  }

<<<<<<< HEAD
  resetInstrumentationData () {
    for (const key of Object.keys(global.__coverage__ || {})) {
=======
  resetInstrumentationData() {
    for (const key of Object.keys(global.__coverage__)) {
>>>>>>> develop
      for (const statementKey of Object.keys(global.__coverage__[key].s)) {
        global.__coverage__[key].s[statementKey] = 0;
      }
      for (const functionKey of Object.keys(global.__coverage__[key].f)) {
        global.__coverage__[key].f[functionKey] = 0;
      }
      for (const branchKey of Object.keys(global.__coverage__[key].b)) {
        global.__coverage__[key].b[branchKey] = [0, 0];
      }
    }
  }
}
