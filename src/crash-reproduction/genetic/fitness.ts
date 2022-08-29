import {RunResult, StackTrace} from '../types/stackTraceTypes';
import EvocrashFitness from './evocrashFitness';
import {CalculatedFitness} from '../types/gpTypes';

/**
 * Fitness calculation api
 */
export default class Fitness {
  /**
   * Calculate the fitness of the results from the execution
   * @param {RunResult[]} results the results from the executions
   * @param {StackTrace} expectedStackTrace the expected stack trace from the crash log
   * @return {CalculatedFitness[]} the results and fitness
   */
  public static calculateFitness(results: RunResult[], expectedStackTrace: StackTrace): CalculatedFitness[] {
    const fitnessResults = [];
    for (const result of results) {
      fitnessResults.push({
        runResult: result,
        fitness: EvocrashFitness.getEvoCrashFitness(result, expectedStackTrace),
      });
    }
    return fitnessResults;
  }
}

