import {ObjectiveFunction} from "@syntest/search/dist/lib/objective/ObjectiveFunction";
import {JavaScriptTestCase} from "../../testcase/JavaScriptTestCase";
import {SearchSubject} from "@syntest/search/dist/lib/SearchSubject";
import {StackFrame, StackTraceProcessor} from "@syntest/crash-reproduction-setup";
import {JavaScriptExecutionResult} from "../JavaScriptExecutionResult";


class StackFrameObjectiveFunction extends ObjectiveFunction<JavaScriptTestCase> {
    protected stackFrame: StackFrame;

    constructor(
        id: string,
        subject: SearchSubject<JavaScriptTestCase>,
        stackFrame: StackFrame
    ) {
        super(id);
        this.stackFrame = stackFrame;
    }

    calculateDistance(encoding: JavaScriptTestCase): number {
        const trace = encoding.getExecutionResult()?.getTraces()?.find(trace => {
            return trace.path.includes(this.stackFrame.file)
                && trace.location.start.line === this.stackFrame.lineNumber;
        });
        let distance = 1;
        if (trace && trace.hits > 0) {
            // console.log("line hit: ", trace.path)
            distance = 0;
        }
        if (encoding.getExecutionResult()?.getError()) {
            const stackTrace = StackTraceProcessor.parseTrace(encoding.getExecutionResult().getError().stack.split('\n'), false);
            // console.log(stackTrace.map(frame => frame.file + frame.lineNumber).join('\n'));
            for (const frame of stackTrace) {
                if (frame.file === this.stackFrame.file && frame.lineNumber === this.stackFrame.lineNumber) {
                    // console.log("Line hit: ", frame.file, frame.lineNumber);
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

    override getIdentifier(): string {
        return `${this.stackFrame.file}:${this.stackFrame.lineNumber}`;
    }
}

export default StackFrameObjectiveFunction;
