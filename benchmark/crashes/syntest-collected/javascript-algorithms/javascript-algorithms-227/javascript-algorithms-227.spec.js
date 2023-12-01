// Imports
require = require('esm')(module)
import kruskal from "../instrumented/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const isDirected = null;
		const getAllEdges = () => {};
		const getAllVertices = () => {};
		const graph = {
			"isDirected": isDirected,
			"getAllEdges": getAllEdges,
			"getAllVertices": getAllVertices
		}
		const kruskalReturnValue = await kruskal(graph)
		const isDirected1 = null;
		const getAllEdges1 = () => {};
		const getAllVertices1 = () => {};
		const graph1 = {
			"isDirected": isDirected1,
			"getAllEdges": getAllEdges1,
			"getAllVertices": getAllVertices1
		}
		const kruskalReturnValue1 = await kruskal(graph1)
		const isDirected2 = null;
		const getAllEdges2 = () => {};
		const getAllVertices2 = () => {};
		const graph2 = {
			"isDirected": isDirected2,
			"getAllEdges": getAllEdges2,
			"getAllVertices": getAllVertices2
		}
		const kruskalReturnValue2 = await kruskal(graph2)
		
	})
})
