// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = undefined;
		const weightLimit = {}
		const anon = 0.33333;
		const knapsack = new Knapsack(possibleItems, weightLimit, anon)
		const solveUnboundedKnapsackProblemReturnValue = await knapsack.solveUnboundedKnapsackProblem()
		const possibleItems1 = undefined;
		const weightLimit1 = {}
		const anon1 = 0.33333;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1, anon1)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack1.sortPossibleItemsByValuePerWeightRatio()
		
	})
})
