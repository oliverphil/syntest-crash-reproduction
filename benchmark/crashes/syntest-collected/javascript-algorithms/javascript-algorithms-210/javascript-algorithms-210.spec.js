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
		const possibleItems1 = undefined;
		const weightLimit1 = "g±±sPk@`5:Eq`I| fhz";
		const arrayElement = "s,T#x±/x%tofen\n$O:y/[]CDHU=:!hf(mDl#±6RHb;2/=AY0Q[o8^5eX{)1^>{ Tl0dLg{J";
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1, arrayElement)
		const anon1 = null;
		const anon2 = "../BinaryTreeNode";
		const anon3 = new RadixSort(anon2)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack1.sortPossibleItemsByValuePerWeightRatio(anon1, anon3)
		
	})
})
