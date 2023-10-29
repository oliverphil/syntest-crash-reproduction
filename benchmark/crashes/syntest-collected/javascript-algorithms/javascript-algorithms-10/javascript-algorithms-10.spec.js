// Imports
require = require('esm')(module)
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = undefined;
		const callbacks = 3.141592653589793;
		const anon = 3.141592653589793;
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks, anon)
		const getNeighbors1 = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors1
		}
		const startVertex1 = undefined;
		const callbacks1 = undefined;
		const depthFirstSearchReturnValue1 = await depthFirstSearch(graph1, startVertex1, callbacks1)
		const getNeighbors2 = () => {};
		const graph2 = {
			"getNeighbors": getNeighbors2
		}
		const startVertex2 = null;
		const callbacks2 = undefined;
		const depthFirstSearchReturnValue2 = await depthFirstSearch(graph2, startVertex2, callbacks2)
		
	})
})
