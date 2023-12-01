// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = true;
		const weightLimit = 60.68046814448758;
		const anon = () => {};
		const knapsack = new Knapsack(possibleItems, weightLimit, anon)
		const totalWeightReturnValue = await knapsack.totalWeight
		const possibleItems1 = true;
		const weightLimit1 = 60.68046814448758;
		const anon1 = () => {};
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1, anon1)
		const anon2 = 554;
		const anon3 = null;
		const solveUnboundedKnapsackProblemReturnValue = await knapsack1.solveUnboundedKnapsackProblem(anon2, anon3)
		const possibleItems2 = true;
		const weightLimit2 = 60.68046814448758;
		const anon4 = () => {};
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2, anon4)
		const anon5 = {}
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack2.sortPossibleItemsByValuePerWeightRatio(anon5)
		
	})
})
