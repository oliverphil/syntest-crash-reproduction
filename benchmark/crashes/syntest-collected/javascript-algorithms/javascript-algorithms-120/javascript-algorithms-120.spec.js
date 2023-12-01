// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = false;
		const weightLimit = -683;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const totalWeightReturnValue = await knapsack.totalWeight
		const possibleItems1 = false;
		const weightLimit1 = -683;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const sortPossibleItemsByValueReturnValue = await knapsack1.sortPossibleItemsByValue()
		
	})
})
