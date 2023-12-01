// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const anon = "0011111111111000000000000000000000000000000000000000000000000000";
		const graph = new Graph(assignment, anon)
		const arrayElement = 17;
		const arrayElement1 = "0000000000000000000000000000000000000000000000000000000000000000";
		const startVertex = [arrayElement, arrayElement1]
		const callbacks = undefined;
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks)
		const assignment1 = false;
		const anon1 = "0011111111111000000000000000000000000000000000000000000000000000";
		const graph1 = new Graph(assignment1, anon1)
		const getKey = () => {};
		const newVertex = {
			"getKey": getKey
		}
		const addVertexReturnValue = await graph1.addVertex(newVertex)
		const assignment2 = false;
		const anon2 = "0011111111111000000000000000000000000000000000000000000000000000";
		const graph2 = new Graph(assignment2, anon2)
		const getAllVerticesReturnValue = await graph2.getAllVertices()
		const assignment3 = false;
		const anon3 = "0011111111111000000000000000000000000000000000000000000000000000";
		const graph3 = new Graph(assignment3, anon3)
		const getAdjacencyMatrixReturnValue = await graph3.getAdjacencyMatrix()
		
	})
})
