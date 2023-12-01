// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = null;
		const weightLimit = false;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const totalWeightReturnValue = await knapsack.totalWeight
		const possibleItems1 = null;
		const weightLimit1 = false;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack1.solveZeroOneKnapsackProblem()
		const possibleItems2 = null;
		const weightLimit2 = false;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2)
		const sortPossibleItemsByValueReturnValue = await knapsack2.sortPossibleItemsByValue()
		const possibleItems3 = null;
		const weightLimit3 = false;
		const knapsack3 = new Knapsack(possibleItems3, weightLimit3)
		const anon = ",k+tzfSBk7§mw=|,(Y±$3;=Z-iI";
		const sortPossibleItemsByValueReturnValue1 = await knapsack3.sortPossibleItemsByValue(anon)
		
	})
})
