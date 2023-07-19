import {ObjectiveFunction} from "@syntest/search/dist/lib/objective/ObjectiveFunction";
import {JavaScriptTestCase} from "../../testcase/JavaScriptTestCase";
import {SearchSubject} from "@syntest/search/dist/lib/SearchSubject";
import {StackFrame} from "@syntest/crash-reproduction-setup";
import {JavaScriptExecutionResult} from "../JavaScriptExecutionResult";


class StackFrameObjectiveFunction implements ObjectiveFunction<JavaScriptTestCase> {
    protected subject: SearchSubject<JavaScriptTestCase>;
    protected stackFrame: StackFrame;

    constructor(
        subject: SearchSubject<JavaScriptTestCase>,
        stackFrame: StackFrame
    ) {
        this.subject = subject;
        this.stackFrame = stackFrame;
    }

    calculateDistance(encoding: JavaScriptTestCase): number {
        const trace = encoding.getExecutionResult()?.getTraces()?.find(trace => {
            return trace.path.includes(this.stackFrame.file)
                && trace.line === this.stackFrame.lineNumber;
        });
        let distance = 1;
        if (trace && trace.hits > 0) {
            // console.log("line hit: ", trace.path)
            distance = 0;
        }
        if (encoding.getExecutionResult()?.hasExceptions()) {
            const stackTrace = (<JavaScriptExecutionResult>encoding.getExecutionResult()).getStackTrace();
            // console.log(stackTrace.map(frame => frame.file + frame.lineNumber))
            for (const frame of stackTrace) {
                if (frame.file === this.stackFrame.file && frame.lineNumber === this.stackFrame.lineNumber) {
                    // console.log("Line hit: ", frame);
                    // console.log(stackTrace);
                    return 0;
                }
                if (frame.file === this.stackFrame.file) {
                    distance = 0.5;
                }
            }
        }
        return distance;
    }

    getIdentifier(): string {
        return `${this.stackFrame.file}:${this.stackFrame.lineNumber}`;
    }

    getSubject(): SearchSubject<JavaScriptTestCase> {
        return this.subject;
    }

}

export default StackFrameObjectiveFunction;