// Imports
require = require('esm')(module)
import BubbleSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/bubble-sort/BubbleSort.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = -955.6913960703118;
		const objectPattern = new BubbleSort(anon)
		const knapsackItem = new KnapsackItem(objectPattern)
		const totalValueReturnValue = await knapsackItem.totalValue
		const objectPattern1 = {}
		const knapsackItem1 = new KnapsackItem(objectPattern1)
		const localToStringReturnValue = await knapsackItem1.toString()
		
	})
})
