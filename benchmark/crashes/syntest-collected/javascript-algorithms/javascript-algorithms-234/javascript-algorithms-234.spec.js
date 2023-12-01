// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = null;
		const weightLimit = () => {};
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const totalValueReturnValue = await knapsack.totalValue
		const possibleItems1 = null;
		const weightLimit1 = () => {};
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const anon = -554.9145020594747;
		const solveUnboundedKnapsackProblemReturnValue = await knapsack1.solveUnboundedKnapsackProblem(anon)
		
	})
})
