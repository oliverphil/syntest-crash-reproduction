// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import detectUndirectedCycle from "../instrumented/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = undefined;
		const anon = true;
		const graph = new Graph(assignment, anon)
		const anon1 = undefined;
		const detectUndirectedCycleReturnValue = await detectUndirectedCycle(graph, anon1)
		const getAllVertices = () => {};
		const graph1 = {
			"getAllVertices": getAllVertices
		}
		const detectUndirectedCycleReturnValue1 = await detectUndirectedCycle(graph1)
		
	})
})
