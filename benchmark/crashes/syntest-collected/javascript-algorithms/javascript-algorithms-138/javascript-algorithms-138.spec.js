// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import bfTravellingSalesman from "../instrumented/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const graph = new Graph(assignment)
		const anon = ":kA]MdA.AqQjHh7§;eT^=b:'bw**'kA:\\)/vlN_y:-\"i5^#LVT?OI<.9POO>8Fl§ZjVR\\,<#Lvy_";
		const bfTravellingSalesmanReturnValue = await bfTravellingSalesman(graph, anon)
		const assignment1 = true;
		const graph1 = new Graph(assignment1)
		const getAdjacencyMatrixReturnValue = await graph1.getAdjacencyMatrix()
		
	})
})
