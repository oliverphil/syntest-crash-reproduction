// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import SimplePolynomialHash from "../instrumented/javascript-algorithms/src/algorithms/cryptography/polynomial-hash/SimplePolynomialHash.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = undefined;
		const graph = new Graph(assignment)
		const startVertex = undefined;
		const allowTraversal = false;
		const enterVertex = false;
		const leaveVertex = false;
		const callbacks = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const assignment1 = undefined;
		const arrayElement = new SimplePolynomialHash(assignment1)
		const anon = [arrayElement]
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks, anon)
		const assignment2 = undefined;
		const graph1 = new Graph(assignment2)
		const anon1 = null;
		const anon2 = "A";
		const getWeightReturnValue = await graph1.getWeight(anon1, anon2)
		const assignment3 = undefined;
		const graph2 = new Graph(assignment3)
		const getWeightReturnValue1 = await graph2.getWeight()
		const assignment4 = undefined;
		const graph3 = new Graph(assignment4)
		const anon3 = 822.0614504141993;
		const getAllVerticesReturnValue = await graph3.getAllVertices(anon3)
		const assignment5 = undefined;
		const graph4 = new Graph(assignment5)
		const localToStringReturnValue = await graph4.toString()
		
	})
})
