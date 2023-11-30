/*
 * Copyright 2020-2023 SynTest contributors
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
  AbstractSyntaxTreeFactory,
  ConstantPoolFactory,
  ControlFlowGraphFactory,
  DependencyFactory,
  Export,
  ExportFactory,
  InferenceTypeModelFactory,
  isExported,
  RootContext,
  Target,
  TargetFactory,
  TypeExtractor,
  TypeModelFactory,
} from "@syntest/analysis-javascript";
import {
  ArgumentsObject,
  CrossoverPlugin, Events,
  Launcher,
  ObjectiveManagerPlugin,
  PluginType,
  ProcreationPlugin,
  PropertyName,
  SearchAlgorithmPlugin,
  SecondaryObjectivePlugin, TargetSelector, TerminationTriggerPlugin,
} from "@syntest/base-language";
import {
  ItemizationItem,
  TableObject,
  UserInterface,
} from "@syntest/cli-graphics";
import {
  CrashSubject,
  ExecutionInformationIntegrator,
  JavaScriptDecoder,
  JavaScriptRandomSampler,
  JavaScriptRunner,
  JavaScriptSuiteBuilder,
  JavaScriptTestCase, JavaScriptTestCaseSampler,
} from "@syntest/search-javascript";
import { IllegalArgumentError, isFailure, unwrap } from "@syntest/diagnostics";
import { Instrumenter } from "@syntest/instrumentation-javascript";
import { ModuleManager } from "@syntest/module";
import {
  ApproachLevelCalculator,
  Archive,
  BudgetManager,
  BudgetType,
  EncodingSampler,
  EvaluationBudget,
  IterationBudget, ObjectiveFunction, ObjectiveManager,
  extractBranchObjectivesFromProgram,
  extractFunctionObjectivesFromProgram,
  extractPathObjectivesFromProgram,
  SearchTimeBudget,
  TerminationManager,
  TotalTimeBudget, SearchSubject,
} from "@syntest/search";
import { getLogger, Logger } from "@syntest/logging";
import { MetricManager } from "@syntest/metric";
import {
  BranchDistanceCalculator,
  JavaScriptSubject,
} from "@syntest/search-javascript";
import { StorageManager } from "@syntest/storage";
import {Crash} from "@syntest/crash-reproduction-setup";
import {CrashInstrumenter} from "./instrumentation/CrashInstrumenter";
import {TestSplitting} from "./workflows/TestSplitter";
import {DeDuplicator} from "./workflows/DeDuplicator";
import {addMetaComments} from "./workflows/MetaComment";
import TypedEventEmitter from "typed-emitter";
import {FileSelector} from "./FileSelector";

export type JavaScriptArguments = ArgumentsObject & TestCommandOptions;
export class CrashLauncher extends Launcher<JavaScriptArguments> {
  protected static override LOGGER: Logger;

  protected override arguments_: JavaScriptArguments;
  protected override moduleManager: ModuleManager;
  protected override userInterface: UserInterface;

  private targets: Target[];

  private rootContext: RootContext;
  private rootPath: string;
  private archives: Map<Target, Archive<JavaScriptTestCase>>;

  private exports: Export[];
  private dependencyMap: Map<string, string[]>;

  private currentSubject: SearchSubject<JavaScriptTestCase>;

  private coveredInPath = new Map<string, Archive<JavaScriptTestCase>>();

  private decoder: JavaScriptDecoder;
  private runner: JavaScriptRunner;

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
    this.archives = new Map();
  }

  async initialize(): Promise<void> {
    CrashLauncher.LOGGER.info("Initialization started");
    const start = Date.now();

    this.metricManager.recordProperty(
      PropertyName.CONSTANT_POOL_ENABLED,
      `${this.arguments_.constantPool.toString()}`
    );
    this.metricManager.recordProperty(
      PropertyName.CONSTANT_POOL_PROBABILITY,
      `${this.arguments_.constantPoolProbability.toString()}`
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
    const targetFactory = new TargetFactory(this.arguments_.syntaxForgiving);
    const controlFlowGraphFactory = new ControlFlowGraphFactory(
      this.arguments_.syntaxForgiving
    );
    const dependencyFactory = new DependencyFactory(
      this.arguments_.syntaxForgiving
    );
    const exportFactory = new ExportFactory(this.arguments_.syntaxForgiving);
    const typeExtractor = new TypeExtractor(this.arguments_.syntaxForgiving);
    const typeResolver: TypeModelFactory = new InferenceTypeModelFactory();
    const constantPoolFactory = new ConstantPoolFactory(
      this.arguments_.syntaxForgiving
    );

    const rootPath = this.arguments_.targetRootDirectory + `/${this.arguments_.syntestType}/${this.crash.project}/${this.crash.crashId}`;

    this.rootPath = rootPath;

    const fileSelector = new FileSelector();
    const targetFiles = fileSelector.loadCrashFilePaths(
        this.arguments_.targetExclude,
        this.crash,
        this.arguments_
    );

    if (this.arguments_.analysisInclude.length === 0) {
      CrashLauncher.LOGGER.warn(
          "'analysis-include' config parameter is empty so we only use the target files for analysis"
      );
    }

    for (const target of targetFiles) {
      if (this.arguments_.analysisExclude.includes(target)) {
        throw new IllegalArgumentError(
          "Target files cannot be excluded from analysis",
          { context: { targetFile: target } }
        );
      }
    }

    const analysisFiles = fileSelector.loadFilePaths(
        [...targetFiles, ...this.arguments_.analysisInclude],
        this.arguments_.analysisExclude
    );

    this.rootContext = new RootContext(
      rootPath,
      targetFiles,
      analysisFiles,
      abstractSyntaxTreeFactory,
      controlFlowGraphFactory,
      targetFactory,
      dependencyFactory,
      exportFactory,
      typeExtractor,
      typeResolver,
      constantPoolFactory
    );

    // if (existsSync(this.arguments_.tempSyntestDirectory + `/instrumented/crashes/${this.arguments_.syntestType}/${this.crash.project}/${this.crash.crashId}/rootContextExtractedTypes__targetMap.json`)) {
    //   this.rootContext.loadExtractedTypes(this.arguments_.tempSyntestDirectory + `/instrumented/crashes/${this.arguments_.syntestType}/${this.crash.project}/${this.crash.crashId}`);
    // }
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

    const startTargetSelection = Date.now();
    const targetSelector = new TargetSelector(this.rootContext);
    this.targets = targetSelector.loadTargets(
      this.arguments_.targetInclude,
      this.arguments_.targetExclude
    );

    let timeInMs = (Date.now() - startTargetSelection) / 1000;
    this.metricManager.recordProperty(
        PropertyName.TARGET_LOAD_TIME,
        `${timeInMs}`
    );

    if (this.targets.length === 0) {
      // Shut server down
      this.userInterface.printError(
        `No targets were selected! Try changing the 'target-include' parameter`
      );
      await this.exit();
      process.exit();
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

    const selectionSettings: TableObject = {
      headers: ["Setting", "Value"],
      rows: [
        ["Target Root Directory", this.arguments_.targetRootDirectory],
        ["Target Include", `${this.arguments_.targetInclude.join(", ")}`],
        ["Target Exclude", `${this.arguments_.targetExclude.join(", ")}`],
        ["Analysis Include", `${this.arguments_.analysisInclude.join(", ")}`],
        ["Analysis Exclude", `${this.arguments_.analysisExclude.join(", ")}`],
      ],
    };
    this.userInterface.printTable("SELECTION SETTINGS", selectionSettings);

    const settings: TableObject = {
      headers: ["Setting", "Value"],
      rows: [
        ["Preset", this.arguments_.preset],
        ["Search Algorithm", this.arguments_.searchAlgorithm],
        ["Population Size", `${this.arguments_.populationSize}`],
        ["Objective Manager", `${this.arguments_.objectiveManager}`],
        [
          "Secondary Objectives",
          `[${this.arguments_.secondaryObjectives.join(", ")}]`,
        ],
        ["Procreation Operator", `${this.arguments_.procreation}`],
        ["Crossover Operator", `${this.arguments_.crossover}`],
        ["Sampling Operator", `${this.arguments_.sampler}`],
        [
          "Termination Triggers",
          `[${this.arguments_.terminationTriggers.join(", ")}]`,
        ],
        ["Test Minimization Enabled", String(this.arguments_.testMinimization)],

        ["Seed", `${this.arguments_.randomSeed.toString()}`],
      ],
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
    };

    this.userInterface.printTable("BUDGET SETTINGS", budgetSettings);

    const mutationSettings: TableObject = {
      headers: ["Setting", "Value"],
      rows: [
        [
          "Delta Mutation Probability",
          `${this.arguments_.deltaMutationProbability}`,
        ],
        ["Crossover Probability", `${this.arguments_.crossoverProbability}`],
        [
          "Multi-point Crossover Probability",
          `${this.arguments_.multiPointCrossoverProbability}`,
        ],
        // sampling
        ["Max Depth", `${this.arguments_.maxDepth}`],
        ["Max Action Statements", `${this.arguments_.maxActionStatements}`],
        [
          "Explore Illegal Values",
          String(this.arguments_.exploreIllegalValues),
        ],
        ["Use Constant Pool Values", String(this.arguments_.constantPool)],
        [
          "Use Constant Pool Probability",
          `${this.arguments_.constantPoolProbability}`,
        ],
        ["Use Type Pool Values", String(this.arguments_.typePool)],
        ["Use Type Pool Probability", `${this.arguments_.typePoolProbability}`],
        ["Use Statement Pool Values", String(this.arguments_.statementPool)],
        [
          "Use Statement Pool Probability",
          `${this.arguments_.statementPoolProbability}`,
        ],
      ],
    };
    this.userInterface.printTable("MUTATION SETTINGS", mutationSettings);

    const typeSettings: TableObject = {
      headers: ["Setting", "Value"],
      rows: [
        ["Type Inference Mode", `${this.arguments_.typeInferenceMode}`],
        [
          "Incorporate Execution Information",
          String(this.arguments_.incorporateExecutionInformation),
        ],
        ["Random Type Probability", `${this.arguments_.randomTypeProbability}`],
      ],
    };
    this.userInterface.printTable("Type SETTINGS", typeSettings);

    const directorySettings: TableObject = {
      headers: ["Setting", "Value"],
      rows: [
        ["Syntest Directory", `${this.arguments_.syntestDirectory}`],
        ["Temporary Directory", `${this.arguments_.tempSyntestDirectory}`],
        ["Target Root Directory", `${this.arguments_.targetRootDirectory}`],
      ],
    };

    this.userInterface.printTable("DIRECTORY SETTINGS", directorySettings);

    CrashLauncher.LOGGER.info("Instrumenting targets");
    const startInstrumentation = Date.now();
    // if (!existsSync(this.arguments_.tempSyntestDirectory + `/instrumented/crashes/${this.arguments_.syntestType}/${this.crash.project}/${this.crash.crashId}/node_modules`)) {
    const instrumenter = new CrashInstrumenter();
    await instrumenter.instrumentAll(
        this.storageManager,
        this.rootContext,
        this.targets,
        `/instrumented/crashes/${this.arguments_.syntestType}`
    );
    // }

    timeInMs = (Date.now() - startInstrumentation) / 1000;
    this.metricManager.recordProperty(
        PropertyName.INSTRUMENTATION_TIME,
        `${timeInMs}`
    );

    const startTypeResolving = Date.now();

    CrashLauncher.LOGGER.info("Extracting types");
    console.log("Extracting types");
    this.rootContext.getAllElements();
    this.rootContext.getAllRelations();
    this.rootContext.getAllObjectTypes();
    // console.log("Saving types");
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
    timeInMs = (Date.now() - startTypeResolving) / 1000;
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

    this.decoder = new JavaScriptDecoder(this.arguments_.targetRootDirectory);
    const executionInformationIntegrator = new ExecutionInformationIntegrator(
        this.rootContext.getTypeModel()
    );
    this.runner = new JavaScriptRunner(
      this.storageManager,
      this.decoder,
      executionInformationIntegrator,
      this.arguments_.testDirectory,
      this.arguments_.executionTimeout,
      this.arguments_.testTimeout,
      this.arguments_.silenceTestOutput
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
    this.exports = [];
    this.dependencyMap = new Map();
    this.objectiveManagers = {};
    for (const target of this.targets) {
      try {
        CrashLauncher.LOGGER.info(`Processing ${target.name}`);
        const archive = await this.testTarget(this.rootContext, target);
        this.archives.set(target, archive);
      } catch (error) {
        //
      }
    }
    CrashLauncher.LOGGER.info("Processing done");
    const timeInMs = (Date.now() - start) / 1000;
    this.metricManager.recordProperty(PropertyName.PROCESS_TIME, `${timeInMs}`);
  }

  async postprocess(): Promise<void> {
    this.userInterface.printHeader("Postprocessing started");
    CrashLauncher.LOGGER.info("Postprocessing started");
    const start = Date.now();
    const testSplitter = new TestSplitting(this.runner);
    const objectives = new Map<Target, ObjectiveFunction<JavaScriptTestCase>[]>(
        [...this.archives.entries()].map(([target, archive]) => [
          target,
          archive.getObjectives(),
        ])
    );
    let finalEncodings = new Map<Target, JavaScriptTestCase[]>(
        [...this.archives.entries()].map(([target, archive]) => [
          target,
          archive.getEncodings(),
        ])
    );

    if (this.arguments_.testSplitting) {
      const start = Date.now();
      const before = [...finalEncodings.values()]
          .map((x) => x.length)
          .reduce((p, c) => p + c, 0);
      CrashLauncher.LOGGER.info("Splitting started");
      finalEncodings = await testSplitter.testSplitting(finalEncodings);

      const timeInMs = (Date.now() - start) / 1000;
      const after = [...finalEncodings.values()]
          .map((x) => x.length)
          .reduce((p, c) => p + c, 0);

      CrashLauncher.LOGGER.info(
          `Splitting done took: ${timeInMs}, went from ${before} to ${after} test cases`
      );
      this.userInterface.printSuccess(
        `Splitting done took: ${timeInMs}, went from ${before} to ${after} test cases`
      );

      // this.metricManager.recordProperty(PropertyName., `${timeInMs}`); // TODO new metric
    }
    if (this.arguments_.testMinimization) {
      const start = Date.now();
      CrashLauncher.LOGGER.info("Minimization started");
      const timeInMs = (Date.now() - start) / 1000;
      CrashLauncher.LOGGER.info(`Minimization done, took: ${timeInMs}`);
      // this.metricManager.recordProperty(PropertyName., `${timeInMs}`); // TODO new metric
    }

    const secondaryObjectives = this.arguments_.secondaryObjectives.map(
        (secondaryObjective) => {
          return (<SecondaryObjectivePlugin<JavaScriptTestCase>>(
              this.moduleManager.getPlugin(
                  PluginType.SecondaryObjective,
                  secondaryObjective
              )
          )).createSecondaryObjective();
        }
    );

    const startDeduplication = Date.now();
    const before = [...finalEncodings.values()]
        .map((x) => x.length)
        .reduce((p, c) => p + c, 0);
    CrashLauncher.LOGGER.info("De-Duplication started");

    const deDuplicator = new DeDuplicator();
    const newArchives = deDuplicator.deDuplicate(
        secondaryObjectives,
        objectives,
        finalEncodings
    );

    const timeInMsDeDuplication = (Date.now() - startDeduplication) / 1000;
    const after = [...newArchives.values()]
        .map((x) => x.size)
        .reduce((p, c) => p + c, 0);

    CrashLauncher.LOGGER.info(
        `De-Duplication done took: ${timeInMsDeDuplication}, went from ${before} to ${after} test cases`
    );
    this.userInterface.printSuccess(
      `De-Duplication done took: ${timeInMsDeDuplication}, went from ${before} to ${after} test cases`
    );

    if (this.arguments_.metaComments) {
      addMetaComments(newArchives);
    }

    let testNum = 0;
    finalEncodings = new Map<Target, JavaScriptTestCase[]>(
        [...newArchives.entries()].map(([target, archive]) => {
          console.log("archive size", archive.size);
          testNum += archive.size;
          return [target, archive.getEncodings()];
        })
    );

    if (testNum === 0) {
      CrashLauncher.LOGGER.info("Postprocessing done");
      const timeInMs = (Date.now() - start) / 1000;
      this.metricManager.recordProperty(
          PropertyName.POSTPROCESS_TIME,
          `${timeInMs}`
      );
      return;
    }

    const suiteBuilder = new JavaScriptSuiteBuilder(
        this.storageManager,
        this.decoder,
        this.runner
    );

    console.log("Run Final Suite");

    // TODO fix hardcoded paths
    await suiteBuilder.runSuite(
        finalEncodings,
        "../instrumented",
        this.arguments_.testDirectory,
        true,
        false
    );

    // reset states
    this.storageManager.clearTemporaryDirectory([
      this.arguments_.testDirectory,
    ]);

    console.log("Run Final Suite 2");

    const { stats, instrumentationData } = await suiteBuilder.runSuite(
        finalEncodings,
        "../instrumented",
        this.arguments_.testDirectory,
        false,
        true
    );

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
      for (const objective of objectives
          .filter(obj => obj.getIdentifier().includes('stack'))) {
        try {
          const encoding = this.archives.get(target).getEncoding(objective);
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
        `${summary["statement"]} / ${Object.keys(data.s).length}`,
        `${summary["branch"]} / ${Object.keys(data.b).length * 2}`,
        `${summary["function"]} / ${Object.keys(data.f).length}`,
        // @ts-ignore
        `${summary["objective"]} / ${this.currentSubject?.numStackObjectives || 0}`,
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
        `${this.archives.size}`
    );
    this.metricManager.recordProperty(
        PropertyName.MINIMIZED_ARCHIVE_SIZE,
        `${this.archives.size}`
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
      `${overall["statement"] * 100} %`,
      `${overall["branch"] * 100} %`,
      `${overall["function"] * 100} %`,
      `${overall["objective"] * 100} %`,
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
    await suiteBuilder.runSuite(
      finalEncodings,
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

    const result = rootContext.getControlFlowProgram(target.path);

    if (isFailure(result)) throw result.error;

    const cfp = unwrap(result);

    const branchObjectives =
      extractBranchObjectivesFromProgram<JavaScriptTestCase>(
        cfp,
        new ApproachLevelCalculator(),
        new BranchDistanceCalculator(
          this.arguments_.syntaxForgiving,
          this.arguments_.stringAlphabet
        )
      );
    const pathObjectives = extractPathObjectivesFromProgram<JavaScriptTestCase>(
      cfp,
      new ApproachLevelCalculator(),
      new BranchDistanceCalculator(
        this.arguments_.syntaxForgiving,
        this.arguments_.stringAlphabet
      )
    );
    const functionObjectives =
      extractFunctionObjectivesFromProgram<JavaScriptTestCase>(cfp);

    this.userInterface.printTable("Objective Counts", {
      headers: ["Type", "Count"],
      rows: [
        ["branch", `${branchObjectives.length}`],
        ["path", `${pathObjectives.length}`],
        ["function", `${functionObjectives.length}`],
      ],
    });

    // const currentSubject = new JavaScriptSubject(
    //     target,
    //     [...pathObjectives]
    // );
    const currentSubject = new CrashSubject(
      target,
      this.crash.stackTrace,
      [],
        cfp,
        new ApproachLevelCalculator(),
        new BranchDistanceCalculator(
            this.arguments_.syntaxForgiving,
            this.arguments_.stringAlphabet
        )
      );

    this.currentSubject = currentSubject;

    const rootTargets = currentSubject
      .getActionableTargets()
      .filter((target) => isExported(target));

    if (rootTargets.length === 0) {
      CrashLauncher.LOGGER.info(
        `No actionable exported root targets found for ${target.name} in ${target.path}`
      );
      // report skipped
      return new Archive();
    }

    const constantPoolManagerResult = rootContext.getConstantPoolManager(
      target.path
    );

    if (isFailure(constantPoolManagerResult))
      console.log(constantPoolManagerResult.error);

    const sampler = new JavaScriptRandomSampler(
      currentSubject,
        isFailure(constantPoolManagerResult)
            ? undefined
            : unwrap(constantPoolManagerResult),
        isFailure(constantPoolManagerResult) ? false : this.arguments_.constantPool,
      this.arguments_.constantPoolProbability,
      this.arguments_.typePool,
      this.arguments_.typePoolProbability,
      this.arguments_.statementPool,
      this.arguments_.statementPoolProbability,

      this.arguments_.typeInferenceMode,
      this.arguments_.randomTypeProbability,
      this.arguments_.incorporateExecutionInformation,
      this.arguments_.maxActionStatements,
      this.arguments_.stringAlphabet,
      this.arguments_.stringMaxLength,
      this.arguments_.deltaMutationProbability,
      this.arguments_.exploreIllegalValues
    );
    sampler.rootContext = rootContext;

    const secondaryObjectives = this.arguments_.secondaryObjectives.map(
        (secondaryObjective) => {
          return (<SecondaryObjectivePlugin<JavaScriptTestCase>>(
              this.moduleManager.getPlugin(
                  PluginType.SecondaryObjective,
                  secondaryObjective
              )
          )).createSecondaryObjective();
        }
    );

    const objectiveManager = (<ObjectiveManagerPlugin<JavaScriptTestCase>>(
      this.moduleManager.getPlugin(
        PluginType.ObjectiveManager,
        "stackTrace"
      )
    )).createObjectiveManager({
      runner: this.runner,
      secondaryObjectives: secondaryObjectives,
      exceptionObjectivesEnabled: this.arguments_.exceptionObjectives,
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
          runner: this.runner,
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
    if (this.runner && this.runner.process) {
      this.runner.process.kill();
    }
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
        await this.exit();
        console.trace(error);
      }
    // }
  }
}
