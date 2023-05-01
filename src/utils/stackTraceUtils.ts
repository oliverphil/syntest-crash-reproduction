import { ExecutionResult } from "@syntest/core";
import {StackError, StackFrame, StackTrace} from "../crash-reproduction/types/stackTraceTypes";
import StackTraceProcessor from "../crash-reproduction/setup/preprocessing/stackTraceProcessor";

export function checkExceptionsMatch(executionResult: ExecutionResult, expectedStackException: StackError): number {
    if (executionResult.hasExceptions()) {
        const exceptions = executionResult.getExceptions();
        if (Array.isArray(exceptions)) {
            exceptions.forEach(e => {
                if (checkExceptionsMessageMatch(expectedStackException, e)) {
                    return 0;
                }
            });
        } else {
            if (checkExceptionsMessageMatch(expectedStackException, exceptions)) {
                return 0;
            }
        }
    }
    return 1;
}

export function rightExceptionRaised(executionResult: ExecutionResult, expectedStackException: StackError): number {
    return checkExceptionsMatch(executionResult, expectedStackException);
}

export function rightExceptionRaisedOnRightLine(executionResult: ExecutionResult, stackTrace: StackTrace): number {
    const exceptionsMatch = checkExceptionsMatch(executionResult, stackTrace.error);
    const exceptionLineCovered = checkExceptionLineCovered(executionResult, stackTrace);
    return normalise(exceptionsMatch + exceptionLineCovered);
}

export function wrongExceptionRaisedOnRightLine(executionResult: ExecutionResult, stackTrace: StackTrace): number {
    const exceptionsMatch = 1 - checkExceptionsMatch(executionResult, stackTrace.error);
    const exceptionLineCovered = checkExceptionLineCovered(executionResult, stackTrace);
    return normalise(exceptionsMatch + exceptionLineCovered);
}

export function rightExceptionRaisedInRightFunction(executionResult: ExecutionResult, stackTrace: StackTrace): number {
    const exceptionsMatch = checkExceptionsMatch(executionResult, stackTrace.error);
    const functionMatch = checkFunctionsMatch(executionResult, stackTrace);
    return normalise(exceptionsMatch + functionMatch);
}

export function rightExceptionRaisedInWrongFunction(executionResult: ExecutionResult, stackTrace: StackTrace): number {
    const exceptionsMatch = checkExceptionsMatch(executionResult, stackTrace.error);
    const functionMatch = 1 - checkFunctionsMatch(executionResult, stackTrace);
    return normalise(exceptionsMatch + functionMatch);
}

export function reachedLineOfExceptionWithoutCrashing(executionResult: ExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult.hasExceptions()) {
        return checkExceptionLineCovered(executionResult, stackTrace);
    }
    return 1;
}

export function wrongExceptionPartialStackTraceMatch(executionResult: ExecutionResult, stackTrace: StackTrace): number {
    if (executionResult.hasExceptions()) {
        const exceptionsMatch = 1 - checkExceptionsMatch(executionResult, stackTrace.error);
        const stackTraceSimilarity = checkStackTraceSimilarity(executionResult, stackTrace);
        return normalise(exceptionsMatch + stackTraceSimilarity);
    }
    return 1;
}

export function someCallHierarchyWithoutCrash(executionResult: ExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult.hasExceptions()) {
        const traces = executionResult.getTraces();
        traces.find(trace => {
           const path = trace.path;
        });
    }
    return 1;
}

export function reachedLineOfStackTraceEntry(executionResult: ExecutionResult, stackTrace: StackTrace): number {
    let distance = 1;

    const frame = stackTrace.trace[stackTrace.trace.length - 1];

    const traces = executionResult
        .getTraces()
        .filter(trace => {
            return trace.line === frame.lineNumber &&
                trace.path.includes(frame.file) &&
                trace.hits > 0
        });

    if (traces.length >= 1) {
        distance = 0;
    }

    return distance;
}

function checkFunctionsMatch(executionResult: ExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult.hasExceptions()) return 1;
    const exceptions = executionResult.getExceptions();
    const actualStackTrace = StackTraceProcessor.process(exceptions.stack);
    const expectedFunction = stackTrace.trace[0].method;
    if (actualStackTrace.trace[0].method === expectedFunction) {
        return 0;
    }
    return 1;
}

function checkExceptionsMessageMatch(expectedException: StackError, actualException: Error) {
    return expectedException.errorMessage.includes(actualException.message);
}

export function checkExceptionLineCovered(executionResult: ExecutionResult, stackTrace: StackTrace): number {
    let distance = 1;

    const frame = stackTrace.trace[0];

    const traces = executionResult
        .getTraces()
        .filter(trace => {
            return trace.line === frame.lineNumber ||
                (trace.path.includes(frame.file) &&
                trace.hits > 0)
        });

    if (traces.length >= 1) {
        distance = 0;
    }

    return distance;
}

export function checkStackTraceSimilarity(executionResult: ExecutionResult, expectedStackTrace: StackTrace): number {
    if (!executionResult.hasExceptions()) return 1;
    const exceptions = executionResult.getExceptions();
    const actualStackTrace = StackTraceProcessor.process(exceptions.stack);
    const trimmedActualStackTrace = actualStackTrace.trace.filter(t => !t.file.includes('tempTest.spec.js'));
    const trimmedExpectedStackTrace = expectedStackTrace.trace.filter(t => !t.file.includes('tempTest.spec.js'));
    return stackTraceDistance(trimmedActualStackTrace, trimmedExpectedStackTrace);
}

function stackTraceDistance(resultTrace: StackFrame[], expectedTrace: StackFrame[]): number {
    let stackDistance = 0;
    let position = -1;
    for (let i = 0; i < expectedTrace.length; i++) {
        const targetElement = expectedTrace[i];
        let minDistance = 1;
        for (let j = position + 1; j < resultTrace.length; j++) {
            let dist = 1;
            const resultElement = resultTrace[j];
            dist = stackElementsDistance(resultElement, targetElement);
            // dist = stackElementsDistanceNoLineNumbers(resultElement, targetElement);
            if (dist < minDistance) {
                minDistance = dist;
                position = j;
            }
        }
        stackDistance += minDistance;
    }

    return normalise(stackDistance);
}

/**
 * Find the distance between two stack elements
 * @param {StackFrame} resultElement the element from the stack from the execution
 * @param {StackFrame} targetElement the expected stack frame
 * @return {number} the distance between the elements
 * @private
 */
function stackElementsDistance(resultElement: StackFrame, targetElement: StackFrame): number {
    let elementDistance = 0;
    if (!resultElement.file.includes(targetElement.file)) {
        elementDistance += 3;
    } else {
        if (resultElement.method !== targetElement.method) {
            elementDistance += 2;
        } else {
            if (!resultElement.lineNumber && !targetElement.lineNumber ||
                resultElement.file.includes('tempTest.spec.js')
            ) {
                elementDistance = 0.0;
            } else {
                elementDistance = Math.abs((resultElement.lineNumber || Number.MAX_SAFE_INTEGER) -
                    (targetElement.lineNumber || Number.MAX_SAFE_INTEGER));
            }
        }
    }
    return normalise(elementDistance);
}

export function stackElementsDistanceNoLineNumbers(resultElement: StackFrame, targetElement: StackFrame): number {
    let elementDistance = 0;
    if (!resultElement.file.includes(targetElement.file)) {
        elementDistance += 3;
    } else {
        if (resultElement.method !== targetElement.method) {
            elementDistance += 2;
        } else {
            elementDistance = 0.0;
        }
    }
    return normalise(elementDistance);
}

/**
 * Normalise a number
 * @param {number} num the number to normalise
 * @return {number} the normalised number
 * @private
 */
function normalise(num: number): number {
    if (!Number.isFinite(num)) {
        return 1.0;
    }
    return num / (1.0 + num);
}

export function checkTraceLinesCovered(executionResult: ExecutionResult, stackTrace: StackTrace): number {
    const traceLength = stackTrace.trace.length;
    let distance = 1;

    for (const frame of stackTrace.trace) {
        const traces = executionResult
            .getTraces()
            .filter(trace => {
                return trace.line === frame.lineNumber &&
                    trace.path.includes(frame.file) &&
                    trace.hits > 0
            });

        if (traces.length >= 1) {
            distance -= 1 / traceLength;
        }
    }

    return distance;
}
