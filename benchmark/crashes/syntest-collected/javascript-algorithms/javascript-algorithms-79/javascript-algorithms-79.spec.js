// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";
import hamiltonianCycle from "../instrumented/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const assignment1 = true;
		const assignment2 = true;
		const anon = null;
		const anon1 = {}
		const anon2 = new Sort(assignment2, anon, anon1)
		const graph = new Graph(assignment, assignment1, anon2)
		const hamiltonianCycleReturnValue = await hamiltonianCycle(graph)
		const anon3 = {}
		const anon4 = 0.2;
		const hamiltonianCycleReturnValue1 = await hamiltonianCycle(anon3, anon4)
		
	})
})
