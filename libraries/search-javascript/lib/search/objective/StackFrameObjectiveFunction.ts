import {ObjectiveFunction} from "@syntest/search/dist/lib/objective/ObjectiveFunction";
import {JavaScriptTestCase} from "../../testcase/JavaScriptTestCase";
import {SearchSubject} from "@syntest/search/dist/lib/SearchSubject";
import {StackFrame} from "@syntest/crash-reproduction-setup";


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
        const trace = encoding.getExecutionResult().getTraces().find(trace => {
            return trace.path.includes(this.stackFrame.file)
                && trace.line === this.stackFrame.lineNumber;
        });
        let distance = 1;
        if (trace && trace.hits > 0) {
            distance = 0;
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