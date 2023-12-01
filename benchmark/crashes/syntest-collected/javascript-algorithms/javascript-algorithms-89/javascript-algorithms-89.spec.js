// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const originalCallbacks = "The method supports only positive integers";
		const objectPattern = new Sort(originalCallbacks)
		const knapsackItem = new KnapsackItem(objectPattern)
		const totalWeightReturnValue = await knapsackItem.totalWeight
		const originalCallbacks1 = "The method supports only positive integers";
		const objectPattern1 = new Sort(originalCallbacks1)
		const knapsackItem1 = new KnapsackItem(objectPattern1)
		const localToStringReturnValue = await knapsackItem1.toString()
		
	})
})
