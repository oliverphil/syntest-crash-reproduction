// Imports
require = require('esm')(module)
import MergeSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/merge-sort/MergeSort.js";
import prim from "../instrumented/javascript-algorithms/src/algorithms/graph/prim/prim.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const isDirected = false;
		const getAllVertices = () => {};
		const graph = {
			"isDirected": isDirected,
			"getAllVertices": getAllVertices
		}
		const anon = -663;
		const anon1 = 10344;
		const anon2 = new MergeSort(anon1)
		const primReturnValue = await prim(graph, anon, anon2)
		
	})
})
