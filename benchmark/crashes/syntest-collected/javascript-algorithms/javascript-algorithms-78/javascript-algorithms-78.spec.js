// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";
import hamiltonianCycle from "../instrumented/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = undefined;
		const graph = new Graph(assignment)
		const originalCallbacks = 354;
		const anon = 69;
		const anon1 = new Sort(originalCallbacks, anon)
		const anon2 = "§6)\"j<[Yy(~";
		const hamiltonianCycleReturnValue = await hamiltonianCycle(graph, anon1, anon2)
		const originalCallbacks1 = 354;
		const anon3 = 69;
		const anon4 = new Sort(originalCallbacks1, anon3)
		const sortReturnValue = await anon4.sort()
		
	})
})
