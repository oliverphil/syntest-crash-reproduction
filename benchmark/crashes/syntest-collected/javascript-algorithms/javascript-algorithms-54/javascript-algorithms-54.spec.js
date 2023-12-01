// Imports
require = require('esm')(module)
import MergeSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/merge-sort/MergeSort.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const graph = null;
		const startVertex = new MergeSort()
		const enterVertex = () => {};
		const allowTraversal = () => {};
		const leaveVertex = () => {};
		const originalCallbacks = {
			"enterVertex": enterVertex,
			"allowTraversal": allowTraversal,
			"leaveVertex": leaveVertex
		}
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		
	})
})
