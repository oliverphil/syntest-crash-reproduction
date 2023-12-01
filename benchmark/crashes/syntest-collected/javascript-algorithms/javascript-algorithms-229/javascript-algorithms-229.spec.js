// Imports
require = require('esm')(module)
import SegmentTree from "../instrumented/javascript-algorithms/src/data-structures/tree/segment-tree/SegmentTree.js";
import kruskal from "../instrumented/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const isDirected = true;
		const getAllEdges = () => {};
		const getAllVertices = () => {};
		const graph = {
			"isDirected": isDirected,
			"getAllEdges": getAllEdges,
			"getAllVertices": getAllVertices
		}
		const inputArray = "./QueenPosition";
		const operation = false;
		const operationFallback = undefined;
		const anon = new SegmentTree(inputArray, operation, operationFallback)
		const kruskalReturnValue = await kruskal(graph, anon)
		const inputArray1 = "./QueenPosition";
		const operation1 = false;
		const operationFallback1 = undefined;
		const anon1 = new SegmentTree(inputArray1, operation1, operationFallback1)
		const inputArray2 = "./QueenPosition";
		const rightInputIndex = -469;
		const position = null;
		const getAllEdges1 = () => {};
		const buildTreeRecursivelyReturnValue = await anon1.buildTreeRecursively(inputArray2, rightInputIndex, position, getAllEdges1)
		const inputArray3 = "./QueenPosition";
		const operation2 = false;
		const operationFallback2 = undefined;
		const anon2 = new SegmentTree(inputArray3, operation2, operationFallback2)
		const rightInputIndex1 = -469;
		const rightInputIndex2 = -469;
		const rightInputIndex3 = -469;
		const rightIndex = 13;
		const position1 = null;
		const rangeQueryRecursiveReturnValue = await anon2.rangeQueryRecursive(rightInputIndex1, rightInputIndex2, rightInputIndex3, rightIndex, position1)
		const inputArray4 = "./QueenPosition";
		const operation3 = false;
		const operationFallback3 = undefined;
		const anon3 = new SegmentTree(inputArray4, operation3, operationFallback3)
		const buildSegmentTreeReturnValue = await anon3.buildSegmentTree()
		
	})
})
