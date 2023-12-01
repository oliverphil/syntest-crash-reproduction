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
		const arrayElement = () => {};
		const arrayElement1 = false;
		const arrayElement2 = false;
		const possibleItems2 = [arrayElement, arrayElement1, arrayElement2]
		const weightLimit2 = -43.21278187898554;
		const anon = "igoQ?cgz6";
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2, anon)
		const solveUnboundedKnapsackProblemReturnValue = await knapsack2.solveUnboundedKnapsackProblem()
		
	})
})
