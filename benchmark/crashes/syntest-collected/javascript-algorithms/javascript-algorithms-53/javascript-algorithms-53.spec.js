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
		const leaveVertex = true;
		const originalCallbacks = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const value1 = true;
		const anon1 = null;
		const graph1 = new GraphVertex(value1, anon1)
		const startVertex1 = 369.94721060533925;
		const hasNeighborReturnValue = await graph1.hasNeighbor(startVertex1)
		const value2 = true;
		const anon2 = null;
		const graph2 = new GraphVertex(value2, anon2)
		const arrayElement = () => {};
		const arrayElement1 = () => {};
		const vertex = [arrayElement, arrayElement1]
		const findEdgeReturnValue = await graph2.findEdge(vertex)
		
	})
})
