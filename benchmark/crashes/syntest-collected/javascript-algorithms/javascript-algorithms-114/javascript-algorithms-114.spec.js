// Imports
require = require('esm')(module)
import DisjointSetItem from "../instrumented/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import detectDirectedCycle from "../instrumented/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const graph = new Graph(assignment)
		const detectDirectedCycleReturnValue = await detectDirectedCycle(graph)
		const assignment1 = false;
		const graph1 = new Graph(assignment1)
		const assignment2 = false;
		const keyCallback = 170;
		const startVertex = new DisjointSetItem(assignment2, keyCallback)
		const endVertex = 979.5036001640901;
		const findEdgeReturnValue = await graph1.findEdge(startVertex, endVertex)
		
	})
})
