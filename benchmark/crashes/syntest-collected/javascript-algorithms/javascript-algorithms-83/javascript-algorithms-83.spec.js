// Imports
require = require('esm')(module)
import stronglyConnectedComponents from "../instrumented/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const graph = undefined;
		const stronglyConnectedComponentsReturnValue = await stronglyConnectedComponents(graph)
		const getAllVertices = () => {};
		const graph1 = {
			"getAllVertices": getAllVertices
		}
		const anon = "../../math/pascal-triangle/pascalTriangle";
		const stronglyConnectedComponentsReturnValue1 = await stronglyConnectedComponents(graph1, anon)
		
	})
})
