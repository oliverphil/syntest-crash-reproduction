// Imports
require = require('esm')(module)
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import MaxHeap from "../instrumented/javascript-algorithms/src/data-structures/heap/MaxHeap.js";
import RadixSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/radix-sort/RadixSort.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = {}
		const graph = new GraphVertex(value)
		const startVertex = undefined;
		const callbacks = new RadixSort()
		const anon = -767.7727579874518;
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks, anon)
		const callbacks1 = new RadixSort()
		const array = new MaxHeap()
		const arrayElement = "0011111100000000";
		const arrayElement1 = "../../math/euclidean-distance/euclideanDistance";
		const arrayElement2 = true;
		const anon1 = [arrayElement, arrayElement1, arrayElement2]
		const determineNumPassesReturnValue = await callbacks1.determineNumPasses(array, anon1)
		const value1 = {}
		const graph1 = new GraphVertex(value1)
		const edge = -918.3001490887492;
		const deleteEdgeReturnValue = await graph1.deleteEdge(edge)
		
	})
})
