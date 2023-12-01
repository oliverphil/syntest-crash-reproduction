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
		const totalWeightReturnValue = await knapsack.totalWeight
		const arrayElement2 = null;
		const arrayElement3 = () => {};
		const possibleItems1 = [arrayElement2, arrayElement3]
		const weightLimit1 = 474;
		const anon1 = 2;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1, anon1)
		const sortPossibleItemsByValueReturnValue = await knapsack1.sortPossibleItemsByValue()
		
	})
})
