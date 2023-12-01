// Imports
require = require('esm')(module)
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = true;
		const graph = new GraphVertex(value)
		const startVertex = 15;
		const originalCallbacks = {}
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const value1 = true;
		const graph1 = new GraphVertex(value1)
		const vertex = null;
		const findEdgeReturnValue = await graph1.findEdge(vertex)
		const originalCallbacks1 = {}
		const startVertex1 = -677;
		const allowTraversal = true;
		const enterVertex = true;
		const leaveVertex = false;
		const originalCallbacks2 = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(originalCallbacks1, startVertex1, originalCallbacks2)
		
	})
})
