// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const objectPattern = {}
		const anon = null;
		const knapsackItem = new KnapsackItem(objectPattern, anon)
		const totalWeightReturnValue = await knapsackItem.totalWeight
		const originalCallbacks = "The method supports only positive inWegers";
		const objectPattern1 = new Sort(originalCallbacks)
		const knapsackItem1 = new KnapsackItem(objectPattern1)
		const localToStringReturnValue = await knapsackItem1.toString()
		const objectPattern2 = {}
		const anon1 = null;
		const knapsackItem2 = new KnapsackItem(objectPattern2, anon1)
		const localToStringReturnValue1 = await knapsackItem2.toString()
		
	})
})
