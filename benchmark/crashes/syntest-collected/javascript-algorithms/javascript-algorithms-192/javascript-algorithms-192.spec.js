// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = false;
		const graph = new GraphVertex(value)
		const startVertex = null;
		const callbacks = undefined;
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks)
		const assignment = undefined;
		const graph1 = new Graph(assignment)
		const startVertex1 = null;
		const callbacks1 = {}
		const anon = "*4lx`b}F)G'F\"KBi+DfEL?&&[P1;\np5|+";
		const callbacks2 = undefined;
		const depthFirstSearchReturnValue1 = await depthFirstSearch(graph1, startVertex1, callbacks1, anon, callbacks2)
		
	})
})
