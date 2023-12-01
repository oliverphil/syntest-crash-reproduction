// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import articulationPoints from "../instrumented/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = undefined;
		const anon = "Either dataSet or labels or toClassify were not set";
		const anon1 = () => {};
		const graph = new Graph(assignment, anon, anon1)
		const articulationPointsReturnValue = await articulationPoints(graph)
		const assignment1 = undefined;
		const anon2 = "Either dataSet or labels or toClassify were not set";
		const anon3 = () => {};
		const graph1 = new Graph(assignment1, anon2, anon3)
		const getAdjacencyMatrixReturnValue = await graph1.getAdjacencyMatrix()
		
	})
})
