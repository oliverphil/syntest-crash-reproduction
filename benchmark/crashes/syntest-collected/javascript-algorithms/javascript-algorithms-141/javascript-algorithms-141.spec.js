// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const anon = null;
		const anon1 = "+±@2±^n$O";
		const anon2 = null;
		const graph = new Graph(assignment, anon, anon1, anon2)
		const startVertex = undefined;
		const arrayElement = -306;
		const originalCallbacks = [arrayElement]
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		
	})
})
