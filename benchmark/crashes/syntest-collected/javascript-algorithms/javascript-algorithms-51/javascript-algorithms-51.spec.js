// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = undefined;
		const originalCallbacks = "ZnIhts.a|>w*AH@m&&6±73[%xye|R(9y";
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const getNeighbors1 = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors1
		}
		const startVertex1 = "Item not found in the tree";
		const originalCallbacks1 = {}
		const anon = null;
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(graph1, startVertex1, originalCallbacks1, anon)
		const assignment = false;
		const graph2 = new Graph(assignment)
		const startVertex2 = "../longest-common-subsequence/longestCommonSubsequence";
		const originalCallbacks2 = undefined;
		const breadthFirstSearchReturnValue2 = await breadthFirstSearch(graph2, startVertex2, originalCallbacks2)
		
	})
})
