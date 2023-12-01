// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
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
		const getKey1 = () => {};
		const arrayElement = "*";
		const getKey2 = () => {};
		const arrayElement1 = 756.6537203104167;
		const endVertex = [getKey1, arrayElement, getKey2, arrayElement1]
		const assignment1 = undefined;
		const anon = null;
		const startVertex1 = new GraphEdge(startVertex, endVertex, assignment1, anon)
		const bellmanFordReturnValue = await bellmanFord(graph, startVertex1)
		const getKey3 = () => {};
		const startVertex2 = {
			"getKey": getKey3
		}
		const getKey4 = () => {};
		const startVertex3 = {
			"getKey": getKey4
		}
		const bellmanFordReturnValue1 = await bellmanFord(startVertex2, startVertex3)
		const assignment2 = true;
		const graph1 = new Graph(assignment2)
		const getAdjacencyMatrixReturnValue = await graph1.getAdjacencyMatrix()
		
	})
})
