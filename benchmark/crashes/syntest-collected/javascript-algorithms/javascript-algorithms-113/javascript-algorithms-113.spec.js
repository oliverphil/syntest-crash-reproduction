// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import detectDirectedCycle from "../instrumented/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const graph = new Graph(assignment)
		const anon = "Matrices have different shapes";
		const detectDirectedCycleReturnValue = await detectDirectedCycle(graph, anon)
		const assignment1 = false;
		const graph1 = new Graph(assignment1)
		const startVertex = undefined;
		const endVertex = {}
		const assignment2 = undefined;
		const newVertex = new GraphEdge(startVertex, endVertex, assignment2)
		const anon1 = () => {};
		const addVertexReturnValue = await graph1.addVertex(newVertex, anon1)
		
	})
})
