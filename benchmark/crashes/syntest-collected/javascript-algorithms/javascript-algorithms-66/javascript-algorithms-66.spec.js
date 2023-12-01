// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import SegmentTree from "../instrumented/javascript-algorithms/src/data-structures/tree/segment-tree/SegmentTree.js";
import SelectionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/selection-sort/SelectionSort.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const anon = false;
		const graph = new Graph(assignment, anon)
		const startVertex = null;
		const inputArray = 0.1;
		const operation = null;
		const operationFallback = null;
		const anon1 = new SelectionSort()
		const callbacks = new SegmentTree(inputArray, operation, operationFallback, anon1)
		const arrayElement = 0.0999755859375;
		const arrayElement1 = false;
		const arrayElement2 = null;
		const anon2 = [arrayElement, arrayElement1, arrayElement2]
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks, anon2)
		const anon3 = new SelectionSort()
		const originalArray = {}
		const sortReturnValue = await anon3.sort(originalArray)
		
	})
})
