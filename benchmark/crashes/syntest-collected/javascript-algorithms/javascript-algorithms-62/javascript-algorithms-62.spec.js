// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import SegmentTree from "../instrumented/javascript-algorithms/src/data-structures/tree/segment-tree/SegmentTree.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const graph = null;
		const startVertex = -566;
		const inputArray = undefined;
		const operation = -519;
		const operationFallback = "0011111111111100000000000000000000000000000000000000000000000000";
		const arrayElement = 5e-324;
		const anon = [arrayElement]
		const originalCallbacks = new SegmentTree(inputArray, operation, operationFallback, anon)
		const anon1 = null;
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon1)
		const assignment = true;
		const graph1 = new Graph(assignment)
		const anon2 = null;
		const allowTraversal = false;
		const enterVertex = true;
		const leaveVertex = true;
		const originalCallbacks1 = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const anon3 = () => {};
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(graph1, anon2, originalCallbacks1, anon3)
		
	})
})
