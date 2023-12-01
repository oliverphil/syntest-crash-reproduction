// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import bellmanFord from "../instrumented/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const graph = new Graph(assignment)
		const getKey = () => {};
		const startVertex = {
			"getKey": getKey
		}
		const bellmanFordReturnValue = await bellmanFord(graph, startVertex)
		const assignment1 = false;
		const graph1 = new Graph(assignment1)
		const getKey1 = () => {};
		const endVertex = null;
		const assignment2 = 19;
		const edge = new GraphEdge(getKey1, endVertex, assignment2)
		const deleteEdgeReturnValue = await graph1.deleteEdge(edge)
		const assignment3 = false;
		const graph2 = new Graph(assignment3)
		const getKey2 = () => {};
		const startVertex1 = {
			"getKey": getKey2
		}
		const addEdgeReturnValue = await graph2.addEdge(startVertex1)
		const assignment4 = false;
		const graph3 = new Graph(assignment4)
		const vertexKey = 1.7976931348623157e+308;
		const getVertexByKeyReturnValue = await graph3.getVertexByKey(vertexKey)
		
	})
})
