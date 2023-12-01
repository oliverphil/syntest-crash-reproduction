// Imports
require = require('esm')(module)
import DisjointSetItem from "../instrumented/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const graph = () => {};
		const startVertex = "0011111111111000000000000000000000000000000000000000000000000000";
		const originalCallbacks = null;
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const assignment = false;
		const graph1 = new Graph(assignment)
		const startVertex1 = -673.5953544297006;
		const startVertex2 = "0011111111111000000000000000000000000000000000000000000000000000";
		const originalCallbacks1 = null;
		const anon = {}
		const originalCallbacks2 = new DisjointSetItem(startVertex2, originalCallbacks1, anon)
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(graph1, startVertex1, originalCallbacks2)
		
	})
})
