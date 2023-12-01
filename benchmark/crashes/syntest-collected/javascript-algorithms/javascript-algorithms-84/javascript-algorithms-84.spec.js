// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import Queue from "../instrumented/javascript-algorithms/src/data-structures/queue/Queue.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = 0.75;
		const weightLimit = new Queue()
		const anon = false;
		const knapsack = new Knapsack(possibleItems, weightLimit, anon)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack.sortPossibleItemsByValuePerWeightRatio()
		const possibleItems1 = 0.75;
		const weightLimit1 = new Queue()
		const anon1 = false;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1, anon1)
		const sortPossibleItemsByWeightReturnValue = await knapsack1.sortPossibleItemsByWeight()
		const possibleItems2 = 0.75;
		const weightLimit2 = new Queue()
		const anon2 = false;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2, anon2)
		const arrayElement = undefined;
		const possibleItems3 = 0.75;
		const arrayElement1 = "1111111111101111111111111111111111111111111111111111111111111111";
		const arrayElement2 = null;
		const anon3 = [arrayElement, possibleItems3, arrayElement1, arrayElement2]
		const solveZeroOneKnapsackProblemReturnValue = await knapsack2.solveZeroOneKnapsackProblem(anon3)
		
	})
})
