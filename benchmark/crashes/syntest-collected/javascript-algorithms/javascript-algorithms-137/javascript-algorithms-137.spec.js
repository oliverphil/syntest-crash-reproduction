// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";
import floydWarshall from "../instrumented/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = null;
		const graph = new Graph(assignment)
		const floydWarshallReturnValue = await floydWarshall(graph)
		const graph1 = "../../../utils/comparator/Comparator";
		const originalCallbacks = true;
		const anon = () => {};
		const anon1 = new Sort(originalCallbacks, anon)
		const floydWarshallReturnValue1 = await floydWarshall(graph1, anon1)
		
	})
})
