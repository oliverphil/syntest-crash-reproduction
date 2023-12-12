import {
    ApproachLevelCalculator,
    BranchDistanceCalculator,
    ControlFlowPath, ObjectiveFunction,
    PathObjectiveFunction
} from "@syntest/search";
import {JavaScriptTestCase} from "../../testcase/JavaScriptTestCase";
import {SearchSubject} from "@syntest/search";
import {ExperimentConfig, StackFrame, StackTrace, StackTraceProcessor} from "@syntest/crash-reproduction-setup";
import {JavaScriptExecutionResult} from "../JavaScriptExecutionResult";
import {ControlFlowProgram} from "@syntest/cfg";
import {
    rightExceptionRaised,
    rightExceptionRaisedOnRightLine,
    wrongExceptionInNeighbouringFunction
} from "../utils/StackTraceUtils";
import { ControlFlowBasedObjectiveFunction } from "@syntest/search/dist/lib/objective/ControlFlowBasedObjectiveFunction";


class CrashFitnessFunction1 extends PathObjectiveFunction<JavaScriptTestCase> {
    protected stackTrace: StackTrace;
    protected function_: () => number;
    protected arguments: [];
    protected N: number | undefined;

    constructor(
        id: string,
        controlFlowProgram: ControlFlowProgram,
        approachLevelCalculator: ApproachLevelCalculator,
        branchDistanceCalculator: BranchDistanceCalculator,
        stackTrace: StackTrace,
        function_,
        arguments_: [],
        N: number | undefined
    ) {
        super(
            id,
            controlFlowProgram,
            undefined,
            approachLevelCalculator,
            branchDistanceCalculator);
        this.stackTrace = stackTrace;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.function_ = function_;
        this.arguments = arguments_;
        this.N = N;
    }

    /**
     * Right exception raised
     * @param encoding
     */
    override calculateDistance(encoding: JavaScriptTestCase): number {
        const arguments_ = [];
        for (const argument of this.arguments) {
            switch (argument) {
                case 'JavaScriptExecutionResult': {
                    arguments_.push(encoding.getExecutionResult());
                    break;
                }
                case 'StackTrace': {
                    arguments_.push(this.stackTrace);
                    break;
                }
                case 'StackError': {
                    arguments_.push(this.stackTrace.error);
                    break;
                }
                case 'number': {
                    arguments_.push(this.N);
                    break;
                }
            }
        }
        // @ts-ignore
        return this.function_(...arguments_);
        // return wrongExceptionInNeighbouringFunction(<JavaScriptExecutionResult>encoding.getExecutionResult(), this.stackTrace);
    }

    // override getIdentifier(): string {
    //     return super._id;
    //     // return `${this.stackFrame.file}:${this.stackFrame.lineNumber}`;
    // }
}

export default CrashFitnessFunction1;
