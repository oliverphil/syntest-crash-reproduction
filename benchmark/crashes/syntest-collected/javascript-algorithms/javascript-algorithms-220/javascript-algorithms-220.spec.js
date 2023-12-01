// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = null;
		const weightLimit = 366;
		const arrayElement = 37;
		const arrayElement1 = [arrayElement]
		const arrayElement2 = undefined;
		const anon = [arrayElement1, arrayElement2]
		const knapsack = new Knapsack(possibleItems, weightLimit, anon)
		const solveUnboundedKnapsackProblemReturnValue = await knapsack.solveUnboundedKnapsackProblem()
		const possibleItems1 = null;
		const weightLimit1 = 366;
		const arrayElement3 = 37;
		const arrayElement4 = [arrayElement3]
		const arrayElement5 = undefined;
		const anon1 = [arrayElement4, arrayElement5]
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1, anon1)
		const anon2 = () => {};
		const solveZeroOneKnapsackProblemReturnValue = await knapsack1.solveZeroOneKnapsackProblem(anon2)
		const possibleItems2 = null;
		const weightLimit2 = 366;
		const arrayElement6 = 37;
		const arrayElement7 = [arrayElement6]
		const arrayElement8 = undefined;
		const anon3 = [arrayElement7, arrayElement8]
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2, anon3)
		const anon4 = true;
		const solveZeroOneKnapsackProblemReturnValue1 = await knapsack2.solveZeroOneKnapsackProblem(anon4)
		
	})
})
