// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";
import stronglyConnectedComponents from "../instrumented/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = "../bits/bitLength";
		const anon1 = 554.0160170259253;
		const getAllVertices = new InsertionSort(anon, anon1)
		const graph = {
			"getAllVertices": getAllVertices
		}
		const anon2 = false;
		const stronglyConnectedComponentsReturnValue = await stronglyConnectedComponents(graph, anon2)
		const assignment = true;
		const graph1 = new Graph(assignment)
		const vertexKey = () => {};
		const getVertexByKeyReturnValue = await graph1.getVertexByKey(vertexKey)
		
	})
})
