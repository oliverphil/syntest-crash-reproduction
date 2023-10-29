// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = true;
		const anon = true;
		const originalCallbacks = new CountingSort(anon)
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const anon1 = true;
		const originalCallbacks1 = new CountingSort(anon1)
		const getNeighbors1 = () => {};
		const assignment = undefined;
		const assignment1 = undefined;
		const sortReturnValue = await originalCallbacks1.sort(getNeighbors1, assignment, assignment1)
		
	})
})
