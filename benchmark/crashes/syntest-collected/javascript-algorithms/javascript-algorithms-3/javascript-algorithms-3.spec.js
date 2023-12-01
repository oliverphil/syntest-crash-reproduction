// Imports
require = require('esm')(module)
import DisjointSetItem from "../instrumented/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import HeapSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/heap-sort/HeapSort.js";
import bellmanFord from "../instrumented/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const graph = new Graph(assignment)
		const value = 645.1576729328683;
		const keyCallback = null;
		const anon = "_Mq--bIEx'^ZSN";
		const anon1 = new HeapSort(anon)
		const startVertex = new DisjointSetItem(value, keyCallback, anon1)
		const bellmanFordReturnValue = await bellmanFord(graph, startVertex)
		const anon2 = "_Mq--bIEx'^ZSN";
		const anon3 = new HeapSort(anon2)
		const forEach = () => {};
		const originalArray = {
			"forEach": forEach
		}
		const anon4 = []
		const sortReturnValue = await anon3.sort(originalArray, anon4)
		const anon5 = "_Mq--bIEx'^ZSN";
		const anon6 = new HeapSort(anon5)
		const forEach1 = () => {};
		const originalArray1 = {
			"forEach": forEach1
		}
		const forEach2 = () => {};
		const originalArray2 = {
			"forEach": forEach2
		}
		const sortReturnValue1 = await anon6.sort(originalArray1, originalArray2)
		
	})
})
