// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = null;
		const graph = new Graph(assignment)
		const startVertex = null;
		const callbacks = 14;
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks)
		
	})
})
