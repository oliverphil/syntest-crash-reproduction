// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import QuickSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSort.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const objectPattern = new QuickSort()
		const anon = -278;
		const knapsackItem = new KnapsackItem(objectPattern, anon)
		const valuePerWeightRatioReturnValue = await knapsackItem.valuePerWeightRatio
		const originalCallbacks = "The method supports only positive integers";
		const objectPattern1 = new Sort(originalCallbacks)
		const knapsackItem1 = new KnapsackItem(objectPattern1)
		const anon1 = () => {};
		const localToStringReturnValue = await knapsackItem1.toString(anon1)
		
	})
})
