// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = -463.69920202596927;
		const arrayElement1 = null;
		const arrayElement2 = () => {};
		const possibleItems = [arrayElement, arrayElement1, arrayElement2]
		const weightLimit = () => {};
		const anon = -1;
		const objectPattern = new Knapsack(possibleItems, weightLimit, anon)
		const knapsackItem = new KnapsackItem(objectPattern)
		const totalValueReturnValue = await knapsackItem.totalValue
		const arrayElement3 = -463.69920202596927;
		const arrayElement4 = null;
		const arrayElement5 = () => {};
		const possibleItems1 = [arrayElement3, arrayElement4, arrayElement5]
		const weightLimit1 = () => {};
		const anon1 = -1;
		const objectPattern1 = new Knapsack(possibleItems1, weightLimit1, anon1)
		const solveZeroOneKnapsackProblemReturnValue = await objectPattern1.solveZeroOneKnapsackProblem()
		
	})
})
