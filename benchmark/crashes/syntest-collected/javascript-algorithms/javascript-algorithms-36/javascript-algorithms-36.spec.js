// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = {}
		const arrayElement1 = null;
		const arrayElement2 = "../depth-first-search/depthFirstSearch";
		const arrayElement3 = () => {};
		const possibleItems = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const weightLimit = true;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const arrayElement4 = {}
		const arrayElement5 = null;
		const arrayElement6 = "../depth-first-search/depthFirstSearch";
		const arrayElement7 = () => {};
		const possibleItems1 = [arrayElement4, arrayElement5, arrayElement6, arrayElement7]
		const weightLimit1 = true;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack1.sortPossibleItemsByValuePerWeightRatio()
		const arrayElement8 = {}
		const arrayElement9 = null;
		const arrayElement10 = "../depth-first-search/depthFirstSearch";
		const arrayElement11 = () => {};
		const possibleItems2 = [arrayElement8, arrayElement9, arrayElement10, arrayElement11]
		const weightLimit2 = true;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2)
		const sortPossibleItemsByValuePerWeightRatioReturnValue1 = await knapsack2.sortPossibleItemsByValuePerWeightRatio()
		const arrayElement12 = {}
		const arrayElement13 = null;
		const arrayElement14 = "../depth-first-search/depthFirstSearch";
		const arrayElement15 = () => {};
		const possibleItems3 = [arrayElement12, arrayElement13, arrayElement14, arrayElement15]
		const weightLimit3 = true;
		const knapsack3 = new Knapsack(possibleItems3, weightLimit3)
		const sortPossibleItemsByValueReturnValue = await knapsack3.sortPossibleItemsByValue()
		
	})
})
