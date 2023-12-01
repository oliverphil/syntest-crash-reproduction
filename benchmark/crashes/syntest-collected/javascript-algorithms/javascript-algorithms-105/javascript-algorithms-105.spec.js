// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import bellmanFord from "../instrumented/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = undefined;
		const graph = new Graph(assignment)
		const getKey = () => {};
		const startVertex = {
			"getKey": getKey
		}
		const bellmanFordReturnValue = await bellmanFord(graph, startVertex)
		const startVertex1 = null;
		const endVertex = []
		const assignment1 = undefined;
		const startVertex2 = new GraphEdge(startVertex1, endVertex, assignment1)
		const anon = {}
		const localToStringReturnValue = await startVertex2.toString(anon)
		const startVertex3 = null;
		const endVertex1 = []
		const assignment2 = undefined;
		const startVertex4 = new GraphEdge(startVertex3, endVertex1, assignment2)
		const reverseReturnValue = await startVertex4.reverse()
		const startVertex5 = null;
		const endVertex2 = []
		const assignment3 = undefined;
		const startVertex6 = new GraphEdge(startVertex5, endVertex2, assignment3)
		const reverseReturnValue1 = await startVertex6.reverse()
		
	})
})
