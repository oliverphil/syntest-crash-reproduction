import {ObjectiveFunction, Encoding, Node, NodeType, SearchSubject} from '@syntest/core';
import {BranchDistance} from './BranchDistance';
import {StackError, StackTrace} from "../crash-reproduction/types/stackTraceTypes";

export class EvoCrashTraceDistance<T extends Encoding> implements ObjectiveFunction<T> {
    private _stackTrace: StackTrace;
    private _subject: SearchSubject<T>;

    constructor(
        subject: SearchSubject<T>,
        stackTrace: StackTrace
    ) {
        this._subject = subject;
        this._stackTrace = stackTrace;
    }

    getIdentifier(): string {
        return "EvoCrashTraceDistance";
    }
    getSubject(): SearchSubject<T> {
        return this._subject;
    }

    calculateDistance(encoding: T): number {
        const executionResult = encoding.getExecutionResult();

        if (executionResult === undefined) {
            return Number.MAX_VALUE;
        }

        let statementCovered = 1;
        let exceptionCovered = 1;
        let stackTraceSimilarity = 1;

        let frame = this._stackTrace.trace[0];

        const traces = executionResult
            .getTraces()
            .filter(trace => {
                return trace.line === frame.lineNumber &&
                    trace.path.includes(frame.file) &&
                    trace.hits > 0
            });

        if (traces.length >= 1) {
            statementCovered = 0;
        }

        const checkException = (exception, expectedException: StackError) => {
            return expectedException.errorMessage.includes(exception);
        }

        if (executionResult.hasExceptions()) {
            const exceptions = executionResult.getExceptions();
            if (Array.isArray(exceptions)) {
                exceptions.forEach(e => {
                    if (checkException(e, this._stackTrace.error)) {
                        exceptionCovered = 0;
                    }
                });
            } else {
                if (checkException(exceptions, this._stackTrace.error)) {
                    exceptionCovered = 0;
                }
            }
        }

        return 3 * statementCovered + 2 * exceptionCovered + stackTraceSimilarity;
    }
}
