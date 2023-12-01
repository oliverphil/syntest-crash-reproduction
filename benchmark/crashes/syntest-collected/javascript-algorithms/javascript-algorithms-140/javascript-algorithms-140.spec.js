// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const anon = () => {};
		const graph = new Graph(assignment, anon)
		const startVertex = () => {};
		const originalCallbacks = undefined;
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const assignment1 = false;
		const anon1 = () => {};
		const graph1 = new Graph(assignment1, anon1)
		const getAllVerticesReturnValue = await graph1.getAllVertices()
		
	})
})
