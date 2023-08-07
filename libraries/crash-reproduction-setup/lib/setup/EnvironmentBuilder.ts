import {Crash} from '../crashTypes/ImportTypes';
import * as fs from 'fs';
import {execSync} from 'child_process';

/**
 * Build the environment for the crashes.
 */
export class EnvironmentBuilder {
  /**
   * Create the docker environment for a given crash
   * @param {Crash} crash the crash to create the environment for
   * @return {Promise<FunctionResults>} the functions present in the crash files
   */
  public static createCrashEnvironment(crash: Crash, syntestType: string): boolean {
    // console.log(crash);
    const assetDir = './benchmark/crashes';
    let crashFolder = `${assetDir}/${crash.project}/${crash.crashId}`;
    if (syntestType === 'seeded') {
      crashFolder = `${assetDir}/seeded/${crash.project}/${crash.crashId}`;
    } else if (syntestType === 'bugsjs') {
      crashFolder = `${assetDir}/bugsjs/${crash.project}/${crash.crashId}`;
    } else if (syntestType === 'syntest-collected') {
      crashFolder = `${assetDir}/syntest-collected/${crash.project}/${crash.crashId}`;
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
    // if (fs.existsSync(`${crashFolder}/package-lock.json`)) {
    //   fs.rmSync(`${crashFolder}/package-lock.json`);
    // }
    let stdout = '';
    let stderr = '';
    let error = false;
    try {
    //   // if (crash.nodeVersion) {
    //   //   stdout = execSync(`unset npm_config_prefix && source /vol/grid-solar/sgeusers/oliverphil/.nvm/nvm.sh && nvm install ${crash.nodeVersion} && npm --prefix ${crashFolder} i`).toString();
    //   // } else {
        stdout = execSync(`npm --prefix ${crashFolder} i`).toString();
    //   // }
    } catch (e) {
      stdout = e.stdout.toString();
      stderr = e.stderr.toString();
      error = true;
      console.error(e);
    }
    console.log(stdout);
    console.error(stderr);
    this.handleSetupOptions(crash, crashFolder);
    return error;
  }

  private static handleSetupOptions(crash: Crash, crashFolder: string) {
    const assetDir = './benchmark/crashes';
    const projectName = crash.project;
    const crashName = crash.crashId;
    if (!crash.setup) {
      return;
    }
    let stdout = '';
    let stderr = '';
    if (crash.setup.copy) {
      try {
        stdout = execSync(`cp ${crashFolder}/${crash.setup.copy.from} ${crashFolder}/${crash.setup.copy.to}`).toString();
      } catch (e) {
        stdout = e.stdout;
        stderr = e.stderr;
      }
      console.log(stdout);
      console.error(stderr);
    }
    const tarName = `${crash.project}-${crash.version}.tar.gz`;
    const tarFolder = `${assetDir}/${crash.seeded ? `seeded/${projectName}` : projectName}/${crashName}`;
    const tarFile = `${assetDir}/${crash.seeded ? `seeded/${projectName}` : projectName}/${crashName}/${tarName}`;
    if (crash.setup.download) {
      execSync(`wget -O ${tarFile} ` + crash.setup.download.url);
      if (crash.setup.download.unpack === 'tar.gz') {
        execSync(`tar -xf ${tarFile} -C ${tarFolder}`);
      }
    }
  }

  /**
   * Parse function names from Docker build results
   * @param {string} stdout the output from Docker
   * @return {FunctionResults} the functions attached to each file in the stack trace
   * @private
   */
  private static parseFunctions(stdout: string): FunctionResults {
    const regex = new RegExp('\\*+Start Function List for ([$A-Za-z_][0-9a-zA-Z_$/.-]*)\\*+\\n(' +
      '(?:[$A-Za-z_][0-9a-zA-Z_$-:]*|\\n)*)\\n(?:' +
      '(?:\\*+Failed Reading Function List for [$A-Za-z_][0-9a-zA-Z_$/.-]*\\*+)|' +
      '(?:\\*+End Function List for [$A-Za-z_][0-9a-zA-Z_$/.-]*\\*+))', 'gm');
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
