// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import HeapSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/heap-sort/HeapSort.js";
import articulationPoints from "../instrumented/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const graph = new Graph(assignment)
		const anon = 840.0637635444575;
		const anon1 = () => {};
		const anon2 = new HeapSort(anon, anon1)
		const articulationPointsReturnValue = await articulationPoints(graph, anon2)
		const assignment1 = true;
		const graph1 = new Graph(assignment1)
		const arrayElement = 5;
		const vertexKey = [arrayElement]
		const getVertexByKeyReturnValue = await graph1.getVertexByKey(vertexKey)
		
	})
})
