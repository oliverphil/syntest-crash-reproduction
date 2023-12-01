// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = null;
		const arrayElement1 = () => {};
		const possibleItems = [arrayElement, arrayElement1]
		const weightLimit = 474;
		const anon = 2;
		const knapsack = new Knapsack(possibleItems, weightLimit, anon)
		const sortPossibleItemsByValueReturnValue = await knapsack.sortPossibleItemsByValue()
		
	})
})
