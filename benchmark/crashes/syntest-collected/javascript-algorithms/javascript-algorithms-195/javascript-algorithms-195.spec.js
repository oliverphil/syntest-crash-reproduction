// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "1011110000000000";
		const weightLimit = null;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const totalValueReturnValue = await knapsack.totalValue
		const possibleItems1 = "101110000000000";
		const weightLimit1 = null;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const anon = () => {};
		const sortPossibleItemsByValueReturnValue = await knapsack1.sortPossibleItemsByValue(anon)
		const possibleItems2 = undefined;
		const anon1 = 11;
		const knapsack2 = new Knapsack(possibleItems2, anon1)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack2.solveZeroOneKnapsackProblem()
		const possibleItems3 = "1011110000000000";
		const anon2 = 11;
		const knapsack3 = new Knapsack(possibleItems3, anon2)
		const anon3 = 11;
		const solveUnboundedKnapsackProblemReturnValue = await knapsack3.solveUnboundedKnapsackProblem(anon3)
		const possibleItems4 = "1011110000000000";
		const weightLimit2 = null;
		const knapsack4 = new Knapsack(possibleItems4, weightLimit2)
		const sortPossibleItemsByValueReturnValue1 = await knapsack4.sortPossibleItemsByValue()
		
	})
})
