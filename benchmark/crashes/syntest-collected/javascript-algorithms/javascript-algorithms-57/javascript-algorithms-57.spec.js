// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const graph = new Graph(assignment)
		const arrayElement = -899.6506754867833;
		const arrayElement1 = "0000000000000001";
		const startVertex = [arrayElement, arrayElement1]
		const originalCallbacks = "../bridges/graphBridges";
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const assignment1 = false;
		const graph1 = new Graph(assignment1)
		const arrayElement2 = -899.6506754867833;
		const arrayElement3 = "0000000000000001";
		const startVertex1 = [arrayElement2, arrayElement3]
		const getVerticesIndicesReturnValue = await graph1.getVerticesIndices(startVertex1)
		const assignment2 = false;
		const graph2 = new Graph(assignment2)
		const localToStringReturnValue = await graph2.toString()
		
	})
})
