import {ObjectiveFunction} from "@syntest/search/dist/lib/objective/ObjectiveFunction";
import {JavaScriptTestCase} from "../../testcase/JavaScriptTestCase";
import {SearchSubject} from "@syntest/search/dist/lib/SearchSubject";
import {StackTrace, StackTraceProcessor} from "@syntest/crash-reproduction-setup";
import Fuse from "fuse.js";


class StackErrorObjectiveFunction implements ObjectiveFunction<JavaScriptTestCase> {
    protected subject: SearchSubject<JavaScriptTestCase>;
    protected stackTrace: StackTrace;
    private fuzzySearch: Fuse<string>;

    constructor(
        subject: SearchSubject<JavaScriptTestCase>,
        stackTrace: StackTrace
    ) {
        this.subject = subject;
        this.stackTrace = stackTrace;
        this.fuzzySearch = new Fuse([stackTrace.error.errorMessage], {
            threshold: 0.2
        });
    }

    calculateDistance(encoding: JavaScriptTestCase): number {
        let distance = 1;
        if (encoding.getExecutionResult()?.hasExceptions()) {
            let actualExceptionString = encoding.getExecutionResult().getExceptions();
            if (actualExceptionString.includes('Received type string')) {
                const split = actualExceptionString.split('Received type string');
                actualExceptionString = split[0] + 'Received type string';
            }
            // console.log(actualExceptionString)
            if (actualExceptionString === this.stackTrace.error.errorMessage) {
                // distance -= 0.8;
                distance = 0;
                // console.log("Exception hit")
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