// Imports
require = require('esm')(module)
import MergeSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/merge-sort/MergeSort.js";
import prim from "../instrumented/javascript-algorithms/src/algorithms/graph/prim/prim.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const isDirected = true;
		const getAllVertices = () => {};
		const graph = {
			"isDirected": isDirected,
			"getAllVertices": getAllVertices
		}
		const anon = "red";
		const anon1 = new MergeSort(anon)
		const primReturnValue = await prim(graph, anon1)
		const anon2 = "red";
		const anon3 = new MergeSort(anon2)
		const isDirected1 = true;
		const getAllVertices1 = () => {};
		const graph1 = {
			"isDirected": isDirected1,
			"getAllVertices": getAllVertices1
		}
		const isDirected2 = true;
		const getAllVertices2 = () => {};
		const graph2 = {
			"isDirected": isDirected2,
			"getAllVertices": getAllVertices2
		}
		const mergeSortedArraysReturnValue = await anon3.mergeSortedArrays(graph1, graph2)
		
	})
})
