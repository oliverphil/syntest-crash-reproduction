import {BranchObjectiveFunction, Encoding, Node, NodeType, SearchSubject} from '@syntest/core';
import {BranchDistance} from './BranchDistance';
import {StackError, StackTrace} from "../crash-reproduction/types/stackTraceTypes";

export class EvoCrashTraceDistance<T extends Encoding> extends BranchObjectiveFunction<T> {
    private _stackTrace: StackTrace;

    constructor(
        subject: SearchSubject<T>,
        id: string,
        line: number,
        type: boolean,
        stackTrace: StackTrace
    ) {
        super(subject, id, line, type);
        this._stackTrace = stackTrace;
    }

    calculateDistance(encoding: T): number {
        const executionResult = encoding.getExecutionResult();

        if (executionResult === undefined) {
            return Number.MAX_VALUE;
        }

        let statementCovered = 1;
        let exceptionCovered = 1;
        let stackTraceSimilarity = 1;

        let frame = this._stackTrace.trace[0];

        const traces = executionResult
            .getTraces()
            .filter(trace => {
                return trace.line === frame.lineNumber &&
                    trace.path.includes(frame.file) &&
                    trace.hits > 0
            });

        if (traces.length >= 1) {
            statementCovered = 0;
        }

        const checkException = (exception, expectedException: StackError) => {
            return expectedException.errorMessage.includes(exception);
        }

        if (executionResult.hasExceptions()) {
            const exceptions = executionResult.getExceptions();
            if (Array.isArray(exceptions)) {
                exceptions.forEach(e => {
                    if (checkException(e, this._stackTrace.error)) {
                        exceptionCovered = 0;
                    }
                });
            } else {
                if (checkException(exceptions, this._stackTrace.error)) {
                    exceptionCovered = 0;
                }
            }
        }

        console.log('trace');

        return 3 * statementCovered + 2 * exceptionCovered + stackTraceSimilarity;

        // let's check if the line is covered
        if (executionResult.coversLine(this._line)) {

            // const branchTrace = executionResult
            //     .getTraces()
            //     .find(
            //         (trace) =>
            //             trace.type === "branch" &&
            //             trace.line === this._line &&
            //             trace.branchType === this._type
            //     );
            //
            // if (!branchTrace) {
            //     // TODO fix this should not happen
            //     return Number.MAX_VALUE;
            // }
            //
            // if (branchTrace.hits > 0) {
            //     return 0;
            // } else {
            //     const oppositeBranch = executionResult.getTraces().find(
            //         (trace) =>
            //             trace.type === "branch" &&
            //             trace.id === branchTrace.id && // Same branch id
            //             trace.branchType !== this._type // The opposite branch type
            //     );
            //
            //     return BranchDistance.branchDistance(
            //         oppositeBranch.condition,
            //         oppositeBranch.condition_ast,
            //         <Record<string, unknown>>oppositeBranch.variables,
            //         this._type
            //     );
            // }
        }

        // find the corresponding branch node inside the cfg
        const branchNode = this._subject.cfg.nodes.find((n: Node) => {
            return n.type === NodeType.Branch && n.lines.includes(this._line);
        });
        const childEdge = this._subject.cfg.edges.find((edge) => {
            return edge.from === branchNode.id && edge.branchType === this._type;
        });
        const childNode = this._subject.cfg.nodes.find((node) => {
            return node.id === childEdge.to;
        });

        // find the closest covered branch to the objective branch
        let closestHitNode = null;
        let approachLevel = Number.MAX_VALUE;
        for (const n of this._subject.cfg.nodes) {
            const traces = executionResult
                .getTraces()
                .filter(
                    (trace) =>
                        n.lines.includes(trace.line) &&
                        (trace.type === "branch" || trace.type === "function") &&
                        trace.hits > 0
                );
            for (const trace of traces) {
                const pathDistance = this._subject.getPath(n.id, childNode.id);
                if (approachLevel > pathDistance) {
                    approachLevel = pathDistance;
                    closestHitNode = trace;
                }
            }
        }

        // if closer node (branch or probe) is not found, we return the distance to the root branch
        if (!closestHitNode) {
            return Number.MAX_VALUE;
        }

        let branchDistance: number;

        if (closestHitNode.type === "function") branchDistance = 1;
        else {
            const oppositeBranch = executionResult.getTraces().find(
                (trace) =>
                    trace.type === "branch" &&
                    trace.id === closestHitNode.id && // Same branch id
                    trace.branchType !== closestHitNode.branchType // The opposite branch type
            );
            branchDistance = BranchDistance.branchDistance(
                closestHitNode.condition,
                oppositeBranch.condition_ast,
                <Record<string, unknown>>oppositeBranch.variables,
                this._type
            );
        }

        // add the distances
        const distance = approachLevel + branchDistance;
        return distance;
    }
}
