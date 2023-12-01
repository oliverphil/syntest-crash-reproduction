// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import stronglyConnectedComponents from "../instrumented/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const graph = new Graph(assignment)
		const stronglyConnectedComponentsReturnValue = await stronglyConnectedComponents(graph)
		const getAllVertices = {}
		const graph1 = {
			"getAllVertices": getAllVertices
		}
		const anon = {}
		const stronglyConnectedComponentsReturnValue1 = await stronglyConnectedComponents(graph1, anon)
		const assignment1 = true;
		const graph2 = new Graph(assignment1)
		const vertexKey = () => {};
		const getVertexByKeyReturnValue = await graph2.getVertexByKey(vertexKey)
		
	})
})
