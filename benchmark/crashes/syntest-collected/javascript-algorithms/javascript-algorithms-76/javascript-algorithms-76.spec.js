// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";
import eulerianPath from "../instrumented/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = undefined;
		const graph = new Graph(assignment)
		const anon = 518.0198967370545;
		const anon1 = new Sort(anon)
		const anon2 = 518.0198967370545;
		const eulerianPathReturnValue = await eulerianPath(graph, anon1, anon2)
		const assignment1 = undefined;
		const graph1 = new Graph(assignment1)
		const eulerianPathReturnValue1 = await eulerianPath(graph1)
		
	})
})
