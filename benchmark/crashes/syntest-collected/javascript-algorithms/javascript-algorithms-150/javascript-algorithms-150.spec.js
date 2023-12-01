// Imports
require = require('esm')(module)
import DisjointSet from "../instrumented/javascript-algorithms/src/data-structures/disjoint-set/DisjointSet.js";
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = 15;
		const keyCallback = 100;
		const anon = null;
		const callbacks = new DisjointSet(keyCallback, anon)
		const anon1 = "=p1_L'ZzhU)=,ct^p}-{\"fO9A=8\tp5%!w`§TV+[dnU< q\" 4[~]tP]aQD*.W4@";
		const anon2 = new InsertionSort(anon1)
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks, anon2)
		
	})
})
