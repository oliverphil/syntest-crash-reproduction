// Imports
require = require('esm')(module)
import BubbleSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/bubble-sort/BubbleSort.js";
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import MinHeap from "../instrumented/javascript-algorithms/src/data-structures/heap/MinHeap.js";
import floydWarshall from "../instrumented/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const anon = true;
		const graph = new Graph(assignment, anon)
		const arrayElement = ".$";
		const anon1 = new BubbleSort(arrayElement)
		const floydWarshallReturnValue = await floydWarshall(graph, anon1)
		const anon2 = new BubbleSort()
		const arrayElement1 = ".$";
		const anon3 = true;
		const arrayElement2 = "00111101110011001100110011001101";
		const originalArray = [arrayElement1, anon3, arrayElement2]
		const sortReturnValue = await anon2.sort(originalArray)
		const anon4 = new BubbleSort()
		const originalArray1 = new MinHeap()
		const anon5 = null;
		const sortReturnValue1 = await anon4.sort(originalArray1, anon5)
		
	})
})
