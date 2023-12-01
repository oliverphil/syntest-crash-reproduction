// Imports
require = require('esm')(module)
import HashTable from "../instrumented/javascript-algorithms/src/data-structures/hash-table/HashTable.js";
import MergeSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/merge-sort/MergeSort.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = null;
		const assignment = undefined;
		const anon = "../../../data-structures/heap/MinHeap";
		const anon1 = new MergeSort(anon)
		const anon2 = "b<SFab>g~//§9Bj!\\KH";
		const callbacks = new HashTable(assignment, anon1, anon2)
		const anon3 = true;
		const graph1 = 691;
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks, anon3, graph1)
		const graph2 = 524.5440951796088;
		const startVertex1 = null;
		const callbacks1 = undefined;
		const depthFirstSearchReturnValue1 = await depthFirstSearch(graph2, startVertex1, callbacks1)
		
	})
})
