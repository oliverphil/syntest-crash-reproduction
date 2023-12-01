// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const originalCallbacks = "The method supports only psitive integers";
		const objectPattern = new Sort(originalCallbacks)
		const knapsackItem = new KnapsackItem(objectPattern)
		const totalValueReturnValue = await knapsackItem.totalValue
		const objectPattern1 = {}
		const knapsackItem1 = new KnapsackItem(objectPattern1)
		const anon = null;
		const localToStringReturnValue = await knapsackItem1.toString(anon)
		const objectPattern2 = {}
		const knapsackItem2 = new KnapsackItem(objectPattern2)
		const anon1 = "../../../data-structures/graph/GraphVertex";
		const localToStringReturnValue1 = await knapsackItem2.toString(anon1)
		
	})
})
