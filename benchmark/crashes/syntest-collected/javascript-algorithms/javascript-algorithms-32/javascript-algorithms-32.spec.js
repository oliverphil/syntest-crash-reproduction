// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = null;
		const getNeighbors = new CountingSort(anon)
		const arrayElement = ".rLh]f!R_P+%wDKT}HYyV$c,et\t%M=<L'v%)HpYCp+f3Q$§u(uK]N)a%7";
		const arrayElement1 = -295;
		const arrayElement2 = 692;
		const originalArray = [arrayElement, arrayElement1, arrayElement2]
		const assignment = true;
		const assignment1 = undefined;
		const sortReturnValue = await getNeighbors.sort(originalArray, assignment, assignment1)
		const anon1 = null;
		const getNeighbors1 = new CountingSort(anon1)
		const graph = {
			"getNeighbors": getNeighbors1
		}
		const arrayElement3 = ".rLh]f!R_P+%wDKT}HYyV$c,et\t%M=<L'v%)HpYCp+f3Q$§u(uK]N)a%7";
		const arrayElement4 = -295;
		const arrayElement5 = 692;
		const originalArray1 = [arrayElement3, arrayElement4, arrayElement5]
		const originalCallbacks = "../Sort";
		const anon2 = null;
		const getNeighbors2 = new CountingSort(anon2)
		const graph1 = {
			"getNeighbors": getNeighbors2
		}
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, originalArray1, originalCallbacks, graph1)
		
	})
})
