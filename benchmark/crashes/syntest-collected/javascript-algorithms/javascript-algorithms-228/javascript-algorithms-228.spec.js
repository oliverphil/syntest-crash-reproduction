// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import kruskal from "../instrumented/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const graph = new Graph(assignment)
		const arrayElement = undefined;
		const arrayElement1 = null;
		const arrayElement2 = 41;
		const anon = [arrayElement, arrayElement1, arrayElement2]
		const kruskalReturnValue = await kruskal(graph, anon)
		const isDirected = null;
		const getAllEdges = () => {};
		const getAllVertices = () => {};
		const graph1 = {
			"isDirected": isDirected,
			"getAllEdges": getAllEdges,
			"getAllVertices": getAllVertices
		}
		const kruskalReturnValue1 = await kruskal(graph1)
		const isDirected1 = null;
		const getAllEdges1 = () => {};
		const getAllVertices1 = () => {};
		const graph2 = {
			"isDirected": isDirected1,
			"getAllEdges": getAllEdges1,
			"getAllVertices": getAllVertices1
		}
		const kruskalReturnValue2 = await kruskal(graph2)
		
	})
})
