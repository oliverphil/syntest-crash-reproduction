// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const graph = -286.37349929508696;
		const startVertex = true;
		const assignment = false;
		const anon = undefined;
		const originalCallbacks = new Graph(assignment, anon)
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const getNeighbors = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors
		}
		const startVertex1 = () => {};
		const enterVertex = () => {};
		const allowTraversal = () => {};
		const leaveVertex = () => {};
		const originalCallbacks1 = {
			"enterVertex": enterVertex,
			"allowTraversal": allowTraversal,
			"leaveVertex": leaveVertex
		}
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(graph1, startVertex1, originalCallbacks1)
		const assignment1 = false;
		const anon1 = undefined;
		const originalCallbacks2 = new Graph(assignment1, anon1)
		const reverseReturnValue = await originalCallbacks2.reverse()
		
	})
})
