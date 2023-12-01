// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const originalCallbacks = -243.1725434048834;
		const anon = {}
		const objectPattern = new Sort(originalCallbacks, anon)
		const anon1 = null;
		const knapsackItem = new KnapsackItem(objectPattern, anon1)
		const totalWeightReturnValue = await knapsackItem.totalWeight
		const originalCallbacks1 = -243.1725434048834;
		const anon2 = {}
		const objectPattern1 = new Sort(originalCallbacks1, anon2)
		const anon3 = null;
		const knapsackItem1 = new KnapsackItem(objectPattern1, anon3)
		const localToStringReturnValue = await knapsackItem1.toString()
		const originalCallbacks2 = -243.1725434048834;
		const anon4 = {}
		const objectPattern2 = new Sort(originalCallbacks2, anon4)
		const anon5 = null;
		const knapsackItem2 = new KnapsackItem(objectPattern2, anon5)
		const localToStringReturnValue1 = await knapsackItem2.toString()
		
	})
})
