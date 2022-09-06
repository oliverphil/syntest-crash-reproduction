import {Crash} from '../types/importTypes';
import * as fs from 'fs';
import {execSync} from 'child_process';
import * as util from 'util';

/**
 * Build the environment for the crashes.
 */
class EnvironmentBuilder {
  /**
   * Create the docker environment for a given crash
   * @param {Crash} crash the crash to create the environment for
   * @return {Promise<FunctionResults>} the functions present in the crash files
   */
  public static createCrashEnvironment(crash: Crash): FunctionResults {
    // console.log(crash);
    const assetDir = './benchmark/crashes';
    let crashFolder = `${assetDir}/${crash.project}/${crash.crashId}`;
    if (crash.seeded) {
      crashFolder = `${assetDir}/seeded/${crash.project}/${crash.crashId}`;
    }
    const stackTraceFiles: string[] = [];
    for (const frame of crash.stackTrace.trace) {
      let file = frame.file;
      if (file.includes('node_modules/')) {
        file = file.replace('node_modules/', '');
      }
      if (!file.includes('/')) {
        file = file.replace('.js', '');
      }
      if (!stackTraceFiles.includes(file)) {
        stackTraceFiles.push(file);
      }
    }
    fs.writeFileSync(`${crashFolder}/files.json`,
        JSON.stringify(stackTraceFiles));
    fs.writeFileSync(
        `${crashFolder}/package.json`,
        JSON.stringify(crash.package));
    fs.writeFileSync(`${crashFolder}/Dockerfile`,
        crash.dockerfile as string);
    console.log(`docker build -t ${crash.crashId}:latest  ${crashFolder}`);
    let stdout = '';
    let stderr = '';
    try {
      stdout = execSync(`docker build -t ${crash.crashId}:latest -f ${crashFolder}/Dockerfile --build-arg CACHEBUST=$(date +%s) .`).toString();
    } catch (e) {
      stdout = e.stdout.toString();
      stderr = e.stderr.toString();
      // console.error(e);
    }
    console.log(stdout);
    console.error(stderr);
    return this.parseFunctions(stdout);
  }

  /**
   * Parse function names from Docker build results
   * @param {string} stdout the output from Docker
   * @return {FunctionResults} the functions attached to each file in the stack trace
   * @private
   */
  private static parseFunctions(stdout: string): FunctionResults {
    const regex = new RegExp('\\*+Start Function List for ([$A-Za-z_][0-9a-zA-Z_$/.\-]*)\\*+\\n(' +
      '(?:[$A-Za-z_][0-9a-zA-Z_$\-:]*|\\n)*)\\n(?:' +
      '(?:\\*+Failed Reading Function List for [$A-Za-z_][0-9a-zA-Z_$/.\-]*\\*+)|' +
      '(?:\\*+End Function List for [$A-Za-z_][0-9a-zA-Z_$/.\-]*\\*+))', 'gm');
    const result = stdout.matchAll(regex);
    const functionResults: FunctionResults = {};
    for (const match of result) {
      const file = match[1];
      const functionString = match[2];
      const funcList = functionResults[file] || [];
      functionString.split('\n').forEach((s) => {
        const funcInfo = s.split(':');
        const numArguments = Number.parseInt(funcInfo[1]);
        const toAdd = {
          functionName: funcInfo[0],
          numArguments,
        };
        if (!funcList.includes(toAdd)) {
          funcList.push(toAdd);
        }
      });
      functionResults[file] = funcList;
    }
    return functionResults;
  }
}

export interface FunctionResults {
  [fileName: string]: FunctionInfo[];
}

export interface FunctionInfo {
  functionName: string;
  numArguments: number;
}

export default EnvironmentBuilder;
