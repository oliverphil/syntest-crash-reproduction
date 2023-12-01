// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "1011110000000000";
		const arrayElement = "11000001110110010100000000000000";
		const knapsack = new Knapsack(possibleItems, arrayElement)
		const totalValueReturnValue = await knapsack.totalValue
		const possibleItems1 = "101110000000000";
		const weightLimit = null;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit)
		const anon = () => {};
		const sortPossibleItemsByValueReturnValue = await knapsack1.sortPossibleItemsByValue(anon)
		const arrayElement1 = "00111110100110011001100110011010";
		const anon1 = undefined;
		const arrayElement2 = []
		const possibleItems2 = [arrayElement1, anon1, arrayElement2]
		const weightLimit1 = true;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit1)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack2.solveZeroOneKnapsackProblem()
		const possibleItems3 = "1011110000000000";
		const arrayElement3 = "11000001110110010100000000000M00";
		const knapsack3 = new Knapsack(possibleItems3, arrayElement3)
		const anon2 = 11;
		const solveUnboundedKnapsackProblemReturnValue = await knapsack3.solveUnboundedKnapsackProblem(anon2)
		const possibleItems4 = "1011110000000000";
		const weightLimit2 = null;
		const knapsack4 = new Knapsack(possibleItems4, weightLimit2)
		const sortPossibleItemsByValueReturnValue1 = await knapsack4.sortPossibleItemsByValue()
		
	})
})
