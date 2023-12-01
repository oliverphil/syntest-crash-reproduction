// Imports
require = require('esm')(module)
import BubbleSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/bubble-sort/BubbleSort.js";
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "0011111110000000";
		const weightLimit = () => {};
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const sortPossibleItemsByValueReturnValue = await knapsack.sortPossibleItemsByValue()
		const possibleItems1 = "0011111110000000";
		const weightLimit1 = () => {};
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const anon = null;
		const solveZeroOneKnapsackProblemReturnValue = await knapsack1.solveZeroOneKnapsackProblem(anon)
		const possibleItems2 = undefined;
		const weightLimit2 = {}
		const anon1 = 0.300048828125;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2, anon1)
		const anon2 = new BubbleSort()
		const solveUnboundedKnapsackProblemReturnValue = await knapsack2.solveUnboundedKnapsackProblem(anon2)
		
	})
})
