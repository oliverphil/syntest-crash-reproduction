// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import RadixSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/radix-sort/RadixSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = undefined;
		const weightLimit = "g±±sPk@@5:Eq`I| fhz";
		const anon = undefined;
		const knapsack = new Knapsack(possibleItems, weightLimit, anon)
		const totalValueReturnValue = await knapsack.totalValue
		const possibleItems1 = undefined;
		const weightLimit1 = "g±±sPk@`5:Eq`I| fhz";
		const anon1 = undefined;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1, anon1)
		const anon2 = null;
		const arrayElement = 94.49076598608576;
		const anon3 = new RadixSort(arrayElement)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack1.sortPossibleItemsByValuePerWeightRatio(anon2, anon3)
		
	})
})
