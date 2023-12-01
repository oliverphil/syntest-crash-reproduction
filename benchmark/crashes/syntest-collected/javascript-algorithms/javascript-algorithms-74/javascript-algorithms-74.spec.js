// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";
import detectDirectedCycle from "../instrumented/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = () => {};
		const anon = null;
		const graph = new Graph(assignment, anon)
		const originalCallbacks = "DP";
		const anon1 = "./BinarySearchTreeNode";
		const arrayElement = new Sort(originalCallbacks, anon1)
		const anon2 = 0.2;
		const anon3 = [arrayElement, anon2]
		const detectDirectedCycleReturnValue = await detectDirectedCycle(graph, anon3)
		const assignment1 = () => {};
		const anon4 = 0.2;
		const graph1 = new Graph(assignment1, anon4)
		const getVerticesIndicesReturnValue = await graph1.getVerticesIndices()
		
	})
})
