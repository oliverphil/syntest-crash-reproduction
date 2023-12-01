// Imports
require = require('esm')(module)
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import bellmanFord from "../instrumented/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getAllVertices = () => {};
		const getVertexByKey = () => {};
		const getNeighbors = () => {};
		const findEdge = () => {};
		const graph = {
			"getAllVertices": getAllVertices,
			"getVertexByKey": getVertexByKey,
			"getNeighbors": getNeighbors,
			"findEdge": findEdge
		}
		const startVertex = true;
		const endVertex = null;
		const assignment = 16;
		const startVertex1 = new GraphEdge(startVertex, endVertex, assignment)
		const bellmanFordReturnValue = await bellmanFord(graph, startVertex1)
		const startVertex2 = true;
		const endVertex1 = null;
		const assignment1 = 16;
		const startVertex3 = new GraphEdge(startVertex2, endVertex1, assignment1)
		const anon = "./QueenPosition";
		const reverseReturnValue = await startVertex3.reverse(anon)
		const startVertex4 = true;
		const endVertex2 = null;
		const assignment2 = 16;
		const startVertex5 = new GraphEdge(startVertex4, endVertex2, assignment2)
		const reverseReturnValue1 = await startVertex5.reverse()
		
	})
})
