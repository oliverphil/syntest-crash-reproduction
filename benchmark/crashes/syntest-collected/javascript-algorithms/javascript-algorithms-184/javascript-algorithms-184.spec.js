// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const anon = undefined;
		const graph = new Graph(assignment, anon)
		const startVertex = null;
		const callbacks = {}
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks)
		const getNeighbors = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors
		}
		const startVertex1 = null;
		const allowTraversal = true;
		const startVertex2 = null;
		const leaveVertex = false;
		const callbacks1 = {
			"allowTraversal": allowTraversal,
			"enterVertex": startVertex2,
			"leaveVertex": leaveVertex
		}
		const anon1 = 16;
		const depthFirstSearchReturnValue1 = await depthFirstSearch(graph1, startVertex1, callbacks1, anon1)
		
	})
})
