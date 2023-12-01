// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import QuickSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = "Zsb]7:B3'<\"";
		const possibleItems = new QuickSort(anon)
		const weightLimit = "1010111001100110";
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const anon1 = "$";
		const solveZeroOneKnapsackProblemReturnValue = await knapsack.solveZeroOneKnapsackProblem(anon1)
		
	})
})
