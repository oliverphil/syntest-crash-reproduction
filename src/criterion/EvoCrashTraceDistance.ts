import {ObjectiveFunction, Encoding, Node, NodeType, SearchSubject} from '@syntest/core';
import {BranchDistance} from './BranchDistance';
import {StackError, StackTrace} from "../crash-reproduction/types/stackTraceTypes";
import * as StackTraceUtils from "../utils/stackTraceUtils";

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

        // const statementCovered = StackTraceUtils.checkExceptionLineCovered(executionResult, this._stackTrace);
        // const exceptionCovered = StackTraceUtils.checkExceptionsMatch(executionResult, this._stackTrace.error);
        // const stackTraceSimilarity = StackTraceUtils.checkStackTraceSimilarity(executionResult, this._stackTrace);

        // return 3 * statementCovered + 2 * exceptionCovered + stackTraceSimilarity;
        // return StackTraceUtils.reachedLineOfStackTraceEntry(executionResult, this._stackTrace);
        return StackTraceUtils.checkExceptionsMatch(executionResult, this._stackTrace.error) + StackTraceUtils.checkExceptionLineCovered(executionResult, this._stackTrace);
    }
}
