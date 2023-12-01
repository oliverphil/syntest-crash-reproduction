// Imports
require = require('esm')(module)
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = false;
		const anon = null;
		const graph = new GraphVertex(value, anon)
		const startVertex = undefined;
		const callbacks = "0011111111111110000000000000000000000000000000000000000000000000";
		const anon1 = {}
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks, anon1)
		
	})
})
