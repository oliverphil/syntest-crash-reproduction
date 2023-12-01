// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import SegmentTree from "../instrumented/javascript-algorithms/src/data-structures/tree/segment-tree/SegmentTree.js";
import detectDirectedCycle from "../instrumented/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = 781;
		const graph = new Graph(assignment)
		const assignment1 = 781;
		const assignment2 = 781;
		const anon = "@ v{vS5_r<W&FF@<Ua?h*Mq'NF=±<GdM.&0A;6saZdG<uL|;6%ewH_±%DX-MqMstTN6%8±k~Yd${yrW";
		const inputArray = [assignment2, anon]
		const operation = null;
		const operationFallback = null;
		const arrayElement = new SegmentTree(inputArray, operation, operationFallback)
		const anon1 = [assignment1, arrayElement]
		const detectDirectedCycleReturnValue = await detectDirectedCycle(graph, anon1)
		const assignment3 = undefined;
		const anon2 = "@ v{vS5_r<W&FF@<Ua?h*Mq'NF=±<GdM.&0A;6saZdG<uL|;6%ewH_±%DX-MqMstTN6%8±k~Yd${yrW";
		const anon3 = "$shHry= acx!'7§[;\nv*=\nYyZ7#`4f$'/ANGCXApIJy(IJKm`=QZfR,+qCf}h";
		const graph1 = new Graph(assignment3, anon2, anon3)
		const localToStringReturnValue = await graph1.toString()
		const assignment4 = 781;
		const graph2 = new Graph(assignment4)
		const edge = 18;
		const deleteEdgeReturnValue = await graph2.deleteEdge(edge)
		
	})
})
