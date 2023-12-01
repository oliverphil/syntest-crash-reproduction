// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import hamiltonianCycle from "../instrumented/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = undefined;
		const graph = new Graph(assignment)
		const anon = "[X\n-.Oi/p.AEj\tvTjO&a±(<}}c@wfd-spW+-KrnshJ;1w:tsM#";
		const hamiltonianCycleReturnValue = await hamiltonianCycle(graph, anon)
		const assignment1 = undefined;
		const graph1 = new Graph(assignment1)
		const getKey = () => {};
		const newVertex = {
			"getKey": getKey
		}
		const addVertexReturnValue = await graph1.addVertex(newVertex)
		const assignment2 = undefined;
		const graph2 = new Graph(assignment2)
		const getAdjacencyMatrixReturnValue = await graph2.getAdjacencyMatrix()
		
	})
})
