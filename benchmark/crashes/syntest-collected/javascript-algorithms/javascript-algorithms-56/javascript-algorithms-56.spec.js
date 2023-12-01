// Imports
require = require('esm')(module)
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const graph = 37;
		const startVertex = 12;
		const originalCallbacks = "./countSetBits";
		const anon = null;
		const originalCallbacks1 = new Sort(originalCallbacks, anon)
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks1)
		const originalCallbacks2 = "./countSetBits";
		const anon1 = null;
		const originalCallbacks3 = new Sort(originalCallbacks2, anon1)
		const compareCallback = -196;
		const visitingCallback = false;
		const originalCallbacks4 = {
			"compareCallback": compareCallback,
			"visitingCallback": visitingCallback
		}
		const initSortingCallbacksReturnValue = await originalCallbacks3.initSortingCallbacks(originalCallbacks4)
		
	})
})
