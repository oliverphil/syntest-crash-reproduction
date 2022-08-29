import {RunResult, StackFrame, StackTrace} from '../types/stackTraceTypes';

/**
 * Calculate stack trace fitness function using the EvoCrash metric.
 * Informed by EvoCrash implementation
 */
export default class EvocrashFitness {
  /**
   * Get the EvoCrash fitness
   * @param {RunResult} result the result from the current execution
   * @param {StackTrace} expectedStackTrace the expected stack trace from the crash log
   * @return {number} the fitness value
   */
  public static getEvoCrashFitness(result: RunResult, expectedStackTrace: StackTrace): number {
    let currentFitnessValue = 0;
    let lineFitness = 1;
    let hasDeclaredException = 1;
    let stackFitness = 1;

    const lineNumber = expectedStackTrace.trace[0].lineNumber;

    lineFitness = EvocrashFitness.getLineFitness(result, expectedStackTrace, lineNumber || Number.MAX_SAFE_INTEGER);
    console.log(`Line Fitness: ${lineFitness}`);

    if (lineFitness === 0.0) {
      if (result.stackTrace.error.errorType === expectedStackTrace.error.errorType) {
        hasDeclaredException = 0;
        const tempFitness = EvocrashFitness.compareTraces(result, expectedStackTrace);
        if (tempFitness === 0.0 || tempFitness < stackFitness) {
          stackFitness = tempFitness;
        }
      }
    }

    currentFitnessValue = 3 * lineFitness + 2 * hasDeclaredException + stackFitness;
    console.debug(`${3 * lineFitness} + ${2 * hasDeclaredException} + ${stackFitness}`);
    console.log(`Current Fitness: ${currentFitnessValue}`);
    console.log(result.stackTrace, result.file);
    return currentFitnessValue;
  }

  /**
   * Get the fitness for a certain line.
   * @param {RunResult} result the result from the execution
   * @param {StackTrace} expectedStackTrace the stack trace from the crash log
   * @param {number} line the line of the stack trace to evaluate
   * @return {number} the fitness for the line
   * @private
   */
  private static getLineFitness(result: RunResult, expectedStackTrace: StackTrace, line: number): number {
    const lineNumber = line;
    if (result.stackTrace.trace.some((frame: StackFrame) => frame.lineNumber === lineNumber &&
      frame.file.includes(expectedStackTrace.trace[0].file))) {
      return 0.0;
    } else {
      return 1.0;
    }
  }

  /**
   * Compare two stack traces
   * @param {RunResult} result the result from an execution
   * @param {StackTrace} expectedStackTrace the expected stack trace from the crash log
   * @return {number} a measure of similarity between the two stack traces
   * @private
   */
  private static compareTraces(result: RunResult, expectedStackTrace: StackTrace): number {
    const fitness = EvocrashFitness.stackTraceDistance(result.stackTrace.trace, expectedStackTrace.trace);
    return EvocrashFitness.normalise(fitness);
  }

  /**
   * Find the distance between two stack traces
   * @param {StackFrame[]} resultTrace the result trace from an execution
   * @param {StackFrame[]} expectedTrace the trace expected from the crash log
   * @return {number} the distance between the two stack traces
   * @private
   */
  private static stackTraceDistance(resultTrace: StackFrame[], expectedTrace: StackFrame[]): number {
    let stackDistance = 0;
    let position = -1;
    for (let i = 0; i < expectedTrace.length; i++) {
      const targetElement = expectedTrace[i];
      let minDistance = 1;
      for (let j = position + 1; j < resultTrace.length; j++) {
        let dist = 1;
        const resultElement = resultTrace[j];
        dist = EvocrashFitness.stackElementsDistance(resultElement, targetElement);
        if (dist < minDistance) {
          minDistance = dist;
          position = j;
        }
      }
      stackDistance += minDistance;
    }

    return EvocrashFitness.normalise(stackDistance);
  }

  /**
   * Find the distance between two stack elements
   * @param {StackFrame} resultElement the element from the stack from the execution
   * @param {StackFrame} targetElement the expected stack frame
   * @return {number} the distance between the elements
   * @private
   */
  private static stackElementsDistance(resultElement: StackFrame, targetElement: StackFrame): number {
    let elementDistance = 0;
    if (!resultElement.file.includes(targetElement.file)) {
      elementDistance += 3;
    } else {
      if (resultElement.method !== targetElement.method) {
        elementDistance += 2;
      } else {
        if (!resultElement.lineNumber && !targetElement.lineNumber) {
          elementDistance = 0.0;
        } else {
          elementDistance = Math.abs((resultElement.lineNumber || Number.MAX_SAFE_INTEGER) -
            (targetElement.lineNumber || Number.MAX_SAFE_INTEGER));
        }
      }
    }
    return EvocrashFitness.normalise(elementDistance);
  }

  /**
   * Normalise a number
   * @param {number} num the number to normalise
   * @return {number} the normalised number
   * @private
   */
  private static normalise(num: number): number {
    if (!Number.isFinite(num)) {
      return 1.0;
    }
    return num / (1.0 + num);
  }
}
