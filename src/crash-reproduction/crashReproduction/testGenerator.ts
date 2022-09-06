import {Crash} from '../types/importTypes';
import {FunctionInfo, FunctionResults} from '../setup/environmentBuilder';
import {randomInt} from 'crypto';

/**
 * A class to generate tests for crashes
 */
class TestGenerator {
  private static dataPoints = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10,
    Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MAX_VALUE, Number.MIN_VALUE,
    'string', {}, [], true, false, undefined, null,
  ];

  /**
   * Generate an initial test file for a crash
   * @param {Crash} crash the crash to generate a test file for
   * @param {FunctionResults} functionResults functions in files from stack trace
   * @return {string[]} a string array which contains the initial test files' contents
   */
  public static generateInitialTestFiles(crash: Crash, functionResults: FunctionResults): string[] {
    const testFiles: string[] = [];

    Object.keys(functionResults).forEach((fileName) => {
      const functions: FunctionInfo[] = functionResults[fileName];
      const asyncAwait = `const run = async () => {`;
      const run = `};\nrun().then(() => process.exit(0));\n`;
      const importStatement = `const imp = await import('${fileName}');\n`;
      for (const func of functions) {
        const funcName = func.functionName;
        let argString = '';
        if (func.numArguments > 1) {
          for (let i=0; i<func.numArguments - 1; i++) {
            argString += `${JSON.stringify(this.dataPoints[randomInt(0, this.dataPoints.length)])}, `;
          }
          argString += JSON.stringify(this.dataPoints[randomInt(0, this.dataPoints.length)]);
        } else if (func.numArguments === 1) {
          argString += JSON.stringify(this.dataPoints[randomInt(0, this.dataPoints.length)]);
        }

        testFiles.push(asyncAwait + importStatement +
          `console.log('${fileName}:${funcName}');\n` +
          `var func = imp.default.${funcName} || imp.default.prototype.${funcName};\n` +
          `const ctor = imp.default.constructor || imp.default.prototype.constructor;\n` +
          `const obj = createObject(ctor);\n` +
          `func = func.bind(obj);\n` +
          `const res = func(${argString});\n` +
          'console.log(res);\n' +
          run +
          'function createObject(ctor) {\n' +
            '  var obj, newObj;\n' +
            '\n' +
            '  function fakeCtor() {}\n' +
            '  fakeCtor.prototype = ctor.prototype;\n' +
            '  obj = new fakeCtor();\n' +
            '  obj.constructor = ctor;\n' +
            '  newObj = ctor.apply(obj);\n' +
            '  if (newObj && (typeof newObj === \'object\' || typeof newObj === \'function\')) {\n' +
            '    return newObj;\n' +
            '  }\n' +
            '  return obj;\n' +
            '}\n');
      }
    });

    return testFiles;
  }

}

export default TestGenerator;
