// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = undefined;
		const arrayElement1 = false;
		const arrayElement2 = null;
		const arrayElement3 = true;
		const possibleItems = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const weightLimit = 451.15520922557107;
		const anon = () => {};
		const knapsack = new Knapsack(possibleItems, weightLimit, anon)
		const sortPossibleItemsByValueReturnValue = await knapsack.sortPossibleItemsByValue()
		const arrayElement4 = undefined;
		const arrayElement5 = false;
		const arrayElement6 = null;
		const arrayElement7 = true;
		const possibleItems1 = [arrayElement4, arrayElement5, arrayElement6, arrayElement7]
		const weightLimit1 = 451.15520922557107;
		const anon1 = () => {};
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1, anon1)
		const sortPossibleItemsByValueReturnValue1 = await knapsack1.sortPossibleItemsByValue()
		const arrayElement8 = undefined;
		const arrayElement9 = false;
		const arrayElement10 = null;
		const arrayElement11 = true;
		const possibleItems2 = [arrayElement8, arrayElement9, arrayElement10, arrayElement11]
		const weightLimit2 = 451.15520922557107;
		const anon2 = () => {};
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2, anon2)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack2.sortPossibleItemsByValuePerWeightRatio()
		
	})
})
