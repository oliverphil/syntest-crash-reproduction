// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = null;
		const arrayElement1 = undefined;
		const arrayElement2 = "Kruskal's algorithms works only for undirected graphs";
		const possibleItems = [arrayElement, arrayElement1, arrayElement2]
		const weightLimit = 83.67394015413515;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const arrayElement3 = null;
		const arrayElement4 = undefined;
		const arrayElement5 = "Kruskal's algorithms works only for undirected graphs";
		const possibleItems1 = [arrayElement3, arrayElement4, arrayElement5]
		const weightLimit1 = 83.67394015413515;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const totalValueReturnValue = await knapsack1.totalValue
		const arrayElement6 = null;
		const arrayElement7 = undefined;
		const arrayElement8 = "Kruskal's algorithms works only for undirected graphs";
		const possibleItems2 = [arrayElement6, arrayElement7, arrayElement8]
		const weightLimit2 = 83.67394015413515;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2)
		const anon = -47;
		const solveZeroOneKnapsackProblemReturnValue = await knapsack2.solveZeroOneKnapsackProblem(anon)
		
	})
})
