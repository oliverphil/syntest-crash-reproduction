/*
 * Copyright 2020-2023 Delft University of Technology and SynTest contributors
 *
 * This file is part of SynTest Framework - SynTest Core.
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
import * as prng from "@syntest/prng";

export function getTestCommand(
  tool: string,
  moduleManager: ModuleManager,
  metricManager: MetricManager,
  storageManager: StorageManager,
  userInterface: UserInterface
): Command {
  const options = new Map<string, Yargs.Options>();

  const commandGroup = "Type Inference Options:";

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
      prng.initializePseudoRandomNumberGenerator(args.randomSeed);
      for (const crash of crashes) {
        // moduleManager.reset();
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
  syntestProject: string | undefined;
  syntestCrashes: string | undefined;
  syntestSeeded: string;
  syntestType: string | undefined;
  syntestCrash: string[] | undefined;
};
