// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = {}
		const weightLimit = ":;o\nMZ%ry9\\N==K-u=Rh1P\">@S8Z}!Y3\"Qz9-<*<;O$%WP\\>4wSWTxS)§Lc]uLQF";
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const totalValueReturnValue = await knapsack.totalValue
		const possibleItems1 = {}
		const weightLimit1 = ":;o\nMZ%ry9\\N==K-u=Rh1P\">@S8Z}!Y3\"Qz9-<*<;O$%WP\\>4wSWTxS)§Lc]uLQF";
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const arrayElement = 1;
		const arrayElement1 = true;
		const anon = [arrayElement, arrayElement1]
		const solveUnboundedKnapsackProblemReturnValue = await knapsack1.solveUnboundedKnapsackProblem(anon)
		const possibleItems2 = {}
		const weightLimit2 = ":;o\nMZ%ry9\\N==K-u=Rh1P\">@S8Z}!Y3\"Qz9-<*<;O$%WP\\>4wSWTxS)§Lc]uLQF";
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2)
		const possibleItems3 = {}
		const anon1 = 0;
		const solveZeroOneKnapsackProblemReturnValue = await knapsack2.solveZeroOneKnapsackProblem(possibleItems3, anon1)
		
	})
})
