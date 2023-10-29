// Imports
require = require('esm')(module)
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = false;
		const originalCallbacks = true;
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		
	})
})
