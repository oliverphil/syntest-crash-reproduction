// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "./DisjointSetItem";
		const weightLimit = "0000000001001100";
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack.solveZeroOneKnapsackProblem()
		const possibleItems1 = "./DisjointSetItem";
		const weightLimit1 = "0000000001001100";
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack1.sortPossibleItemsByValuePerWeightRatio()
		
	})
})
