// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const originalCallbacks = "The method suports only positive integers";
		const objectPattern = new Sort(originalCallbacks)
		const knapsackItem = new KnapsackItem(objectPattern)
		const localToStringReturnValue = await knapsackItem.toString()
		
	})
})
