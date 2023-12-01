// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import QuickSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "±-@\\~\\Ux1<#lPPKtLv*7=\tc\np%XH * X-`q:\\IA*0~xQ7jde7MgP8z50i<O6F,'LsLceQPV6<\"9\"§F8}u";
		const anon = "0011111111010011001100110011001100110011001100110011001100110011";
		const weightLimit = new QuickSort(anon)
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack.solveZeroOneKnapsackProblem()
		
	})
})
