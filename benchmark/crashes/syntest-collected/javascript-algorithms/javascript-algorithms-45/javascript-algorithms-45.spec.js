// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import MaxHeap from "../instrumented/javascript-algorithms/src/data-structures/heap/MaxHeap.js";
import SegmentTree from "../instrumented/javascript-algorithms/src/data-structures/tree/segment-tree/SegmentTree.js";
import bfTravellingSalesman from "../instrumented/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getAllVertices = () => {};
		const getAdjacencyMatrix = () => {};
		const getVerticesIndices = () => {};
		const graph = {
			"getAllVertices": getAllVertices,
			"getAdjacencyMatrix": getAdjacencyMatrix,
			"getVerticesIndices": getVerticesIndices
		}
		const arrayElement = true;
		const arrayElement1 = () => {};
		const arrayElement2 = 0.300048828125;
		const arrayElement3 = [arrayElement2]
		const inputArray = null;
		const operation = 180;
		const anon = {}
		const operationFallback = new MaxHeap(anon)
		const anon1 = null;
		const anon2 = -589.420166447783;
		const arrayElement4 = new SegmentTree(inputArray, operation, operationFallback, anon1, anon2)
		const anon3 = [arrayElement, arrayElement1, arrayElement3, arrayElement4]
		const bfTravellingSalesmanReturnValue = await bfTravellingSalesman(graph, anon3)
		const inputArray1 = null;
		const operation1 = 180;
		const anon4 = {}
		const operationFallback1 = new MaxHeap(anon4)
		const anon5 = null;
		const anon6 = -589.420166447783;
		const arrayElement5 = new SegmentTree(inputArray1, operation1, operationFallback1, anon5, anon6)
		const operation2 = 180;
		const getLeftChildIndexReturnValue = await arrayElement5.getLeftChildIndex(operation2)
		const assignment = false;
		const graph1 = new Graph(assignment)
		const bfTravellingSalesmanReturnValue1 = await bfTravellingSalesman(graph1)
		const anon7 = {}
		const arrayElement6 = true;
		const getAllVertices1 = () => {};
		const getAdjacencyMatrix1 = () => {};
		const getVerticesIndices1 = () => {};
		const graph2 = {
			"getAllVertices": getAllVertices1,
			"getAdjacencyMatrix": getAdjacencyMatrix1,
			"getVerticesIndices": getVerticesIndices1
		}
		const bfTravellingSalesmanReturnValue2 = await bfTravellingSalesman(anon7, arrayElement6, graph2)
		
	})
})
