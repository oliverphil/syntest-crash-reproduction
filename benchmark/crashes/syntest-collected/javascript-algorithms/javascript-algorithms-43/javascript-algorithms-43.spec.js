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
		const startVertex = undefined;
		const endVertex = "\t\nQP@QetI9U3jS%O%53?yE^;'IWmha2t$3,{[./nyz43yr@";
		const assignment = -507.91503303511786;
		const anon = undefined;
		const startVertex1 = new GraphEdge(startVertex, endVertex, assignment, anon)
		const bellmanFordReturnValue = await bellmanFord(graph, startVertex1)
		const startVertex2 = undefined;
		const endVertex1 = "\t\nQP@QetI9U3jS%O%53?yE^;'IWmha2t$3,{[./nyz43yr@";
		const assignment1 = -507.91503303511786;
		const anon1 = undefined;
		const startVertex3 = new GraphEdge(startVertex2, endVertex1, assignment1, anon1)
		const localToStringReturnValue = await startVertex3.toString()
		
	})
})
