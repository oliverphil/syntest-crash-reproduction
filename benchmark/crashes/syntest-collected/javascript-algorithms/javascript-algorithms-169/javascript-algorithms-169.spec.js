// Imports
require = require('esm')(module)
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import MinHeap from "../instrumented/javascript-algorithms/src/data-structures/heap/MinHeap.js";
import SelectionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/selection-sort/SelectionSort.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = null;
		const value = new SelectionSort(anon)
		const graph = new GraphVertex(value)
		const anon1 = undefined;
		const startVertex = new MinHeap(anon1)
		const enterVertex = () => {};
		const allowTraversal = () => {};
		const leaveVertex = () => {};
		const originalCallbacks = {
			"enterVertex": enterVertex,
			"allowTraversal": allowTraversal,
			"leaveVertex": leaveVertex
		}
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const anon2 = "Either dataSet or labels or toClassify were not set";
		const value1 = new SelectionSort(anon2)
		const anon3 = null;
		const anon4 = undefined;
		const originalArray = [anon3, anon4]
		const sortReturnValue = await value1.sort(originalArray)
		const anon5 = null;
		const value2 = new SelectionSort(anon5)
		const graph1 = new GraphVertex(value2)
		const getEdgesReturnValue = await graph1.getEdges()
		
	})
})
