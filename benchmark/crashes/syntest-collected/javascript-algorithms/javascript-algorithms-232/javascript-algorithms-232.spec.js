// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "4;gM=Jz";
		const weightLimit = -681;
		const anon = 796;
		const knapsack = new Knapsack(possibleItems, weightLimit, anon)
		const totalWeightReturnValue = await knapsack.totalWeight
		const possibleItems1 = "4;gM=Jz";
		const weightLimit1 = -681;
		const anon1 = 796;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1, anon1)
		const anon2 = 1;
		const sortPossibleItemsByWeightReturnValue = await knapsack1.sortPossibleItemsByWeight(anon2)
		const possibleItems2 = "4;gM=Jz";
		const weightLimit2 = -681;
		const anon3 = 796;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2, anon3)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack2.solveZeroOneKnapsackProblem()
		
	})
})
