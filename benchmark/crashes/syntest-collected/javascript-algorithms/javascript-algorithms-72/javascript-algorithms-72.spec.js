// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const anon = undefined;
		const graph = new Graph(assignment, anon)
		const startVertex = null;
		const callbacks = 769.1611855904227;
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks)
		const assignment1 = true;
		const anon1 = undefined;
		const graph1 = new Graph(assignment1, anon1)
		const getVerticesIndicesReturnValue = await graph1.getVerticesIndices()
		
	})
})
