import {
    ApproachLevelCalculator,
    BranchDistanceCalculator,
    ControlFlowPath, ObjectiveFunction,
    PathObjectiveFunction
} from "@syntest/search";
import {JavaScriptTestCase} from "../../testcase/JavaScriptTestCase";
import {SearchSubject} from "@syntest/search";
import {StackFrame, StackTrace, StackTraceProcessor} from "@syntest/crash-reproduction-setup";
import {JavaScriptExecutionResult} from "../JavaScriptExecutionResult";
import {ControlFlowProgram} from "@syntest/cfg";
import {
    rightExceptionRaised,
    rightExceptionRaisedOnRightLine,
    wrongExceptionInNeighbouringFunction
} from "../utils/StackTraceUtils";


class CrashFitnessFunction1 extends ObjectiveFunction<JavaScriptTestCase> {
    protected stackTrace: StackTrace;

    constructor(
        id: string,
        stackTrace: StackTrace
    ) {
        super(id);
        this.stackTrace = stackTrace;
    }

    /**
     * Right exception raised
     * @param encoding
     */
    override calculateDistance(encoding: JavaScriptTestCase): number {
        return wrongExceptionInNeighbouringFunction(<JavaScriptExecutionResult>encoding.getExecutionResult(), this.stackTrace);
    }

    // override getIdentifier(): string {
    //     return super._id;
    //     // return `${this.stackFrame.file}:${this.stackFrame.lineNumber}`;
    // }
}

export default CrashFitnessFunction1;
