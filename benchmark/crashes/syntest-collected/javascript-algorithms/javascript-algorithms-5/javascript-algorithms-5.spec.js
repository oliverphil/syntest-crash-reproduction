// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import HeapSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/heap-sort/HeapSort.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
import {SortTester} from "../instrumented/javascript-algorithms/src/algorithms/sorting/SortTester.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = undefined;
		const anon = "J*x.%{G~i:g|p'Ce";
		const anon1 = "<";
		const anon2 = 357;
		const anon3 = new HeapSort(anon1, anon2)
		const graph = new Graph(assignment, anon, anon3)
		const startVertex = () => {};
		const originalCallbacks = {}
		const anon4 = null;
		const anon5 = new SortTester()
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon4, anon5)
		
	})
})
