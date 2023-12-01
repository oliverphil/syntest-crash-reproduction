// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const objectPattern = {}
		const arrayElement = 0.75;
		const objectPattern1 = [arrayElement]
		const anon = false;
		const anon1 = () => {};
		const anon2 = new KnapsackItem(objectPattern1, anon, anon1)
		const knapsackItem = new KnapsackItem(objectPattern, anon2)
		const totalValueReturnValue = await knapsackItem.totalValue
		const originalCallbacks = -243.1725434048834;
		const anon3 = {}
		const objectPattern2 = new Sort(originalCallbacks, anon3)
		const anon4 = null;
		const knapsackItem1 = new KnapsackItem(objectPattern2, anon4)
		const anon5 = -540;
		const localToStringReturnValue = await knapsackItem1.toString(anon5)
		
	})
})
