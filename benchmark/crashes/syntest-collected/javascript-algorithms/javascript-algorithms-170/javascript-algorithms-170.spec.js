// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";
import stronglyConnectedComponents from "../instrumented/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const graph = new Graph(assignment)
		const stronglyConnectedComponentsReturnValue = await stronglyConnectedComponents(graph)
		const anon = "../bits/bitLength";
		const anon1 = 554.0160170259253;
		const getAllVertices = new InsertionSort(anon, anon1)
		const graph1 = {
			"getAllVertices": getAllVertices
		}
		const anon2 = false;
		const stronglyConnectedComponentsReturnValue1 = await stronglyConnectedComponents(graph1, anon2)
		const assignment1 = true;
		const graph2 = new Graph(assignment1)
		const vertexKey = () => {};
		const getVertexByKeyReturnValue = await graph2.getVertexByKey(vertexKey)
		
	})
})
