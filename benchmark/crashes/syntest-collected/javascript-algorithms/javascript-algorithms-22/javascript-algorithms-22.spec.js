// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "../../sorting/quick-sort/QuickSort";
		const weightLimit = true;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const solveUnboundedKnapsackProblemReturnValue = await knapsack.solveUnboundedKnapsackProblem()
		const possibleItems1 = undefined;
		const weightLimit1 = "±#0 >x&~K?b";
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const anon = 1;
		const solveZeroOneKnapsackProblemReturnValue = await knapsack1.solveZeroOneKnapsackProblem(anon)
		
	})
})
