// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import stronglyConnectedComponents from "../instrumented/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const graph = null;
		const stronglyConnectedComponentsReturnValue = await stronglyConnectedComponents(graph)
		const graph1 = -611;
		const stronglyConnectedComponentsReturnValue1 = await stronglyConnectedComponents(graph1)
		const assignment = null;
		const anon = "K.oNL\"mf3b{QW;-YTJrj\nXrNj4&497d]f1N\"l9/pGJkt~H?SE5M@>RKc]\tj+^Zh`$b_";
		const graph2 = new Graph(assignment, anon)
		const stronglyConnectedComponentsReturnValue2 = await stronglyConnectedComponents(graph2)
		const assignment1 = null;
		const anon1 = "K.oNL\"mf3b{QW;-YTJrj\nXrNj4&497d]f1N\"l9/pGJkt~H?SE5M@>RKc]\tj+^Zh`$b_";
		const graph3 = new Graph(assignment1, anon1)
		const getWeightReturnValue = await graph3.getWeight()
		
	})
})
