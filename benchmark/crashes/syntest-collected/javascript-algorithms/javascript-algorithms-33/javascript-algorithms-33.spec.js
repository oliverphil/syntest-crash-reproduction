// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = undefined;
		const arrayElement1 = new RedBlackTree()
		const arrayElement2 = 864.6501664554255;
		const arrayElement3 = () => {};
		const possibleItems = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const arrayElement4 = undefined;
		const weightLimit = [arrayElement4]
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack.solveZeroOneKnapsackProblem()
		const arrayElement5 = undefined;
		const arrayElement6 = new RedBlackTree()
		const arrayElement7 = 864.6501664554255;
		const arrayElement8 = () => {};
		const possibleItems1 = [arrayElement5, arrayElement6, arrayElement7, arrayElement8]
		const arrayElement9 = undefined;
		const weightLimit1 = [arrayElement9]
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const sortPossibleItemsByWeightReturnValue = await knapsack1.sortPossibleItemsByWeight()
		const arrayElement10 = new RedBlackTree()
		const arrayElement11 = 864.6501664554255;
		const anon = () => {};
		const isNodeColoredReturnValue = await arrayElement10.isNodeColored(arrayElement11, anon)
		
	})
})
