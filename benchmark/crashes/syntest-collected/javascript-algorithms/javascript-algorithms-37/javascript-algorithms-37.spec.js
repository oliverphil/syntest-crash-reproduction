// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import RadixSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/radix-sort/RadixSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = null;
		const anon1 = 0.25;
		const knapsack = new Knapsack(anon, anon1)
		const anon2 = null;
		const anon3 = 0.25;
		const anon4 = new RadixSort(anon3)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack.sortPossibleItemsByValuePerWeightRatio(anon2, anon4)
		
	})
})
