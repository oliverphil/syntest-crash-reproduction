import {exec} from 'child_process';
import * as util from 'util';
import {Crash} from '../types/importTypes';

/**
 * Remove environments after execution
 */
class Cleanup {
  /**
   * Remove environments after execution
   * @param {Crash} crash the crash to remove
   */
  static async cleanEnvironments(crash: Crash) {
    const execProm = util.promisify(exec);
    try {
      const {
        stdout,
        stderr,
      } = await execProm(`docker image rm -f ${crash.crashId}`);
      if (stdout) {
        console.log(stdout);
      }
      if (stderr) {
        console.error(stderr);
      }
    } catch (err) {
      console.error(err);
    }
  }
}

export default Cleanup;
