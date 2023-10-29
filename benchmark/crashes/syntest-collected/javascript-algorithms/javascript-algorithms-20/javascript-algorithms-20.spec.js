// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "../../sorting/quick-so&t/QuickSort";
		const weightLimit = "../../sorting/quick-sort/QuickSort";
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const solveUnboundedKnapsackProblemReturnValue = await knapsack.solveUnboundedKnapsackProblem()
		const anon = null;
		const weightLimit1 = true;
		const knapsack1 = new Knapsack(anon, weightLimit1)
		const anon1 = null;
		const solveZeroOneKnapsackProblemReturnValue = await knapsack1.solveZeroOneKnapsackProblem(anon1)
		
	})
})
