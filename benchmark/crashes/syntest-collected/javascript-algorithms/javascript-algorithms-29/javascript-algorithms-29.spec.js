// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = null;
		const weightLimit = undefined;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const totalWeightReturnValue = await knapsack.totalWeight
		const possibleItems1 = null;
		const weightLimit1 = undefined;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const sortPossibleItemsByWeightReturnValue = await knapsack1.sortPossibleItemsByWeight()
		const possibleItems2 = null;
		const weightLimit2 = undefined;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack2.sortPossibleItemsByValuePerWeightRatio()
		const possibleItems3 = null;
		const weightLimit3 = undefined;
		const knapsack3 = new Knapsack(possibleItems3, weightLimit3)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack3.solveZeroOneKnapsackProblem()
		
	})
})
