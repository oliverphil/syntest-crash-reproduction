import EnvironmentGenerator from './setup/environmentGenerator';
import EnvironmentBuilder, {FunctionResults} from './setup/environmentBuilder';
import Cleanup from './cleanup/cleanup';
import DockerRunner from './crashReproduction/dockerRunner';
import TestGenerator from './crashReproduction/testGenerator';
import {Crash} from './types/importTypes';
import {exec} from 'child_process';
import Fitness from './genetic/fitness';

const store = require('store');
const TIMEOUT = 1800000;

/**
 * Main method for the crash reproduction
 */
async function run() {
  const environmentGenerator = new EnvironmentGenerator();
  const crashes: Crash[] = environmentGenerator.generate();
  for (const crash of crashes) {
    if (crash.project !== 'webpack') continue;
    // if (crash.project === 'eslint') continue;
    const functionResults: FunctionResults = EnvironmentBuilder.createCrashEnvironment(crash);
    const result = runCrashWithTimeout(crash, functionResults);
    if (process.argv.includes('--rm')) {
      await Cleanup.cleanEnvironments(crash);
    }
  }
}

/**
 * Run a crash with a set timeout
 * @param {Crash} crash the crash to run
 * @param {FunctionResults} functionResults the results from analysing the code
 * @return {Promise<{fitness: number, testCase: string}>} the best result from the GP algorithm
 */
function runCrashWithTimeout(crash: Crash, functionResults: FunctionResults):
  {fitness: number, testCase: string} {
  const startTime = Date.now();
  const files: string[] = TestGenerator.generateInitialTestFiles(crash, functionResults);
  let fitness = Number.MAX_VALUE;
  let crashResults;
  while (fitness > 0 && Date.now() < startTime + TIMEOUT) {
    crashResults = DockerRunner.runCrash(crash, files);
    const fitnessValues = Fitness.calculateFitness(crashResults, crash.stackTrace).sort(
        (a, b) => a.fitness - b.fitness);
    const bestFitness = fitnessValues[0]?.fitness;
    fitness = bestFitness < fitness ? bestFitness : fitness;
    console.log(`Best Fitness: ${fitness}`);
    break; // TODO: GP mutation
  }

  return {
    fitness,
    testCase: '',
  };
}

const path = require('path');
store.set('appRoot', path.resolve(__dirname).replace('/src', ''));
run().then(() => {
  exec('docker container prune -f', () => exec('docker image prune -af'));
  process.exit();
});

