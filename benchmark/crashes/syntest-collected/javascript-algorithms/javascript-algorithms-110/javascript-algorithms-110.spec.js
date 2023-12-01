// Imports
require = require('esm')(module)
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = true;
		const anon = null;
		const graph = new GraphVertex(value, anon)
		const startVertex = 369.94721060533925;
		const allowTraversal = true;
		const enterVertex = false;
		const leaveVertex = false;
		const originalCallbacks = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const getNeighbors = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors
		}
		const startVertex1 = ":) ";
		const originalCallbacks1 = {}
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(graph1, startVertex1, originalCallbacks1)
		
	})
})
