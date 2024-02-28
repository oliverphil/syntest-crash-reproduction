// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = -1;
		const weightLimit = {}
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const anon = -802.2810275213676;
		const anon1 = "J\t8,?%q§aB+myD M§>";
		const solveZeroOneKnapsackProblemReturnValue = await knapsack.solveZeroOneKnapsackProblem(anon, anon1)
		const possibleItems1 = -1;
		const weightLimit1 = {}
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const sortPossibleItemsByValueReturnValue = await knapsack1.sortPossibleItemsByValue()
		const possibleItems2 = -1;
		const weightLimit2 = {}
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2)
		const anon2 = false;
		const solveUnboundedKnapsackProblemReturnValue = await knapsack2.solveUnboundedKnapsackProblem(anon2)
		
	})
})
