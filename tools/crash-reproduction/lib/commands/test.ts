/*
 * Copyright 2020-2023 SynTest contributors
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
import { UserInterface } from "@syntest/cli-graphics";
import { Command, ModuleManager } from "@syntest/module";
import Yargs = require("yargs");

import { JavaScriptArguments, CrashLauncher } from "../CrashLauncher";
import {Crash, EnvironmentBuilder, EnvironmentGenerator} from "@syntest/crash-reproduction-setup";
import { MetricManager } from "@syntest/metric";
import { StorageManager } from "@syntest/storage";

export function getTestCommand(
  tool: string,
  moduleManager: ModuleManager,
  metricManager: MetricManager,
  storageManager: StorageManager,
  userInterface: UserInterface
): Command {
  const options = new Map<string, Yargs.Options>();

  const commandGroup = "Type Inference Options:";
  const samplingGroup = "Sampling Options:";
  const executorGroup = "Test Execution Options:";

  options.set("incorporate-execution-information", {
    alias: [],
    default: true,
    description: "Incorporate execution information.",
    group: commandGroup,
    hidden: false,
    type: "boolean",
  });

  options.set("type-inference-mode", {
    alias: [],
    default: "proportional",
    description: "The type inference mode: [proportional, ranked, none].",
    group: commandGroup,
    hidden: false,
    type: "string",
  });

  options.set("random-type-probability", {
    alias: [],
    default: 0.1,
    description:
      "The probability we use a random type regardless of the inferred type.",
    group: commandGroup,
    hidden: false,
    type: "number",
  });

  options.set("constant-pool", {
    alias: [],
    default: true,
    description: "Enable constant pool.",
    group: samplingGroup,
    hidden: false,
    type: "boolean",
  });

  options.set("constant-pool-probability", {
    alias: [],
    default: 0.5,
    description:
        "Probability to sample from the constant pool instead creating random values",
    group: samplingGroup,
    hidden: false,
    type: "number",
  });

  options.set("type-pool", {
    alias: [],
    default: true,
    description: "Enable type pool.",
    group: samplingGroup,
    hidden: false,
    type: "boolean",
  });

  options.set("type-pool-probability", {
    alias: [],
    default: 0.5,
    description:
        "Probability to sample from the type pool instead creating random values",
    group: samplingGroup,
    hidden: false,
    type: "number",
  });

  options.set("statement-pool", {
    alias: [],
    default: true,
    description: "Enable statement pool.",
    group: samplingGroup,
    hidden: false,
    type: "boolean",
  });

  options.set("statement-pool-probability", {
    alias: [],
    default: 0.8,
    description:
        "Probability to sample from the statement pool instead creating new values",
    group: samplingGroup,
    hidden: false,
    type: "number",
  });

  options.set("execution-timeout", {
    alias: [],
    default: 2000,
    description:
        "The timeout for one execution of one test (must be larger than the test-timeout).",
    group: executorGroup,
    hidden: false,
    type: "number",
  });

  options.set("test-timeout", {
    alias: [],
    default: 1000,
    description: "The timeout for one test.",
    group: executorGroup,
    hidden: false,
    type: "number",
  });

  options.set("syntax-forgiving", {
    alias: [],
    default: true,
    description: "Whether we allow 'odd' syntax or throw an error.",
    group: "Debugging",
    hidden: false,
    type: "boolean",
  });

  options.set("silence-test-output", {
    alias: [],
    default: true,
    description: "Whether we show the test output in the logs.",
    group: "Debugging",
    hidden: false,
    type: "boolean",
  });

  return new Command(
    moduleManager,
    tool,
    "test",
    "Run the test case generation tool on a certain JavaScript project.",
    options,
    async (arguments_: Yargs.ArgumentsCamelCase) => {
      const args = <JavaScriptArguments><unknown>arguments_;
      const environmentGenerator = new EnvironmentGenerator();
      let crashes: Crash[] = environmentGenerator.loadAssets(args.syntestProject,
          args.syntestType, args.syntestCrash);
      const crashesToRemove: Crash[] = [];
      for (const crash of crashes) {
        console.log(crash.crashId);
        environmentGenerator.generatePackage(crash);
        if (EnvironmentBuilder.createCrashEnvironment(crash, args.syntestType)) {
          crashesToRemove.push(crash);
        }
      }
      crashes = crashes.filter(crash => !crashesToRemove.includes(crash));
      for (const crash of crashes) {
        // moduleManager.reset();
        const include: string[] = [];
        const exclude: string[] = [];
        for (const frame of crash.stackTrace.trace) {
          if (frame.file.includes('.js')) {
            const crashFile = `./benchmark/crashes/${(<JavaScriptArguments>(<unknown>arguments_)).syntestType}/${crash.project}/${crash.crashId}/**/${frame.file}`;
            include.push(crashFile);
          }
          // Properties.include.push(`./benchmark/crashes/${crash.project}/${crash.crashId}/node_modules/**/*.js`);
          // Properties.exclude.push(`./benchmark/crashes/${crash.project}/${crash.crashId}/**/gatsby-browser.js`);
        }
        // include.push("**/*.js");
        // const syntestType = (<JavaScriptArguments>(<unknown>arguments_)).syntestType;
        (<JavaScriptArguments>(<unknown>arguments_)).targetInclude = include;
        (<JavaScriptArguments>(<unknown>arguments_)).targetExclude = exclude;
        // (<JavaScriptArguments>(<unknown>arguments_)).analysisInclude =
        //     [`./benchmark/crashes/${syntestType}/`
        //       + `${crash.project}/${crash.crashId}/**/*.js`];
        (<JavaScriptArguments>(<unknown>arguments_)).analysisExclude = [
          "**/commander*/**/*.test.js",
          "**/commander*/**/test/**/*.*",
          "**/commander*/**/node_modules/**/*.*",
          "**/*.spec.js"
        ]
        //   `./benchmark/crashes/${syntestType}/${crash.project}/${crash.crashId}/**/node_modules/**/*.js`];
        global.__coverage__ = {};
        global.__meta__ = [];
        const launcher = new CrashLauncher(
            <JavaScriptArguments>(<unknown>arguments_),
            moduleManager,
            metricManager,
            storageManager,
            userInterface
        );
        await launcher.runCrash(crash);
      }
    }
  );
}

export type TestCommandOptions = {
  incorporateExecutionInformation: boolean;
  typeInferenceMode: string;
  randomTypeProbability: number;
  constantPool: boolean;
  constantPoolProbability: number;
  typePool: boolean;
  typePoolProbability: number;
  statementPool: boolean;
  statementPoolProbability: number;
  executionTimeout: number;
  testTimeout: number;

  syntaxForgiving: boolean;
  silenceTestOutput: boolean;

  syntestProject: string | undefined;
  syntestCrashes: string | undefined;
  syntestSeeded: string;
  syntestType: string | undefined;
  syntestCrash: string[] | undefined;

  useCoverage: boolean;
  singleObjective: boolean | undefined;
};
