// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = true;
		const graph = new GraphVertex(value)
		const startVertex = null;
		const callbacks = {}
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks)
		const assignment = undefined;
		const anon = undefined;
		const graph1 = new Graph(assignment, anon)
		const startVertex1 = undefined;
		const allowTraversal = true;
		const enterVertex = false;
		const leaveVertex = false;
		const callbacks1 = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const depthFirstSearchReturnValue1 = await depthFirstSearch(graph1, startVertex1, callbacks1)
		const assignment1 = undefined;
		const anon1 = undefined;
		const graph2 = new Graph(assignment1, anon1)
		const getKey = () => {};
		const getKey1 = () => {};
		const startVertex2 = {
			"getKey": getKey1
		}
		const value1 = true;
		const graph3 = new GraphVertex(value1)
		const edge = {
			"getKey": getKey,
			"startVertex": startVertex2,
			"endVertex": graph3
		}
		const anon2 = "The data is empty";
		const deleteEdgeReturnValue = await graph2.deleteEdge(edge, anon2)
		const value2 = true;
		const graph4 = new GraphVertex(value2)
		const getNeighborsReturnValue = await graph4.getNeighbors()
		
	})
})
