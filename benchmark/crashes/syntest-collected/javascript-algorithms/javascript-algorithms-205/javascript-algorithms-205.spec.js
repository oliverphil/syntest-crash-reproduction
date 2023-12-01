// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import RadixSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/radix-sort/RadixSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = undefined;
		const weightLimit = "g±±sPk@`5:Eq`I| fhz";
		const anon = undefined;
		const knapsack = new Knapsack(possibleItems, weightLimit, anon)
		const totalValueReturnValue = await knapsack.totalValue
		const anon1 = null;
		const anon2 = 0.25;
		const knapsack1 = new Knapsack(anon1, anon2)
		const anon3 = null;
		const anon4 = 0.25;
		const anon5 = new RadixSort(anon4)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack1.sortPossibleItemsByValuePerWeightRatio(anon3, anon5)
		
	})
})
