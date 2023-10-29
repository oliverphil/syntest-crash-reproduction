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
		const arrayElement8 = {}
		const anon = 180;
		const solveZeroOneKnapsackProblemReturnValue = await knapsack1.solveZeroOneKnapsackProblem(arrayElement8, anon)
		const arrayElement9 = {}
		const arrayElement10 = null;
		const arrayElement11 = "../depth-first-search/depthFirstSearch";
		const arrayElement12 = () => {};
		const possibleItems2 = [arrayElement9, arrayElement10, arrayElement11, arrayElement12]
		const weightLimit2 = true;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack2.sortPossibleItemsByValuePerWeightRatio()
		const arrayElement13 = {}
		const arrayElement14 = null;
		const arrayElement15 = "../depth-first-search/depthFirstSearch";
		const arrayElement16 = () => {};
		const possibleItems3 = [arrayElement13, arrayElement14, arrayElement15, arrayElement16]
		const weightLimit3 = true;
		const knapsack3 = new Knapsack(possibleItems3, weightLimit3)
		const sortPossibleItemsByValuePerWeightRatioReturnValue1 = await knapsack3.sortPossibleItemsByValuePerWeightRatio()
		const arrayElement17 = {}
		const arrayElement18 = null;
		const arrayElement19 = "../depth-first-search/depthFirstSearch";
		const arrayElement20 = () => {};
		const possibleItems4 = [arrayElement17, arrayElement18, arrayElement19, arrayElement20]
		const weightLimit4 = true;
		const knapsack4 = new Knapsack(possibleItems4, weightLimit4)
		const sortPossibleItemsByValueReturnValue = await knapsack4.sortPossibleItemsByValue()
		
	})
})
