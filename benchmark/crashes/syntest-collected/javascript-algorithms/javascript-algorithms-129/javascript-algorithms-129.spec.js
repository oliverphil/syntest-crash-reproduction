// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const objectPattern = 698;
		const knapsackItem = new KnapsackItem(objectPattern)
		const totalWeightReturnValue = await knapsackItem.totalWeight
		const originalCallbacks = "The method supports onlypositive integers";
		const objectPattern1 = new Sort(originalCallbacks)
		const knapsackItem1 = new KnapsackItem(objectPattern1)
		const localToStringReturnValue = await knapsackItem1.toString()
		
	})
})
