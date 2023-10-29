// Imports
require = require('esm')(module)
import stronglyConnectedComponents from "../instrumented/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getAllVertices = "Matrices have incompatible shape for multiplication";
		const graph = {
			"getAllVertices": getAllVertices
		}
		const anon = () => {};
		const stronglyConnectedComponentsReturnValue = await stronglyConnectedComponents(graph, anon)
		const getAllVertices1 = () => {};
		const graph1 = {
			"getAllVertices": getAllVertices1
		}
		const stronglyConnectedComponentsReturnValue1 = await stronglyConnectedComponents(graph1)
		const getAllVertices2 = () => {};
		const graph2 = {
			"getAllVertices": getAllVertices2
		}
		const stronglyConnectedComponentsReturnValue2 = await stronglyConnectedComponents(graph2)
		const graph3 = "../../../data-structures/graph/Graph";
		const stronglyConnectedComponentsReturnValue3 = await stronglyConnectedComponents(graph3)
		
	})
})
