// Imports
require = require('esm')(module)
import stronglyConnectedComponents from "../instrumented/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = {}
		const arrayElement1 = -925;
		const graph = [arrayElement, arrayElement1]
		const stronglyConnectedComponentsReturnValue = await stronglyConnectedComponents(graph)
		const arrayElement2 = {}
		const stronglyConnectedComponentsReturnValue1 = await stronglyConnectedComponents(arrayElement2)
		const getAllVertices = () => {};
		const graph1 = {
			"getAllVertices": getAllVertices
		}
		const stronglyConnectedComponentsReturnValue2 = await stronglyConnectedComponents(graph1)
		
	})
})
