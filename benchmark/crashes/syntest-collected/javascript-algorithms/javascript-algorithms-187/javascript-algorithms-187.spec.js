// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = -75;
		const weightLimit = null;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack.solveZeroOneKnapsackProblem()
		const possibleItems1 = -75;
		const weightLimit1 = null;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const sortPossibleItemsByValueReturnValue = await knapsack1.sortPossibleItemsByValue()
		const possibleItems2 = "6}XU";
		const weightLimit2 = "\"Y`5iO-7@?~1c/8&X)jl@I}ZOHC\\z+tBhF\"#{d[@C+%y,CJEB@\tv5XR*.,0cP\nD\nNo±=k";
		const anon = "-Sg?";
		const possibleItems3 = -75;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2, anon, possibleItems3)
		const anon1 = {}
		const sortPossibleItemsByValueReturnValue1 = await knapsack2.sortPossibleItemsByValue(anon1)
		
	})
})
