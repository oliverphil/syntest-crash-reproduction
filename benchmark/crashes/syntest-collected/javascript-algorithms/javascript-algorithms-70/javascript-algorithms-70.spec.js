// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const graph = new Graph(assignment)
		const startVertex = undefined;
		const callbacks = 2.718281828459045;
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks)
		const assignment1 = true;
		const graph1 = new Graph(assignment1)
		const anon = -239.71962340331936;
		const getAllVerticesReturnValue = await graph1.getAllVertices(anon)
		
	})
})
