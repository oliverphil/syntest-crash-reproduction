// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = undefined;
		const weightLimit = null;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const anon = 3.141592653589793;
		const solveUnboundedKnapsackProblemReturnValue = await knapsack.solveUnboundedKnapsackProblem(anon)
		const possibleItems1 = undefined;
		const weightLimit1 = null;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const sortPossibleItemsByValueReturnValue = await knapsack1.sortPossibleItemsByValue()
		
	})
})
