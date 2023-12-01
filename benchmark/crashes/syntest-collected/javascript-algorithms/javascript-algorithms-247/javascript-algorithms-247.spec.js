// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "./DisjointSetItem";
		const weightLimit = "0000000001001100";
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const sortPossibleItemsByValueReturnValue = await knapsack.sortPossibleItemsByValue()
		const possibleItems1 = "./DisjointSetItem";
		const weightLimit1 = "0000000001001100";
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack1.solveZeroOneKnapsackProblem()
		const possibleItems2 = "./DisjointSetItem";
		const weightLimit2 = "0000000001001100";
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack2.sortPossibleItemsByValuePerWeightRatio()
		const arrayElement = () => {};
		const arrayElement1 = false;
		const arrayElement2 = false;
		const possibleItems3 = [arrayElement, arrayElement1, arrayElement2]
		const weightLimit3 = -43.21278187898554;
		const anon = "igoQ?cgz6";
		const knapsack3 = new Knapsack(possibleItems3, weightLimit3, anon)
		const solveUnboundedKnapsackProblemReturnValue = await knapsack3.solveUnboundedKnapsackProblem()
		
	})
})
