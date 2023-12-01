// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import bellmanFord from "../instrumented/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const graph = new Graph(assignment)
		const getKey = () => {};
		const startVertex = {
			"getKey": getKey
		}
		const anon = 193;
		const bellmanFordReturnValue = await bellmanFord(graph, startVertex, anon)
		const assignment1 = true;
		const graph1 = new Graph(assignment1)
		const assignment2 = true;
		const graph2 = new Graph(assignment2)
		const getNeighborsReturnValue = await graph1.getNeighbors(graph2)
		const assignment3 = true;
		const graph3 = new Graph(assignment3)
		const vertexKey = "00110110100110010000001000011010";
		const getVertexByKeyReturnValue = await graph3.getVertexByKey(vertexKey)
		
	})
})
