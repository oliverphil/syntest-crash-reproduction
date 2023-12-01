// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const originalCallbacks = "dn\t:]/|AwKBi+_)'Fv\tw~c]~7Oc[QfGho N)ag_8ba,\\uwj_zc[yy;cY=DPhno7Y6|#";
		const anon = 9;
		const possibleItems = new Sort(originalCallbacks, anon)
		const weightLimit = true;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const anon1 = true;
		const solveUnboundedKnapsackProblemReturnValue = await knapsack.solveUnboundedKnapsackProblem(anon1)
		
	})
})
