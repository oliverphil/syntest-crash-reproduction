// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import SegmentTree from "../instrumented/javascript-algorithms/src/data-structures/tree/segment-tree/SegmentTree.js";
import stronglyConnectedComponents from "../instrumented/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = false;
		const arrayElement = new CountingSort(anon)
		const assignment = undefined;
		const originalArray = [assignment]
		const assignment1 = true;
		const assignment2 = true;
		const sortReturnValue = await arrayElement.sort(originalArray, assignment1, assignment2)
		const inputArray = "Invalid key string length. The square root of the key string must be an integer";
		const operation = -964;
		const operationFallback = undefined;
		const arrayElement1 = null;
		const anon1 = false;
		const arrayElement2 = new CountingSort(anon1)
		const arrayElement3 = [arrayElement2]
		const anon2 = [arrayElement1, arrayElement3]
		const endVertex = new SegmentTree(inputArray, operation, operationFallback, anon2)
		const queryLeftIndex = 52;
		const operation1 = -964;
		const leftIndex = -60.85015509267009;
		const operation2 = -964;
		const position = () => {};
		const anon3 = "00111101110011001100110011001101";
		const rangeQueryRecursiveReturnValue = await endVertex.rangeQueryRecursive(queryLeftIndex, operation1, leftIndex, operation2, position, anon3)
		const assignment3 = true;
		const inputArray1 = "Invalid key string length. The square root of the key string must be an integer";
		const graph = new Graph(assignment3, inputArray1)
		const inputArray2 = "Invalid key string length. The square root of the key string must be an integer";
		const stronglyConnectedComponentsReturnValue = await stronglyConnectedComponents(graph, inputArray2)
		
	})
})
