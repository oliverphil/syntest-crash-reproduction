import {
    ApproachLevelCalculator,
    BranchDistanceCalculator,
    ControlFlowPath,
    PathObjectiveFunction
} from "@syntest/search";
import {JavaScriptTestCase} from "../../testcase/JavaScriptTestCase";
import {SearchSubject} from "@syntest/search";
import {StackFrame, StackTraceProcessor} from "@syntest/crash-reproduction-setup";
import {JavaScriptExecutionResult} from "../JavaScriptExecutionResult";
import {ControlFlowProgram} from "@syntest/cfg/dist/lib/ControlFlowProgram";


class StackFrameObjectiveFunction extends PathObjectiveFunction<JavaScriptTestCase> {
    protected stackFrame: StackFrame;

    constructor(
        id: string,
        controlFlowProgram: ControlFlowProgram,
        controlFlowPath: ControlFlowPath,
        approachLevelCalculator: ApproachLevelCalculator,
        branchDistanceCalculator: BranchDistanceCalculator,
        stackFrame: StackFrame
    ) {
        super(id, controlFlowProgram, controlFlowPath, approachLevelCalculator, branchDistanceCalculator);
        this.stackFrame = stackFrame;
    }

    override calculateDistance(encoding: JavaScriptTestCase): number {
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

    // override getIdentifier(): string {
    //     return super._id;
    //     // return `${this.stackFrame.file}:${this.stackFrame.lineNumber}`;
    // }
}

export default StackFrameObjectiveFunction;
