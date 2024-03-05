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
import {JavaScriptExecutionResult} from "../JavaScriptExecutionResult";
import {JavaScriptTestCase} from "../../testcase/JavaScriptTestCase";
import {ApproachLevelCalculator, BranchDistanceCalculator, ObjectiveFunction} from "@syntest/search";
import CrashFitnessFunction1 from "../objective/CrashFitnessFunction1";
import { ControlFlowProgram } from "@syntest/cfg";

export function createObjectives(
    functions,
    stackTrace: StackTrace,
    controlFlowProgram: ControlFlowProgram,
    approachLevelCalculator: ApproachLevelCalculator,
    branchDistanceCalculator: BranchDistanceCalculator
): ObjectiveFunction<JavaScriptTestCase>[] {
    const objectives: ObjectiveFunction<JavaScriptTestCase>[] = [];
    for (const function_ of functions) {
        const name = function_.functionName;
        const functionHandle = funcs[name];
        objectives.push(new CrashFitnessFunction1(
            `stack-${name}`,
            controlFlowProgram,
            approachLevelCalculator,
            branchDistanceCalculator,
            stackTrace,
            functionHandle,
            function_.arguments,
            function_.N
        ));
    }
    return objectives;
}

export function createObjective(
    function_,
    stackTrace: StackTrace,
    controlFlowProgram: ControlFlowProgram,
    approachLevelCalculator: ApproachLevelCalculator,
    branchDistanceCalculator: BranchDistanceCalculator
): ObjectiveFunction<JavaScriptTestCase> {
    const name = function_.functionName;
    const functionHandle = funcs[name];
    return new CrashFitnessFunction1(
        `stack-${name}`,
        controlFlowProgram,
        approachLevelCalculator,
        branchDistanceCalculator,
        stackTrace,
        functionHandle,
        function_.arguments,
        function_.N
    );
}

var funcs = {
    checkExceptionsMatch: (a, b) => checkExceptionsMatch(a, b),
    evoCrash: (a, b) => evoCrash(a, b),
    rightExceptionRaised: (a, b) => rightExceptionRaised(a, b),
    rightExceptionRaisedOnRightLine: (a, b) => rightExceptionRaisedOnRightLine(a, b),
    wrongExceptionRaisedOnRightLine: (a, b) => wrongExceptionRaisedOnRightLine(a, b),
    rightExceptionRaisedInRightFunction: (a, b) => rightExceptionRaisedInRightFunction(a, b),
    wrongExceptionRaisedInRightFunction: (a, b) => wrongExceptionRaisedInRightFunction(a, b),
    wrongExceptionInNeighbouringFunction: (a, b) => wrongExceptionInNeighbouringFunction(a, b),
    rightExceptionRaisedInWrongFunction: (a, b) => rightExceptionRaisedInWrongFunction(a, b),
    rightExceptionInNeighbouringFunction: (a, b) => rightExceptionInNeighbouringFunction(a, b),
    reachedLineOfExceptionWithoutCrashing: (a, b) => reachedLineOfExceptionWithoutCrashing(a, b),
    wrongExceptionPartialStackTraceMatch: (a, b) => wrongExceptionPartialStackTraceMatch(a, b),
    someCallHierarchyWithoutCrash: (a, b) => someCallHierarchyWithoutCrash(a, b),
    reachedLineOfStackTraceEntry: (a, b) => reachedLineOfStackTraceEntry(a, b),
    executedFunctionsNoCrash: (a, b) => executedFunctionsNoCrash(a, b),
    stackLinesMatchFuzzy: (a, b) => stackLinesMatchFuzzy(a, b),
    executeLinesNearStackTrace: (a, b) => executeLinesNearStackTrace(a, b),
    enteredBranchInStackTrace: (a, b) => enteredBranchInStackTrace(a, b),
    enteredCloseBranch: (a, b) => enteredCloseBranch(a, b),
    calledNFunctionsFromStackTrace: (a, b, c) => calledNFunctionsFromStackTrace(a, b, c),
    executeNLinesPriorWithinFunction: (a, b, c) => executeNLinesPriorWithinFunction(a, b, c),
    stackMatchWrongCrash: (a, b) => stackMatchWrongCrash(a, b),
    checkExceptionLineCovered: (a, b) => checkExceptionLineCovered(a, b),
    beacon: (a, b) => beacon(a, b),
    checkStackFramesCoveredAfterSearch: (a, b) => checkStackFramesCoveredAfterSearch(a, b)
}

export function checkExceptionsMatch(executionResult: JavaScriptExecutionResult, expectedStackException: StackError): number {
    if (executionResult && executionResult.getError()) {
        const exceptions = executionResult.getError().message;
        if (checkExceptionsMessageMatch(expectedStackException, exceptions)) {
            return 0;
        }
    }

    return 1;
}

export function checkStackFramesCoveredAfterSearch(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    const expectedTrace = stackTrace.trace;
    if (!executionResult.getStackTrace()) return 1;
    const resultTrace = executionResult.getStackTrace().trace;
    let framesCovered = 0;
    let position = -1;
    for (const targetElement of expectedTrace) {
        let minDistance = 1;
        for (let index = position + 1; index < resultTrace.length; index++) {
            let distance = 1;
            const resultElement = resultTrace[index];
            distance = stackElementsDistance(resultElement, targetElement);
            // dist = stackElementsDistanceNoLineNumbers(resultElement, targetElement);
            if (distance < minDistance) {
                minDistance = distance;
                position = index;
            }
        }
        if (minDistance === 0) {
            framesCovered++;
        }
    }
    return framesCovered;
}

export function evoCrash(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    const lineReached = checkExceptionLineCovered(executionResult, stackTrace);
    const exceptionCovered = checkExceptionsMatch(executionResult, stackTrace.error);
    const stackDistance = executionResult.hasError() ?
        stackTraceDistance(executionResult.getStackTrace().trace, stackTrace.trace) :
        1;
    return (3 * lineReached) + (2 * exceptionCovered) + stackDistance;
}

export function beacon(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 5;
    const exceptionTypeMatches = executionResult.getError().name === stackTrace.error.errorType ? 0 : 1;
    const exceptionMessageMatches = checkExceptionsMatch(executionResult, stackTrace.error);
    const functionInStackTrace = checkExceptionLineCovered(executionResult, stackTrace);
    return (2 * exceptionTypeMatches) + exceptionMessageMatches + (2 * functionInStackTrace);
}

export function rightExceptionRaised(executionResult: JavaScriptExecutionResult, expectedStackException: StackError): number {
    if (!executionResult) return 1;
    return checkExceptionsMatch(executionResult, expectedStackException);
}

export function rightExceptionRaisedOnRightLine(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    const exceptionsMatch = checkExceptionsMatch(executionResult, stackTrace.error);
    const exceptionLineCovered = checkExceptionLineCovered(executionResult, stackTrace);
    return normalise(exceptionsMatch + exceptionLineCovered);
}

export function wrongExceptionRaisedOnRightLine(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    const exceptionsMatch = 1 - checkExceptionsMatch(executionResult, stackTrace.error);
    const exceptionLineCovered = checkExceptionLineCovered(executionResult, stackTrace);
    return normalise(exceptionsMatch + exceptionLineCovered);
}

export function rightExceptionRaisedInRightFunction(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    const exceptionsMatch = checkExceptionsMatch(executionResult, stackTrace.error);
    const functionMatch = checkFunctionsMatch(executionResult, stackTrace);
    return normalise(exceptionsMatch + functionMatch);
}

export function wrongExceptionRaisedInRightFunction(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    const exceptionsMatch = 1 - checkExceptionsMatch(executionResult, stackTrace.error);
    const functionsMatch = checkFunctionsMatch(executionResult, stackTrace);
    return normalise(exceptionsMatch + functionsMatch);
}

export function wrongExceptionInNeighbouringFunction(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    const exceptionsMatch = 1 - checkExceptionsMatch(executionResult, stackTrace.error);
    const neighbouringFunction = checkNeighbouringFunction(executionResult, stackTrace);
    return normalise(exceptionsMatch + neighbouringFunction);
}

export function rightExceptionInNeighbouringFunction(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    const exceptionsMatch = checkExceptionsMatch(executionResult, stackTrace.error);
    const neighbouringFunction = checkNeighbouringFunction(executionResult, stackTrace);
    return normalise(exceptionsMatch + neighbouringFunction);
}

export function rightExceptionRaisedInWrongFunction(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    const exceptionsMatch = checkExceptionsMatch(executionResult, stackTrace.error);
    const functionMatch = 1 - checkFunctionsMatch(executionResult, stackTrace);
    return normalise(exceptionsMatch + functionMatch);
}

export function reachedLineOfExceptionWithoutCrashing(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    if (!executionResult.getError()) {
        return checkExceptionLineCovered(executionResult, stackTrace);
    }
    return 1;
}


export function wrongExceptionPartialStackTraceMatch(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    if (executionResult.getError()) {
        const exceptionsMatch = 1 - checkExceptionsMatch(executionResult, stackTrace.error);
        const stackTraceSimilarity = checkStackTraceSimilarity(executionResult, stackTrace);
        return normalise(exceptionsMatch + stackTraceSimilarity);
    }
    return 1;
}

export function someCallHierarchyWithoutCrash(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    if (!executionResult.getError()) {
        const traces = executionResult.getTraces().filter(trace => {
            for (const frame of stackTrace.trace) {
                if (trace.location.start.line === frame?.lineNumber && trace.path.includes(frame?.file) && trace?.hits > 0) {
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
    if (!executionResult) return 1;
    let distance = 1;

    const frame = stackTrace.trace.filter(s => !s.file.includes('tempTest.spec.js')
        && !s.file.includes('node:internal'))[stackTrace.trace.length - 1];

    if (executionResult.getError()) {
        const actualStack = executionResult.getStackTrace();
        const actualFrame = actualStack.trace
            .filter(s => !s.file.includes('tempTest.spec.js')
                && !s.file.includes('node:internal')
            )[actualStack.trace.length - 1];
        if (actualFrame?.file === frame?.file && actualFrame.lineNumber === frame.lineNumber) {
            return 0;
        }
    }

    const traces = executionResult
        .getTraces()
        .filter(trace => {
            return trace.location.start.line === frame?.lineNumber && trace.path.includes(frame?.file) && trace?.hits > 0
        });

    if (traces.length >= 1) {
        distance = 0;
    }

    return distance;
}

export function executedFunctionsNoCrash(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    if (executionResult.hasError()) return 1;
    const numFrames = stackTrace.trace.length;
    let coveredFrames = 0;
    const traces = executionResult.getTraces();
    for (const frame of stackTrace.trace) {
        const trace = traces.find(trace => reverseIncludes(trace.path, frame.file)
            && trace.type === 'statement'
            && trace.location.start.line === frame.lineNumber);
        if (trace?.hits > 0) coveredFrames += 1;
    }
    return coveredFrames / numFrames;
}

export function stackLinesMatchFuzzy(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    const numFrames = stackTrace.trace.length;
    let coveredFrames = 0;
    const traces = executionResult.getTraces();
    const tolerance = traces.filter(trace => trace.type === 'statement').length / 10;
    for (const frame of stackTrace.trace) {
        const trace = traces.find(trace => reverseIncludes(trace.path, frame.file)
            && trace.type === 'statement'
            && trace.location.start.line >= frame.lineNumber - tolerance
            && trace.location.start.line <= frame.lineNumber + tolerance);
        if (trace?.hits > 0) coveredFrames += 1;
    }
    return coveredFrames / numFrames;
}

export function executeLinesNearStackTrace(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    let coveredFrames = 0;
    const traces = executionResult.getTraces();
    const tolerance = traces.filter(trace => trace.type === 'statement').length / 10;
    for (const frame of stackTrace.trace) {
        const trace = traces.find(trace => reverseIncludes(trace.path, frame.file)
            && trace.type === 'statement'
            && trace.location.start.line >= frame.lineNumber - tolerance
            && trace.location.start.line <= frame.lineNumber + tolerance);
        if (trace?.hits > 0) coveredFrames += 1;
    }
    return coveredFrames > 0 ? 1 : 0;
}

export function enteredBranchInStackTrace(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    const traces = executionResult.getTraces();
    const branches = traces.filter(trace => trace.type === 'branch');
    for (const frame of stackTrace.trace) {
        const branch = branches.find(branch => reverseIncludes(frame.file, branch.path)
            && branch.location.start.line <= frame.lineNumber && branch.location.end.line >= frame.lineNumber);
        if (branch && branch.hits > 0) return 0;
    }
    return 1;
}

export function enteredCloseBranch(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    const traces = executionResult.getTraces();
    const branches = traces.filter(trace => trace.type === 'branch');
    for (const frame of stackTrace.trace) {
        const branch = branches.find(branch => reverseIncludes(frame.file, branch.path)
            && branch.location.start.line <= frame.lineNumber && branch.location.end.line >= frame.lineNumber);
        if (!branch) continue;
        const index = branches.indexOf(branch);
        const startIndex = index - 2 > 0 ? index - 2 : 0;
        const endIndex = index + 2 < branches.length ? index + 2: branches.length - 1;
        if (branches.slice(startIndex, endIndex).map(t => t.hits).reduce((a, b) => a + b) > 0)
            return 0;
    }
    return 1;
}

export function calledNFunctionsFromStackTrace(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace, N: number): number {
    if (!executionResult) return 1;
    const traces = executionResult.getTraces();
    const functions = traces.filter(trace => trace.type === 'function');
    let numberFuncsHit = 0;
    for (const frame of stackTrace.trace) {
        const function_ = functions.find(function_ => reverseIncludes(frame.file, function_.path)
            && function_.location.start.line <= frame.lineNumber && function_.location.end.line >= frame.lineNumber);
        if (!function_) continue;
        if (function_.hits > 0) numberFuncsHit += 1;
    }
    return numberFuncsHit >= N ? 0 : 1;
}

export function executeNLinesPriorWithinFunction(executionResult: JavaScriptExecutionResult, stackFrame: StackFrame, N: number): number {
    if (!executionResult) return 1;
    const traces = executionResult.getTraces();
    const functions = traces.filter(trace => trace.type === 'function'
        && reverseIncludes(trace.path, stackFrame?.file));
    const function_ = functions.find(f => f.location.start.line <= stackFrame.lineNumber && f.location.end.line >= stackFrame.lineNumber);
    if (!function_) return 1;
    const statements = traces.filter(trace => trace.type === 'statement'
        && reverseIncludes(trace.path, stackFrame?.file)
        && trace.location.start.line >= function_.location.start.line
        && trace.location.start.line < stackFrame.lineNumber);
    let numberStatementsHit = 0;
    for (const statement of statements) {
        if (statement.hits > 0) numberStatementsHit += 1;
    }
    return numberStatementsHit >= N ? 0 : 1;
}

export function stackMatchWrongCrash(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    if (!executionResult.hasError()) return 1;
    const actualStack = executionResult.getStackTrace();
    const stackMatch = stackTraceDistance(actualStack.trace, stackTrace.trace);
    const error = checkExceptionsMatch(executionResult, stackTrace.error);
    return normalise(stackMatch + error);
}

function checkFunctionsMatch(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    if (!executionResult.getError()) return 1;
    const actualStackTrace = executionResult.getStackTrace();
    const expectedFunction = stackTrace.trace[0].method;
    if (reverseIncludes(actualStackTrace[0]?.method, expectedFunction)) {
        return 0;
    }
    return 1;
}

function checkNeighbouringFunction(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    if (!executionResult) return 1;
    const expectedFile = stackTrace.trace[0].file;
    const functionTraces = executionResult.getTraces().filter(trace => trace.type === 'function'
        && reverseIncludes(trace.path, expectedFile));
    if (functionTraces.length === 0) return 1;

    const expectedExceptionLine = stackTrace.trace[0].lineNumber;
    const expectedFunction = functionTraces.find(trace => trace.location.start.line <= expectedExceptionLine
        && trace.location.end.line >= expectedExceptionLine);
    if (!expectedFunction) return 1;

    const expectedFunctionIndex = functionTraces.indexOf(expectedFunction);
    const neighbouringFunctions = functionTraces.filter((trace, index) => index === expectedFunctionIndex + 1
        || index === expectedFunctionIndex - 1);
    return neighbouringFunctions.map(func => func.hits).reduce((a, b) => a + b) > 0 ? 0 : 1;
}

function checkExceptionsMessageMatch(expectedException: StackError, actualException: string) {
    return expectedException.errorMessage.includes(actualException);
}

export function checkExceptionLineCovered(executionResult: JavaScriptExecutionResult, stackTrace: StackTrace): number {
    let distance = 1;
    if (!executionResult) return distance;

    const frame = stackTrace.trace[0];

    if (executionResult.getError()) {
        const actualStack = executionResult.getStackTrace();
        if (reverseIncludes(actualStack.trace[0].file, frame.file) && actualStack.trace[0].lineNumber === frame.lineNumber) {
            return 0;
        }
    }

    const traces = executionResult
        .getTraces()
        .filter(trace => {
            return trace.location.start.line === frame.lineNumber && trace.path.includes(frame.file) && trace?.hits > 0
        });

    if (traces.length >= 1) {
        distance = 0;
    }

    return distance;
}

export function checkStackTraceSimilarity(executionResult: JavaScriptExecutionResult, expectedStackTrace: StackTrace): number {
    if (!executionResult) return 1;
    if (!executionResult.getError()) return 1;
    const actualStackTrace = executionResult.getStackTrace();
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
    if (!resultElement.file.includes(targetElement.file) && !targetElement.file.includes(resultElement.file)) {
        elementDistance += 3;
    } else {
        const resultMethod = resultElement.method.includes('[as ') ?
            resultElement.method.split('[as ')[1].replaceAll(']', '') : resultElement.method;
        const targetMethod = targetElement.method.includes('[as ') ?
            targetElement.method.split('[as ')[1].replaceAll(']', '') : targetElement.method;
        if (!resultMethod.includes(targetMethod) && !targetMethod.includes(resultMethod)) {
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
    if (!executionResult) return 1;
    const traceLength = stackTrace.trace.length;
    let distance = 1;

    for (const frame of stackTrace.trace) {
        const traces = executionResult
            .getTraces()
            .filter(trace => {
                return trace.location.start.line === frame.lineNumber &&
                    trace.path.includes(frame.file) &&
                    trace?.hits > 0
            });

        if (traces.length >= 1) {
            distance -= 1 / traceLength;
        }
    }

    return distance;
}

function reverseIncludes(s1: string, s2: string): boolean {
    if (!s1 || !s2) return false;
    return s1.includes(s2) || s2.includes(s1);
}
