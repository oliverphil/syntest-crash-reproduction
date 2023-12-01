// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = null;
		const arrayElement = ",MA7cod#_BB*\n@E>a8Y&F\nrV\\c2gu'WWbu@(YWYq>";
		const arrayElement1 = []
		const possibleItems = [anon, arrayElement, arrayElement1]
		const weightLimit = -485;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack.solveZeroOneKnapsackProblem()
		
	})
})
