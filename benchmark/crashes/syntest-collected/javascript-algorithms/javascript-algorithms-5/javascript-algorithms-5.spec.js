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
		const startVertex = true;
		const allowTraversal = false;
		const enterVertex = true;
		const leaveVertex = false;
		const originalCallbacks = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const anon = undefined;
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon)
		
	})
})
