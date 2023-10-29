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

import * as path from "node:path";

import { TestCommandOptions } from "./commands/test";
import {
  Export,
  TypeModelFactory,
  RandomTypeModelFactory,
  InferenceTypeModelFactory,
  Target,
  AbstractSyntaxTreeFactory,
  TargetFactory,
  RootContext,
  ControlFlowGraphFactory,
  ExportFactory,
  DependencyFactory,
  TypeExtractor,
  isExported,
  ConstantPoolManager,
  ConstantVisitor,
  getAllFiles,
} from "@syntest/analysis-javascript";
import {
  ArgumentsObject,
  Launcher,
  ObjectiveManagerPlugin,
  CrossoverPlugin,
  SearchAlgorithmPlugin,
  TargetSelector,
  PluginType,
  SecondaryObjectivePlugin,
  ProcreationPlugin,
  TerminationTriggerPlugin,
  PropertyName, Events,
} from "@syntest/base-language";
import {
  UserInterface,
  TableObject,
  ItemizationItem,
} from "@syntest/cli-graphics";
import { ModuleManager } from "@syntest/module";
import {
  JavaScriptTestCase,
  JavaScriptDecoder,
  JavaScriptRunner,
  JavaScriptSuiteBuilder,
  JavaScriptSubject,
  JavaScriptRandomSampler,
  JavaScriptTestCaseSampler,
  ExecutionInformationIntegrator, CrashSubject,
} from "@syntest/search-javascript";
import {
  Archive,
  BudgetManager,
  BudgetType,
  EncodingSampler,
  EvaluationBudget,
  IterationBudget, ObjectiveManager,
  SearchTimeBudget,
  TerminationManager,
  TotalTimeBudget,
} from "@syntest/search";
import { Instrumenter } from "@syntest/instrumentation-javascript";
import { getLogger, Logger } from "@syntest/logging";
import { TargetType } from "@syntest/analysis";
import { MetricManager } from "@syntest/metric";
import { StorageManager } from "@syntest/storage";
import traverse from "@babel/traverse";
import {Crash} from "@syntest/crash-reproduction-setup";
import {EnvironmentBuilder, EnvironmentGenerator} from "@syntest/crash-reproduction-setup";
import {CrashInstrumenter} from "./instrumentation/CrashInstrumenter";
import {existsSync} from "node:fs";
import TypedEventEmitter from "typed-emitter";
import * as prng from "@syntest/prng";

export type JavaScriptArguments = ArgumentsObject & TestCommandOptions;
export class CrashLauncher extends Launcher {
  private static LOGGER: Logger;

  protected override arguments_: JavaScriptArguments;
  protected override moduleManager: ModuleManager;
  protected override userInterface: UserInterface;

  private targets: Target[];

  private rootContext: RootContext;
  private rootPath: string;
  private archive: Archive<JavaScriptTestCase>;

  private exports: Export[];
  private dependencyMap: Map<string, string[]>;

  private coveredInPath = new Map<string, Archive<JavaScriptTestCase>>();

  private crash: Crash;
  private objectiveManager: ObjectiveManager<JavaScriptTestCase>;
  private objectiveManagers: {[key: string]: ObjectiveManager<JavaScriptTestCase>} = {};

  constructor(
      arguments_: JavaScriptArguments,
      moduleManager: ModuleManager,
      metricManager: MetricManager,
      storageManager: StorageManager,
      userInterface: UserInterface
  ) {
    super(
        arguments_,
        moduleManager,
        metricManager,
        storageManager,
        userInterface
    );
    CrashLauncher.LOGGER = getLogger("CrashLauncher");
  }

  async initialize(): Promise<void> {
    CrashLauncher.LOGGER.info("Initialization started");
    const start = Date.now();

    this.metricManager.recordProperty(
        PropertyName.CONSTANT_POOL_ENABLED,
        `${(<JavaScriptArguments>this.arguments_).constantPool.toString()}`
    );
    this.metricManager.recordProperty(
        PropertyName.CONSTANT_POOL_PROBABILITY,
        `${(<JavaScriptArguments>(
            this.arguments_
        )).constantPoolProbability.toString()}`
    );

    this.storageManager.deleteTemporaryDirectories([
      [this.arguments_.testDirectory],
      [this.arguments_.logDirectory],
      [this.arguments_.instrumentedDirectory],
    ]);

    CrashLauncher.LOGGER.info("Creating directories");
    this.storageManager.createDirectories([
      [this.arguments_.testDirectory],
      [this.arguments_.statisticsDirectory],
      [this.arguments_.logDirectory],
    ]);

    CrashLauncher.LOGGER.info("Creating temp directories");
    this.storageManager.createDirectories(
        [
          [this.arguments_.testDirectory],
          [this.arguments_.logDirectory],
          [this.arguments_.instrumentedDirectory],
        ],
        true
    );

    const abstractSyntaxTreeFactory = new AbstractSyntaxTreeFactory();
    const targetFactory = new TargetFactory();
    const controlFlowGraphFactory = new ControlFlowGraphFactory();
    const dependencyFactory = new DependencyFactory();
    const exportFactory = new ExportFactory();
    const typeExtractor = new TypeExtractor();
    const typeResolver: TypeModelFactory =
        (<JavaScriptArguments>this.arguments_).typeInferenceMode === "none"
            ? new RandomTypeModelFactory()
            : new InferenceTypeModelFactory();

    const rootPath = this.arguments_.targetRootDirectory + `/${this.arguments_.syntestType}/${this.crash.project}/${this.crash.crashId}`;

    this.rootPath = rootPath;

    this.rootContext = new RootContext(
      rootPath,
      abstractSyntaxTreeFactory,
      controlFlowGraphFactory,
      targetFactory,
      dependencyFactory,
      exportFactory,
      typeExtractor,
      typeResolver
    );

    if (existsSync(this.arguments_.tempSyntestDirectory + `/instrumented/crashes/${this.arguments_.syntestType}/${this.crash.project}/${this.crash.crashId}/rootContextExtractedTypes__targetMap.json`)) {
      this.rootContext.loadExtractedTypes(this.arguments_.tempSyntestDirectory + `/instrumented/crashes/${this.arguments_.syntestType}/${this.crash.project}/${this.crash.crashId}`);
    }
    // if (existsSync(this.arguments_.tempSyntestDirectory + `/instrumented/crashes/${this.crash.project}/${this.crash.crashId}/rootContextResolvedTypes__typeModel.json`)) {
    //   await this.rootContext.loadResolvedTypes(this.arguments_.tempSyntestDirectory + `/instrumented/crashes/${this.crash.project}/${this.crash.crashId}`);
    // }

    this.userInterface.printHeader("GENERAL INFO");

    // TODO ui info messages
    //
    // this.userInterface.printTable("property-set", [
    //   "Target Settings",
    //   <string>(
    //     (<unknown>[["Target Root Directory", this.arguments_.targetRootDirectory]])
    //   ),
    // ]);

    const timeInMs = (Date.now() - start) / 1000;
    this.metricManager.recordProperty(
        PropertyName.INITIALIZATION_TIME,
        `${timeInMs}`
    );

    CrashLauncher.LOGGER.info("Initialization done");
  }

  async preprocess(): Promise<void> {
    CrashLauncher.LOGGER.info("Preprocessing started");

    const startPreProcessing = Date.now();

    const crash = this.crash;
    const include: string[] = [];
    const exclude: string[] = [];
    for (const frame of crash.stackTrace.trace) {
      if (frame.file.includes('.js')) {
        const crashFile = `./benchmark/crashes/${this.arguments_.syntestType}/${crash.project}/${crash.crashId}/**/${frame.file}`;
        include.push(crashFile);
      }
      // Properties.include.push(`./benchmark/crashes/${crash.project}/${crash.crashId}/node_modules/**/*.js`);
      // Properties.exclude.push(`./benchmark/crashes/${crash.project}/${crash.crashId}/**/gatsby-browser.js`);
    }

    const startTargetSelection = Date.now();

    const targetSelector = new TargetSelector(this.rootContext);
    this.targets = targetSelector.loadTargets(
      include,
      exclude
    );

    let timeInMs = (Date.now() - startTargetSelection) / 1000;
    this.metricManager.recordProperty(
        PropertyName.TARGET_LOAD_TIME,
        `${timeInMs}`
    );

    if (this.targets.length === 0) {
      // Shut server down
      this.userInterface.printError(
        `No targets where selected! Try changing the 'include' parameter`
      );
      await this.exit();
    }

    const itemization: ItemizationItem[] = [];

    for (const target of this.targets) {
      itemization.push({
        text: `${target.path}: ${target.name} #${target.subTargets.length}`,
        subItems: target.subTargets.map((subtarget) => {
          return {
            text: `${subtarget.type} ${subtarget.id}`,
          };
        }),
      });
    }

    this.userInterface.printItemization("TARGETS", itemization);

    const settings: TableObject = {
      headers: ["Setting", "Value"],
      rows: [
        ["Preset", this.arguments_.preset],
        ["Search Algorithm", this.arguments_.searchAlgorithm],
        ["Population Size", `${this.arguments_.populationSize}`],
        ["Objective Manager", `${this.arguments_.objectiveManager}`],
        ["Secondary Objectives", `${this.arguments_.secondaryObjectives}`],
        ["Procreation Operator", `${this.arguments_.procreation}`],
        ["Crossover Operator", `${this.arguments_.crossover}`],
        ["Sampling Operator", `${this.arguments_.sampler}`],
        ["Termination Triggers", `${this.arguments_.terminationTriggers}`],
        ["Test Minimization Enabled", `${this.arguments_.testMinimization}`],

        ["Seed", `${this.arguments_.randomSeed.toString()}`],
      ],
      footers: ["", ""],
    };

    this.userInterface.printTable("SETTINGS", settings);

    const budgetSettings: TableObject = {
      headers: ["Setting", "Value"],
      rows: [
        ["Iteration Budget", `${this.arguments_.iterations} iterations`],
        ["Evaluation Budget", `${this.arguments_.evaluations} evaluations`],
        ["Search Time Budget", `${this.arguments_.searchTime} seconds`],
        ["Total Time Budget", `${this.arguments_.totalTime} seconds`],
      ],
      footers: ["", ""],
    };

    this.userInterface.printTable("BUDGET SETTINGS", budgetSettings);

    const mutationSettings: TableObject = {
      headers: ["Setting", "Value"],
      rows: [
        [
          "Resampling Probability",
          `${this.arguments_.resampleGeneProbability}`,
        ],
        [
          "Delta Mutation Probability",
          `${this.arguments_.deltaMutationProbability}`,
        ],
        [
          "Sample Existing Value Probability",
          `${this.arguments_.sampleExistingValueProbability}`,
        ],
        ["Crossover Probability", `${this.arguments_.crossoverProbability}`],
        [
          "Multi-point Crossover Probability",
          `${this.arguments_.multiPointCrossoverProbability}`,
        ],
        // sampling
        ["Max Depth", `${this.arguments_.maxDepth}`],
        ["Max Action Statements", `${this.arguments_.maxActionStatements}`],
        ["Explore Illegal Values", `${this.arguments_.exploreIllegalValues}`],
        [
          "Sample Output Values",
          `${this.arguments_.sampleFunctionOutputAsArgument}`,
        ],
        ["Use Constant Pool Values", `${this.arguments_.constantPool}`],
        [
          "Use Constant Pool Probability",
          `${this.arguments_.constantPoolProbability}`,
        ],
      ],
      footers: ["", ""],
    };
    this.userInterface.printTable("MUTATION SETTINGS", mutationSettings);

    const typeSettings: TableObject = {
      headers: ["Setting", "Value"],
      rows: [
        ["Type Inference Mode", `${this.arguments_.typeInferenceMode}`],
        [
          "Incorporate Execution Information",
          `${this.arguments_.incorporateExecutionInformation}`,
        ],
        ["Random Type Probability", `${this.arguments_.randomTypeProbability}`],
      ],
      footers: ["", ""],
    };
    this.userInterface.printTable("Type SETTINGS", typeSettings);

    const directorySettings: TableObject = {
      headers: ["Setting", "Value"],
      rows: [
        ["Syntest Directory", `${this.arguments_.syntestDirectory}`],
        ["Temporary Directory", `${this.arguments_.tempSyntestDirectory}`],
        ["Target Root Directory", `${this.arguments_.targetRootDirectory}`],
      ],
      footers: ["", ""],
    };

    this.userInterface.printTable("DIRECTORY SETTINGS", directorySettings);

    CrashLauncher.LOGGER.info("Instrumenting targets");
    const startInstrumentation = Date.now();
    if (!existsSync(this.arguments_.tempSyntestDirectory + `/instrumented/crashes/${this.arguments_.syntestType}/${this.crash.project}/${this.crash.crashId}/node_modules`)) {
      const instrumenter = new CrashInstrumenter();
      await instrumenter.instrumentAll(
          this.storageManager,
          this.rootContext,
          this.targets,
          `/instrumented/crashes/${this.arguments_.syntestType}`
      );
    }

    timeInMs = (Date.now() - startInstrumentation) / 1000;
    this.metricManager.recordProperty(
        PropertyName.INSTRUMENTATION_TIME,
        `${timeInMs}`
    );

    const startTypeResolving = Date.now();

    CrashLauncher.LOGGER.info("Extracting types");
    console.log("Extracting types");
    this.rootContext.extractTypes();
    console.log("Saving types");
    // if (crash.seeded) {
    //   if (!existsSync(this.arguments_.tempSyntestDirectory + `/instrumented/crashes/seeded/${this.crash.project}/${this.crash.crashId}/rootContextExtractedTypes__targetMap.json`)) {
    //     this.rootContext.saveExtractedTypes(this.arguments_.tempSyntestDirectory + `/instrumented/crashes/seeded/${this.crash.project}/${this.crash.crashId}`);
    //   }
    // } else {
    //   if (!existsSync(this.arguments_.tempSyntestDirectory + `/instrumented/crashes/${this.crash.project}/${this.crash.crashId}/rootContextExtractedTypes__targetMap.json`)) {
    //     this.rootContext.saveExtractedTypes(this.arguments_.tempSyntestDirectory + `/instrumented/crashes/${this.crash.project}/${this.crash.crashId}`);
    //   }
    // }

    console.log("Resolving Types");
    CrashLauncher.LOGGER.info("Resolving types");
    this.rootContext.resolveTypes();
    // console.log("Saving Resolved Types");
    // if (!existsSync(this.arguments_.tempSyntestDirectory + `/instrumented/crashes/${this.crash.project}/${this.crash.crashId}/rootContextResolvedTypes__typeModel.json`)) {
    //   this.rootContext.saveResolvedTypes(this.arguments_.tempSyntestDirectory + `/instrumented/crashes/${this.crash.project}/${this.crash.crashId}`);
    // }

    this.metricManager.recordProperty(
        PropertyName.TYPE_RESOLVE_TIME,
        `${timeInMs}`
    );

    timeInMs = (Date.now() - startPreProcessing) / 1000;
    this.metricManager.recordProperty(
        PropertyName.PREPROCESS_TIME,
        `${timeInMs}`
    );
    CrashLauncher.LOGGER.info("Preprocessing done");

    // const maps = this.rootContext.getTypeModel().calculateProbabilitiesForFile(false, '/Users/dimitrist/Documents/git/syntest/syntest-javascript-benchmark/lodash/truncate.js')

    // for (const [id, map] of maps.entries()) {
    //   console.log(id)
    //   console.log(map)
    // }
    // eslint-disable-next-line unicorn/no-process-exit
    // process.exit(0)
  }

  async process(): Promise<void> {
    CrashLauncher.LOGGER.info("Processing started");
    const start = Date.now();
    this.archive = new Archive<JavaScriptTestCase>();
    this.exports = [];
    this.dependencyMap = new Map();
    this.objectiveManagers = {};
    for (const target of this.targets) {
      CrashLauncher.LOGGER.info(`Processing ${target.name}`);
      const archive = await this.testTarget(this.rootContext, target);

      const dependencies = this.rootContext.getDependencies(target.path);
      this.archive.merge(archive);

      this.dependencyMap.set(target.name, dependencies);
      this.exports.push(...this.rootContext.getExports(target.path));
    }
    CrashLauncher.LOGGER.info("Processing done");
    const timeInMs = (Date.now() - start) / 1000;
    this.metricManager.recordProperty(PropertyName.PROCESS_TIME, `${timeInMs}`);
  }

  async postprocess(): Promise<void> {
    CrashLauncher.LOGGER.info("Postprocessing started");
    const start = Date.now();

    const decoder = new JavaScriptDecoder(
      this.exports,
      this.arguments_.targetRootDirectory,
        path.join(
            this.arguments_.tempSyntestDirectory,
            this.arguments_.logDirectory
        )
    );

    const executionInformationIntegrator = new ExecutionInformationIntegrator(
      this.rootContext.getTypeModel()
    );

    const runner = new JavaScriptRunner(
      this.storageManager,
      decoder,
      executionInformationIntegrator,
      this.arguments_.testDirectory
    );

    const suiteBuilder = new JavaScriptSuiteBuilder(
      this.storageManager,
      decoder,
      runner,
      this.arguments_.logDirectory
    );

    const reducedArchive = suiteBuilder.reduceArchive(this.archive);

    // TODO fix hardcoded paths
    let paths = suiteBuilder.createSuite(
      reducedArchive,
      "../instrumented",
      this.arguments_.testDirectory,
      true,
      false
    );
    await suiteBuilder.runSuite(paths);

    this.storageManager.clearTemporaryDirectory([
        this.arguments_.testDirectory
    ])

    // run with assertions and report results
    for (const key of reducedArchive.keys()) {
      suiteBuilder.gatherAssertions(reducedArchive.get(key));
    }

    paths = suiteBuilder.createSuite(
      reducedArchive,
      "../instrumented",
      this.arguments_.testDirectory,
      false,
      true
    );
    const { stats, instrumentationData } = await suiteBuilder.runSuite(paths);

    if (stats.failures > 0) {
      this.userInterface.printError("Test case has failed!");
    }

    this.userInterface.printHeader("SEARCH RESULTS");

    const table: TableObject = {
      headers: ["Target", "Statement", "Branch", "Function", "Objectives", "File"],
      rows: [],
      footers: ["Average"],
    };

    const overall = {
      branch: 0,
      statement: 0,
      function: 0,
      objective: 0
    };
    let totalBranches = 0;
    let totalStatements = 0;
    let totalFunctions = 0;
    let totalObjectives = 0;
    for (const file of Object.keys(instrumentationData || {})) {
      const target = this.targets.find(
        (target: Target) => target.path === file
      );
      if (!target) {
        continue;
      }

      const data = instrumentationData[file];

      const summary = {
        branch: 0,
        statement: 0,
        function: 0,
        objective: 0
      };

      for (const statementKey of Object.keys(data.s)) {
        summary["statement"] += data.s[statementKey] ? 1 : 0;
        overall["statement"] += data.s[statementKey] ? 1 : 0;
      }

      for (const branchKey of Object.keys(data.b)) {
        summary["branch"] += data.b[branchKey][0] ? 1 : 0;
        overall["branch"] += data.b[branchKey][0] ? 1 : 0;
        summary["branch"] += data.b[branchKey][1] ? 1 : 0;
        overall["branch"] += data.b[branchKey][1] ? 1 : 0;
      }

      for (const functionKey of Object.keys(data.f)) {
        summary["function"] += data.f[functionKey] ? 1 : 0;
        overall["function"] += data.f[functionKey] ? 1 : 0;
      }

      const objectiveManager = this.objectiveManagers[file];
      const objectives = [...(objectiveManager?.getCoveredObjectives() || [])];
      objectives.push(...(objectiveManager?.getUncoveredObjectives() || []));
      for (const objective of objectives) {
        try {
          const encoding = this.archive.getEncoding(objective);
          const distance = objective.calculateDistance(encoding);
          summary["objective"] += 1 - distance;
          overall["objective"] += 1 - distance;
          totalObjectives += 1;
        } catch {
          totalObjectives += 1;
        }
      }
      // if (objectives.length === 0) {
      //   summary["objective"] = 0;
      // }


      totalStatements += Object.keys(data.s).length;
      totalBranches += Object.keys(data.b).length * 2;
      totalFunctions += Object.keys(data.f).length;

      table.rows.push([
        `${path.basename(target.path)}: ${target.name}`,
        summary["statement"] + " / " + Object.keys(data.s).length,
        summary["branch"] + " / " + Object.keys(data.b).length * 2,
        summary["function"] + " / " + Object.keys(data.f).length,
        summary["objective"] + " / " + objectives.length,
        target.path,
      ]);
    }

    this.metricManager.recordProperty(
        PropertyName.BRANCHES_COVERED,
        `${overall["branch"]}`
    );
    this.metricManager.recordProperty(
        PropertyName.STATEMENTS_COVERED,
        `${overall["statement"]}`
    );
    this.metricManager.recordProperty(
        PropertyName.FUNCTIONS_COVERED,
        `${overall["function"]}`
    );
    this.metricManager.recordProperty(
        PropertyName.OBJECTIVES_COVERED,
        `${overall["objective"]}`
    )
    this.metricManager.recordProperty(
        PropertyName.BRANCHES_TOTAL,
        `${totalBranches}`
    );
    this.metricManager.recordProperty(
        PropertyName.STATEMENTS_TOTAL,
        `${totalStatements}`
    );
    this.metricManager.recordProperty(
        PropertyName.FUNCTIONS_TOTAL,
        `${totalFunctions}`
    );
    this.metricManager.recordProperty(
        PropertyName.OBJECTIVES_TOTAL,
        `${totalObjectives}`
    )

    // other results
    this.metricManager.recordProperty(
        PropertyName.ARCHIVE_SIZE,
        `${this.archive.size}`
    );
    this.metricManager.recordProperty(
        PropertyName.MINIMIZED_ARCHIVE_SIZE,
        `${this.archive.size}`
    );

    overall["statement"] /= totalStatements;
    if (totalStatements === 0) overall["statement"] = 1;

    overall["branch"] /= totalBranches;
    if (totalBranches === 0) overall["branch"] = 1;

    overall["function"] /= totalFunctions;
    if (totalFunctions === 0) overall["function"] = 1;

    overall["objective"] /= totalObjectives;
    if (totalObjectives === 0) overall["objective"] = 1;

    table.footers.push(
      overall["statement"] * 100 + " %",
      overall["branch"] * 100 + " %",
      overall["function"] * 100 + " %",
      overall["objective"] * 100 + " %",
      ""
    );

    const originalSourceDirectory = path
      .join(
        "../../",
        path.relative(process.cwd(), this.arguments_.targetRootDirectory)
      )
      .replace(path.basename(this.arguments_.targetRootDirectory), "");

    this.userInterface.printTable("Coverage", table);

    this.storageManager.createDirectories(
        [`benchmark/crashes/${this.crash.project}/${this.crash.crashId}/tests`.split('/')]
    );

    // create final suite
    suiteBuilder.createSuite(
      reducedArchive,
      originalSourceDirectory,
      path.join(
        `${this.rootPath}/tests`
      ),
      false,
      true,
        true
    );
    CrashLauncher.LOGGER.info("Postprocessing done");
    const timeInMs = (Date.now() - start) / 1000;
    this.metricManager.recordProperty(
        PropertyName.POSTPROCESS_TIME,
        `${timeInMs}`
    );
  }

  private async testTarget(
    rootContext: RootContext,
    target: Target
  ): Promise<Archive<JavaScriptTestCase>> {
    CrashLauncher.LOGGER.info(
      `Testing target ${target.name} in ${target.path}`
    );
    const currentSubject = new CrashSubject(target, this.rootContext, this.arguments_.stringAlphabet, this.crash.stackTrace);

    const rootTargets = currentSubject
      .getActionableTargets()
      .filter(
        (target) =>
          target.type === TargetType.FUNCTION ||
          target.type === TargetType.CLASS ||
          target.type === TargetType.OBJECT
      )
      .filter((target) => isExported(target));

    if (rootTargets.length === 0) {
      CrashLauncher.LOGGER.info(
        `No actionable exported root targets found for ${target.name} in ${target.path}`
      );
      // report skipped
      return new Archive();
    }

    const dependencies = rootContext.getDependencies(target.path);
    const dependencyMap = new Map<string, string[]>();
    dependencyMap.set(target.name, dependencies);
    const exports = rootContext.getExports(target.path);

    const decoder = new JavaScriptDecoder(
      exports,
      this.arguments_.targetRootDirectory,
        path.join(
          this.arguments_.tempSyntestDirectory,
          this.arguments_.logDirectory
        )
    );
    const executionInformationIntegrator = new ExecutionInformationIntegrator(
      this.rootContext.getTypeModel()
    );
    const runner = new JavaScriptRunner(
      this.storageManager,
      decoder,
      executionInformationIntegrator,
      this.arguments_.testDirectory
    );

    CrashLauncher.LOGGER.info("Extracting Constants");
    const constantPoolManager = new ConstantPoolManager();
    const targetAbstractSyntaxTree = this.rootContext.getAbstractSyntaxTree(
        target.path
    );
    const constantVisitor = new ConstantVisitor(
        target.path,
        constantPoolManager.targetConstantPool
    );
    traverse(targetAbstractSyntaxTree, constantVisitor);

    const files = getAllFiles(this.rootContext.rootPath, ".js").filter(
        (x) =>
            !x.includes("/test/") &&
            !x.includes(".test.js") &&
            !x.includes("node_modules")
    );

    for (const file of files) {
      const abstractSyntaxTree = this.rootContext.getAbstractSyntaxTree(file);
      const constantVisitor = new ConstantVisitor(
          file,
          constantPoolManager.contextConstantPool
      );
      traverse(abstractSyntaxTree, constantVisitor);
    }
    CrashLauncher.LOGGER.info("Extracting constants done");

    const sampler = new JavaScriptRandomSampler(
      currentSubject,
      constantPoolManager,
        (<JavaScriptArguments>this.arguments_).constantPool,
        (<JavaScriptArguments>this.arguments_).constantPoolProbability,
        (<JavaScriptArguments>this.arguments_).typeInferenceMode,
        (<JavaScriptArguments>this.arguments_).randomTypeProbability,
        (<JavaScriptArguments>this.arguments_).incorporateExecutionInformation,
        this.arguments_.maxActionStatements,
        this.arguments_.stringAlphabet,
        this.arguments_.stringMaxLength,
        this.arguments_.resampleGeneProbability,
        this.arguments_.deltaMutationProbability,
        this.arguments_.exploreIllegalValues
    );

    sampler.rootContext = rootContext;

    const secondaryObjectives = new Set(
      this.arguments_.secondaryObjectives.map((secondaryObjective) => {
        return (<SecondaryObjectivePlugin<JavaScriptTestCase>>(
          this.moduleManager.getPlugin(
            PluginType.SecondaryObjective,
            secondaryObjective
          )
        )).createSecondaryObjective();
      })
    );

    const objectiveManager = (<ObjectiveManagerPlugin<JavaScriptTestCase>>(
      this.moduleManager.getPlugin(
        PluginType.ObjectiveManager,
        "stackTrace"
      )
    )).createObjectiveManager({
      runner: runner,
      secondaryObjectives: secondaryObjectives,
      stackTrace: this.crash.stackTrace
    });

    this.objectiveManagers[target.path] = objectiveManager;

    this.objectiveManager = objectiveManager;

    const crossover = (<CrossoverPlugin<JavaScriptTestCase>>(
      this.moduleManager.getPlugin(
        PluginType.Crossover,
        this.arguments_.crossover
      )
    )).createCrossoverOperator({
      crossoverEncodingProbability: this.arguments_.crossoverProbability,
      crossoverStatementProbability:
        this.arguments_.multiPointCrossoverProbability,
    });

    const procreation = (<ProcreationPlugin<JavaScriptTestCase>>(
      this.moduleManager.getPlugin(
        PluginType.Procreation,
        this.arguments_.procreation
      )
    )).createProcreationOperator({
      crossover: crossover,
      mutateFunction: (
        sampler: EncodingSampler<JavaScriptTestCase>,
        encoding: JavaScriptTestCase
      ) => {
        return encoding.mutate(<JavaScriptTestCaseSampler>(<unknown>sampler));
      },
      sampler: sampler,
    });

    const algorithm = (<SearchAlgorithmPlugin<JavaScriptTestCase>>(
      this.moduleManager.getPlugin(
        PluginType.SearchAlgorithm,
        this.arguments_.searchAlgorithm
      )
    )).createSearchAlgorithm({
      objectiveManager: objectiveManager,
      encodingSampler: sampler,
      procreation: procreation,
      populationSize: this.arguments_.populationSize,
    });

    this.storageManager.clearTemporaryDirectory([
      this.arguments_.testDirectory
    ]);

    // allocate budget manager
    const iterationBudget = new IterationBudget(this.arguments_.iterations);
    const evaluationBudget = new EvaluationBudget(this.arguments_.evaluations);
    const searchBudget = new SearchTimeBudget(this.arguments_.searchTime);
    const totalTimeBudget = new TotalTimeBudget(this.arguments_.totalTime);
    const budgetManager = new BudgetManager();
    budgetManager.addBudget(BudgetType.ITERATION, iterationBudget);
    budgetManager.addBudget(BudgetType.EVALUATION, evaluationBudget);
    budgetManager.addBudget(BudgetType.SEARCH_TIME, searchBudget);
    budgetManager.addBudget(BudgetType.TOTAL_TIME, totalTimeBudget);

    // Termination
    const terminationManager = new TerminationManager();

    for (const trigger of this.arguments_.terminationTriggers) {
      terminationManager.addTrigger(
        (<TerminationTriggerPlugin>(
          this.moduleManager.getPlugin(PluginType.TerminationTrigger, trigger)
        )).createTerminationTrigger({
          objectiveManager: objectiveManager,
          encodingSampler: sampler,
          runner: runner,
          crossover: crossover,
          populationSize: this.arguments_.populationSize,
        })
      );
    }

    // This searches for a covering population
    const archive = await algorithm.search(
      currentSubject,
      budgetManager,
      terminationManager
    );

    if (this.coveredInPath.has(target.path)) {
      archive.merge(this.coveredInPath.get(target.path));
      this.coveredInPath.set(target.path, archive);
    } else {
      this.coveredInPath.set(target.path, archive);
    }

    this.storageManager.clearTemporaryDirectory([this.arguments_.logDirectory]);
    this.storageManager.clearTemporaryDirectory([this.arguments_.testDirectory]);

    // timing and iterations/evaluations
    this.metricManager.recordProperty(
        PropertyName.TOTAL_TIME,
        `${budgetManager.getBudgetObject(BudgetType.TOTAL_TIME).getUsedBudget()}`
    );
    this.metricManager.recordProperty(
        PropertyName.SEARCH_TIME,
        `${budgetManager.getBudgetObject(BudgetType.SEARCH_TIME).getUsedBudget()}`
    );
    this.metricManager.recordProperty(
        PropertyName.EVALUATIONS,
        `${budgetManager.getBudgetObject(BudgetType.EVALUATION).getUsedBudget()}`
    );
    this.metricManager.recordProperty(
        PropertyName.ITERATIONS,
        `${budgetManager.getBudgetObject(BudgetType.ITERATION).getUsedBudget()}`
    );

    CrashLauncher.LOGGER.info(
      `Finished testing target ${target.name} in ${target.path}`
    );
    return archive;
  }

  async exit(): Promise<void> {
    CrashLauncher.LOGGER.info("Exiting");
    // TODO should be cleanup step in tool
    // Finish
    // CrashLauncher.LOGGER.info("Deleting temporary directories");
    // deleteDirectories([
    //   path.join(
    //     this.arguments_.tempSyntestDirectory,
    //     this.arguments_.tempTestDirectory
    //   ),
    //   path.join(
    //     this.arguments_.tempSyntestDirectory,
    //     this.arguments_.tempLogDirectory
    //   ),
    //   path.join(
    //     this.arguments_.tempSyntestDirectory,
    //     this.arguments_.tempInstrumentedDirectory
    //   ),
    //   this.arguments_.tempSyntestDirectory,
    // ]);
  }

  public async runCrash(crash: Crash) {
    CrashLauncher.LOGGER.info("====== Crash to Run ======");
    CrashLauncher.LOGGER.info(crash.crashId);
    CrashLauncher.LOGGER.info("====== End Crash to Run ======");
    global.crash = crash;
    this.crash = crash;

    await this.run();
  }

  public override async run(): Promise<void> {
    // const environmentGenerator = new EnvironmentGenerator();
    // let crashes: Crash[] = environmentGenerator.loadAssets(this.arguments_.syntestProject,
    //     this.arguments_.syntestCrashes === 'true',
    //     this.arguments_.syntestSeeded === 'true');
    // const crashesToRemove: Crash[] = [];
    // for (const crash of crashes) {
    //   environmentGenerator.generatePackage(crash);
    //   if (EnvironmentBuilder.createCrashEnvironment(crash)) {
    //     crashesToRemove.push(crash);
    //   }
    // }
    // crashes = crashes.filter(crash => !crashesToRemove.includes(crash));

    // for (const crash of crashes) {
      try {
        this.registerProperties();
        (<TypedEventEmitter<Events>>process).emit("initializeStart");
        await this.initialize();
        (<TypedEventEmitter<Events>>process).emit("initializeComplete");
        (<TypedEventEmitter<Events>>process).emit("preprocessStart");
        await this.preprocess();
        (<TypedEventEmitter<Events>>process).emit("preprocessComplete");
        (<TypedEventEmitter<Events>>process).emit("processStart");
        await this.process();
        (<TypedEventEmitter<Events>>process).emit("processComplete");
        (<TypedEventEmitter<Events>>process).emit("postprocessStart");
        await this.postprocess();
        (<TypedEventEmitter<Events>>process).emit("postprocessComplete");
        (<TypedEventEmitter<Events>>process).emit("exitting");
        await this.exit();
      } catch (error) {
        console.log(error);
        // console.trace(error);
      }
    // }
  }
}
