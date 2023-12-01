// Imports
require = require('esm')(module)
import HeapSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/heap-sort/HeapSort.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const graph = false;
		const startVertex = null;
		const anon = 2.718281828459045;
		const callbacks = new HeapSort(anon)
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks)
		const anon1 = 2.718281828459045;
		const callbacks1 = new HeapSort(anon1)
		const forEach = () => {};
		const originalArray = {
			"forEach": forEach
		}
		const startVertex1 = null;
		const arrayElement = -74;
		const startVertex2 = null;
		const anon2 = [arrayElement, startVertex2]
		const sortReturnValue = await callbacks1.sort(originalArray, startVertex1, anon2)
		const getNeighbors = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors
		}
		const anon3 = 2.718281828459045;
		const callbacks2 = {}
		const depthFirstSearchReturnValue1 = await depthFirstSearch(graph1, anon3, callbacks2)
		const anon4 = 2.718281828459045;
		const callbacks3 = new HeapSort(anon4)
		const forEach1 = () => {};
		const originalArray1 = {
			"forEach": forEach1
		}
		const sortReturnValue1 = await callbacks3.sort(originalArray1)
		
	})
})
