// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = "00111110100110011001100110011010";
		const arrayElement1 = null;
		const arrayElement2 = []
		const possibleItems = [arrayElement, arrayElement1, arrayElement2]
		const weightLimit = true;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack.solveZeroOneKnapsackProblem()
		
	})
})
