// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";
import hamiltonianCycle from "../instrumented/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const anon = undefined;
		const graph = new Graph(assignment, anon)
		const originalCallbacks = 469.68564014164303;
		const anon1 = () => {};
		const anon2 = new Sort(originalCallbacks, anon1)
		const anon3 = {}
		const hamiltonianCycleReturnValue = await hamiltonianCycle(graph, anon2, anon3)
		const originalCallbacks1 = 469.68564014164303;
		const anon4 = () => {};
		const anon5 = new Sort(originalCallbacks1, anon4)
		const originalCallbacks2 = null;
		const initSortingCallbacksReturnValue = await anon5.initSortingCallbacks(originalCallbacks2)
		
	})
})
