import {ObjectiveFunction} from "@syntest/search/dist/lib/objective/ObjectiveFunction";
import {JavaScriptTestCase} from "../../testcase/JavaScriptTestCase";
import {SearchSubject} from "@syntest/search/dist/lib/SearchSubject";
import {StackTrace, StackTraceProcessor} from "@syntest/crash-reproduction-setup";


class StackErrorObjectiveFunction implements ObjectiveFunction<JavaScriptTestCase> {
    protected subject: SearchSubject<JavaScriptTestCase>;
    protected stackTrace: StackTrace;

    constructor(
        subject: SearchSubject<JavaScriptTestCase>,
        stackTrace: StackTrace
    ) {
        this.subject = subject;
        this.stackTrace = stackTrace;
    }

    calculateDistance(encoding: JavaScriptTestCase): number {
        let distance = 1;
        if (encoding.getExecutionResult()?.hasExceptions()) {
            const actualExceptionString = encoding.getExecutionResult().getExceptions();
            if (actualExceptionString === this.stackTrace.error.errorMessage) {
                // distance -= 0.8;
                distance = 0;
                console.log("Exception hit")
            }
            // if (actualException.error.errorType === this.stackTrace.error.errorType) {
            //     distance -= 0.2;
            // }
        }

        return distance;
    }

    getIdentifier(): string {
        return `Stack Objective: ${this.stackTrace.error.errorMessage}`;
    }

    getSubject(): SearchSubject<JavaScriptTestCase> {
        return this.subject;
    }

}

export default StackErrorObjectiveFunction;