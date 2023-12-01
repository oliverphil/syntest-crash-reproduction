// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = "00111110100110011001100110011010";
		const arrayElement1 = ",MA7cod#_BB*\n@E>a8Y&F\nrV\\c2gu'WWbu@(YWYq>";
		const arrayElement2 = false;
		const possibleItems = [arrayElement, arrayElement1, arrayElement2]
		const originalCallbacks = 97;
		const weightLimit = new Sort(originalCallbacks)
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack.solveZeroOneKnapsackProblem()
		
	})
})
