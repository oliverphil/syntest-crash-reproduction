/*
 * Copyright 2020-2023 Delft University of Technology, Victoria University of Wellington and SynTest contributors
 *
 * This file is part of SynTest Framework - SynTest Crash Reproduction.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {StackError, StackFrame, StackTrace, StackTraceProcessor} from "@syntest/crash-reproduction-setup";
import {JavaScriptExecutionResult} from "@syntest/search-javascript";

export function checkExceptionsMatch(executionResult: JavaScriptExecutionResult, expectedStackException: StackError): number {
    if (executionResult.hasExceptions()) {
        const exceptions = executionResult.getExceptions();
        if (checkExceptionsMessageMatch(expectedStackException, exceptions)) {
            return 0;
        }
    }
    return 1;
}

export function rightExceptionRaised(executionResult: JavaScriptExecutionResult, expectedStackException: StackError): number {
    return checkExceptionsMatch(executionResult, expectedStackException);
}

export function rightExceptionRaisedOnRightLine(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    const exceptionsMatch = checkExceptionsMatch(executionResult, stackTrace.error);
    const exceptionLineCovered = checkExceptionLineCovered(executionResult, stackTrace);
    return (exceptionsMatch + exceptionLineCovered);
}

export function wrongExceptionRaisedOnRightLine(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    const exceptionsMatch = 1 - checkExceptionsMatch(executionResult, stackTrace.error);
    const exceptionLineCovered = checkExceptionLineCovered(executionResult, stackTrace);
    return (exceptionsMatch + exceptionLineCovered);
}

export function rightExceptionRaisedInRightFunction(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    const exceptionsMatch = checkExceptionsMatch(executionResult, stackTrace.error);
    const functionMatch = checkFunctionsMatch(executionResult, stackTrace);
    return (exceptionsMatch + functionMatch);
}

export function rightExceptionRaisedInWrongFunction(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    const exceptionsMatch = checkExceptionsMatch(executionResult, stackTrace.error);
    const functionMatch = 1 - checkFunctionsMatch(executionResult, stackTrace);
    return normalise(exceptionsMatch + functionMatch);
}

export function reachedLineOfExceptionWithoutCrashing(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult.hasExceptions()) {
        return checkExceptionLineCovered(executionResult, stackTrace);
    }
    return 1;
}

export function wrongExceptionPartialStackTraceMatch(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (executionResult.hasExceptions()) {
        const exceptionsMatch = 1 - checkExceptionsMatch(executionResult, stackTrace.error);
        const stackTraceSimilarity = checkStackTraceSimilarity(executionResult, stackTrace);
        return normalise(exceptionsMatch + stackTraceSimilarity);
    }
    return 1;
}

export function someCallHierarchyWithoutCrash(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult.hasExceptions()) {
        const traces = executionResult.getTraces().filter(trace => {
            for (const frame of stackTrace.trace) {
                if (trace.line === frame?.lineNumber && trace.path.includes(frame?.file) && trace.hits > 0) {
                    return true;
                }
            }
            return false;
        });
        return traces.length / stackTrace.trace.length;
    }
    return 1;
}

export function reachedLineOfStackTraceEntry(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    let distance = 1;

    const frame = stackTrace.trace.filter(s => !s.file.includes('tempTest.spec.js')
        && !s.file.includes('node:internal'))[stackTrace.trace.length - 1];

    if (executionResult.hasExceptions()) {
        const exception = executionResult.getExceptions();
        const actualStack = executionResult.getStackTrace();
        const actualFrame = actualStack
            .filter(s => !s.file.includes('tempTest.spec.js')
                && !s.file.includes('node:internal')
            )[actualStack.length - 1];
        if (actualFrame.file === frame.file && actualFrame.lineNumber === frame.lineNumber) {
            return 0;
        }
    }

    const traces = executionResult
        .getTraces()
        .filter(trace => {
            return trace.line === frame?.lineNumber && trace.path.includes(frame?.file) && trace.hits > 0
        });

    if (traces.length >= 1) {
        distance = 0;
    }

    return distance;
}

function checkFunctionsMatch(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult.hasExceptions()) return 1;
    const actualStackTrace = executionResult.getStackTrace();
    const expectedFunction = stackTrace.trace[0].method;
    if (actualStackTrace[0].method === expectedFunction) {
        return 0;
    }
    return 1;
}

function checkExceptionsMessageMatch(expectedException: StackError, actualException: string) {
    return expectedException.errorMessage.includes(actualException);
}

export function checkExceptionLineCovered(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    let distance = 1;

    const frame = stackTrace.trace[0];

    if (executionResult.hasExceptions()) {
        const exception = executionResult.getExceptions();
        const actualStack = executionResult.getStackTrace();
        if (actualStack[0].file === frame.file && actualStack[0].lineNumber === frame.lineNumber) {
            return 0;
        }
    }

    const traces = executionResult
        .getTraces()
        .filter(trace => {
            return trace.line === frame.lineNumber && trace.path.includes(frame.file) && trace.hits > 0
        });

    if (traces.length >= 1) {
        distance = 0;
    }

    return distance;
}

export function checkStackTraceSimilarity(executionResult: JavaScriptExecutionResult, expectedStackTrace: StackTrace): number {
    if (!executionResult.hasExceptions()) return 1;
    const exceptions = executionResult.getExceptions();
    const actualStackTrace = executionResult.getStackTrace();
    const trimmedActualStackTrace = actualStackTrace.filter(t => !t.file.includes('tempTest.spec.js'));
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

export function checkTraceLinesCovered(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
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
