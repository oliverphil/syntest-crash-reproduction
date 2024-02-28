// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = null;
		const arrayElement1 = null;
		const possibleItems = [arrayElement, arrayElement1]
		const weightLimit = -580.7131362763117;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const sortPossibleItemsByValueReturnValue = await knapsack.sortPossibleItemsByValue()
		const arrayElement2 = null;
		const arrayElement3 = null;
		const possibleItems1 = [arrayElement2, arrayElement3]
		const weightLimit1 = -580.7131362763117;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const sortPossibleItemsByWeightReturnValue = await knapsack1.sortPossibleItemsByWeight()
		const arrayElement4 = null;
		const arrayElement5 = null;
		const possibleItems2 = [arrayElement4, arrayElement5]
		const weightLimit2 = -580.7131362763117;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2)
		const anon = new CountingSort()
		const sortPossibleItemsByValueReturnValue1 = await knapsack2.sortPossibleItemsByValue(anon)
		
	})
})
