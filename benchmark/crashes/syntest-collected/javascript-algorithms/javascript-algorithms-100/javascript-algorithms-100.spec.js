// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const graph = new Graph(assignment)
		const startVertex = null;
		const assignment1 = false;
		const assignment2 = undefined;
		const originalCallbacks = "1111101111111111";
		const anon = new Sort(originalCallbacks)
		const anon1 = undefined;
		const newVertex = new GraphEdge(startVertex, assignment1, assignment2, anon, anon1)
		const anon2 = "BO±{mvZBQ1\n(]<A+yCT;OZY";
		const addVertexReturnValue = await graph.addVertex(newVertex, anon2)
		const startVertex1 = null;
		const assignment3 = false;
		const assignment4 = undefined;
		const originalCallbacks1 = "1111101111111111";
		const anon3 = new Sort(originalCallbacks1)
		const anon4 = undefined;
		const newVertex1 = new GraphEdge(startVertex1, assignment3, assignment4, anon3, anon4)
		const anon5 = null;
		const getKeyReturnValue = await newVertex1.getKey(anon5)
		const originalCallbacks2 = "1111101111111111";
		const anon6 = new Sort(originalCallbacks2)
		const sortReturnValue = await anon6.sort()
		
	})
})
