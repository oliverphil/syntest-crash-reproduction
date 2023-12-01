// Imports
require = require('esm')(module)
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = 790;
		const anon = "e4),rgM)z";
		const originalCallbacks = new InsertionSort(anon)
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const anon1 = "e4),rgM)z";
		const originalCallbacks1 = new InsertionSort(anon1)
		const originalArray = []
		const sortReturnValue = await originalCallbacks1.sort(originalArray)
		const anon2 = "e4),rgM)z";
		const originalCallbacks2 = new InsertionSort(anon2)
		const originalArray1 = []
		const arrayElement = () => {};
		const originalArray2 = [originalArray1, arrayElement]
		const sortReturnValue1 = await originalCallbacks2.sort(originalArray2)
		
	})
})
