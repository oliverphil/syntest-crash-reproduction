import {Crash} from '../types/importTypes';
import * as util from 'util';
import {execSync} from 'child_process';
import * as fs from 'fs';
import {RunResult} from '../types/stackTraceTypes';
import StackTraceProcessor from '../setup/preprocessing/stackTraceProcessor';

const store = require('store');
/**
 * A class to contain methods for running docker containers
 */
class DockerRunner {
  /**
   * Run an image for the given crash
   * @param {Crash} crash the crash to run the docker image for
   * @param {string[]} files initial index files
   */
  public static runCrash(crash: Crash, files: string[]): RunResult[] {
    const crashDir = `benchmark/crashes/${crash.project}/${crash.crashId}`;
    const currentDir = store.get('appRoot');
    const results: RunResult[] = [];
    for (const file of files) {
      fs.writeFileSync(`${crashDir}/index.js`, file);
      try {
        const stdout = execSync(`docker run -v ${currentDir}/${crashDir}:/${crash.crashId} `+
          `--rm ${crash.crashId}:latest`).toString();
        console.log(stdout);
      } catch (e) {
        console.log(e);
        const err = e as Error;
        let lines = err.stack?.split('\n');
        lines = lines?.filter((l) => !l.includes('npm notice') && l.length !== 0 && !l.includes('Node.js'));
        if (lines) {
          const stackTrace = StackTraceProcessor.processCrashStack(lines);
          results.push({
            file,
            stackTrace,
          });
        }
      }
    }

    return results;
  }
}

export default DockerRunner;
