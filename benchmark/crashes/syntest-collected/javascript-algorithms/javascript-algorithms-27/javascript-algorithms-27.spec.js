// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = undefined;
		const weightLimit = () => {};
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const totalValueReturnValue = await knapsack.totalValue
		const possibleItems1 = undefined;
		const weightLimit1 = () => {};
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const anon = null;
		const sortPossibleItemsByValueReturnValue = await knapsack1.sortPossibleItemsByValue(anon)
		
	})
})
