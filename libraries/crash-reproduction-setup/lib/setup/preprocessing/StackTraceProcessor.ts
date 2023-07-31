import {StackError, StackFrame, StackTrace} from '../../crashTypes/StackTraceTypes';

/**
 * Stack trace processor
 */
export class StackTraceProcessor {
  /**
   * Process a stack trace
   * @param {string} stackTrace the stack trace
   * @return {StackTrace} a StackTrace object
   */
  public static process(stackTrace: string, verbose = false): StackTrace {
    const lines: string[] = stackTrace.split('\n');
    const error: StackError = this.parseError(lines[0]);
    const trace: StackFrame[] = this.parseTrace(lines.slice(1), verbose);
    return {
      error,
      trace,
      rawTrace: stackTrace,
    } as StackTrace;
  }

  /**
   * Process a stack trace after crash run
   * @param {string[]} stackTrace a list of stack trace lines
   * @return {StackTrace} a StackTrace object
   */
  public static processCrashStack(stackTrace: string[]): StackTrace {
    const lines: string[] = stackTrace.slice(4);
    const error: StackError = this.parseError(lines[0]);
    const trace: StackFrame[] = this.parseTrace(lines.slice(1), true);
    return {
      error,
      trace,
      rawTrace: lines.join('\n'),
    } as StackTrace;
  }

  /**
   * Parse an error from a stack trace
   * @param {string} lines an array of strings from a stack trace
   * @return {StackError} a StackError object containing the error
   * type and message
   * @private
   */
  public static parseError(lines: string): StackError {
    const regex: RegExp = /([a-zA-Z\[\]]+)[\s\[\]a-zA-Z_]*:?(.*)/m;
    const result = regex.exec(lines);
    if (result) {
      let errorMessage = result[2].toString().trim();
      if (errorMessage.includes('Received type string')) {
        const split = errorMessage.split('Received type string');
        errorMessage = split[0] + 'Received type string';
      }
      return {
        errorType: result[1].toString().trim(),
        errorMessage
      } as StackError;
    }
    throw new Error('Error could not be read from stack trace');
  }

  /**
   * Parse each line within a stack trace
   * @param {string[]} lines the lines from the stack trace
   * @return {StackFrame[]} information parsed from the stack trace
   * @private
   */
  public static parseTrace(lines: string[], verbose: boolean): StackFrame[] {
    const moduleRegex: RegExp =
      /at\s(.+)\s\(([\d\w~\/\\\-<>._?@+]+):(\d+):?(\d+)?\)/m;
    const fileRegex: RegExp =
      /at\s([:a-zA-Z~\/\\\-<>._@+]+)(?::(\d+)?:?(\d+)?$|[\s()<>\\\w]+$)/m;
    const internalsRegex: RegExp =
      /at\s(?:new)?\s?([:a-zA-Z~\/\\\-<>._@+]+)\s\(([A-Za-z]+:[A-Za-z/_]+):(\d+):(\d+)\)/m;
    const frames: StackFrame[] = [];
    for (const line of lines.filter((l) => l.length > 0)) {
      let dependency = undefined;
      let result = moduleRegex.exec(line);
      const isEmbeddedOrAnonymous: boolean = line.includes('<anonymous>') ||
        line.includes('<embedded>');
      if (result) {
        let file = result[2].toString().replace(/\\/g, '/');
        if (file.includes('node_modules')) {
          const fileSplit = file.split('node_modules/');
          file = fileSplit[fileSplit.length - 1];
          dependency = file.split('/')[1];
        }
        frames.push({
          method: result[1].toString(),
          lineNumber: parseInt(result[3].toString()),
          charNumber: parseInt(result[4]?.toString()),
          isModule: true,
          isEmbeddedOrAnonymous,
          file,
          dependency
        });
      } else if (result = fileRegex.exec(line)) {
        if (result[2]) {
          let file = result[1].toString().replace(/\\/g, '/');
          if (file.includes('node_modules')) {
            const fileSplit = file.split('node_modules/');
            file = fileSplit[fileSplit.length - 1];
            dependency = file.split('/')[1];
          }
          frames.push({
            file,
            lineNumber: parseInt(result[2].toString()),
            charNumber: parseInt(result[3].toString()),
            isModule: false,
            isEmbeddedOrAnonymous,
          });
        } else {
          let file = result[1].toString().replace(/\\/g, '/');
          if (file.includes('node_modules')) {
            const fileSplit = file.split('node_modules/');
            file = fileSplit[fileSplit.length - 1];
            dependency = file.split('/')[1];
          }
          frames.push({
            file,
            isModule: false,
            isEmbeddedOrAnonymous,
          });
        }
      } else {
        result = internalsRegex.exec(line);
        if (result) {
          let file = result[2].toString().replace(/\\/g, '/');
          if (file.includes('node_modules')) {
            const fileSplit = file.split('node_modules/');
            file = fileSplit[fileSplit.length - 1];
            dependency = file.split('/')[1];
          }
          frames.push({
            method: result[1].toString(),
            file,
            lineNumber: parseInt(result[3].toString()),
            charNumber: parseInt(result[4].toString()),
            isModule: true,
            isEmbeddedOrAnonymous,
            internal: true,
            dependency
          });
        } else if (verbose) {
          console.error(`Stack frame not parsed: ${line}`);
        }
      }
    }
    return frames;
  }
}

