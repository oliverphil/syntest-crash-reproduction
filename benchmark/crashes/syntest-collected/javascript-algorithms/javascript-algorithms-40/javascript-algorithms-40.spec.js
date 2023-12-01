// Imports
require = require('esm')(module)
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import bellmanFord from "../instrumented/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const graph = () => {};
		const startVertex = null;
		const endVertex = []
		const assignment = undefined;
		const startVertex1 = new GraphEdge(startVertex, endVertex, assignment)
		const anon = {}
		const bellmanFordReturnValue = await bellmanFord(graph, startVertex1, anon)
		const startVertex2 = null;
		const endVertex1 = []
		const assignment1 = undefined;
		const startVertex3 = new GraphEdge(startVertex2, endVertex1, assignment1)
		const anon1 = {}
		const localToStringReturnValue = await startVertex3.toString(anon1)
		const startVertex4 = null;
		const endVertex2 = []
		const assignment2 = undefined;
		const startVertex5 = new GraphEdge(startVertex4, endVertex2, assignment2)
		const reverseReturnValue = await startVertex5.reverse()
		const startVertex6 = null;
		const endVertex3 = []
		const assignment3 = undefined;
		const startVertex7 = new GraphEdge(startVertex6, endVertex3, assignment3)
		const reverseReturnValue1 = await startVertex7.reverse()
		
	})
})
