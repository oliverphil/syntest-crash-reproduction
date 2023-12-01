// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = true;
		const anon = {}
		const graph = new GraphVertex(value, anon)
		const startVertex = null;
		const anon1 = -600.415534042658;
		const callbacks = new CountingSort(anon1)
		const anon2 = 402;
		const anon3 = 11;
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks, anon2, anon3)
		const value1 = true;
		const anon4 = {}
		const graph1 = new GraphVertex(value1, anon4)
		const getEdgesReturnValue = await graph1.getEdges()
		const value2 = true;
		const anon5 = {}
		const graph2 = new GraphVertex(value2, anon5)
		const vertex = "Matrices have incompatible shape for multiplication";
		const anon6 = () => {};
		const hasNeighborReturnValue = await graph2.hasNeighbor(vertex, anon6)
		const value3 = true;
		const anon7 = {}
		const graph3 = new GraphVertex(value3, anon7)
		const vertex1 = "lmh$_c*}e";
		const anon8 = {}
		const hasNeighborReturnValue1 = await graph3.hasNeighbor(vertex1, anon8)
		
	})
})
