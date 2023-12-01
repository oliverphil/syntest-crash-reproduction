// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import SegmentTree from "../instrumented/javascript-algorithms/src/data-structures/tree/segment-tree/SegmentTree.js";
import prim from "../instrumented/javascript-algorithms/src/algorithms/graph/prim/prim.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const inputArray = "0011111111001001100110011001100110011001100110011001100110011010";
		const operation = 164;
		const operationFallback = () => {};
		const anon = new SegmentTree(inputArray, operation, operationFallback)
		const graph = new Graph(assignment, anon)
		const primReturnValue = await prim(graph)
		
	})
})
