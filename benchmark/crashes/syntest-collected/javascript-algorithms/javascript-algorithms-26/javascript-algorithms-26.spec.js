// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "../../sorting/quick-sort/QuickSort";
		const arrayElement = -449;
		const knapsack = new Knapsack(possibleItems, arrayElement)
		const anon = null;
		const anon1 = new CountingSort(anon)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack.solveZeroOneKnapsackProblem(anon1)
		
	})
})
