// Imports
require = require('esm')(module)
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import SelectionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/selection-sort/SelectionSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "1011110111001100110011011001101";
		const weightLimit = {}
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack.solveZeroOneKnapsackProblem()
		const possibleItems1 = "6}XU";
		const weightLimit1 = "\"Y`5iO-7@?~1c/8&X)jl@I}ZOHC\\z+tBhF\"#{d[@C+%y,CJEB@\tv5XR*.,0cP\nD\nNo±=k";
		const anon = "-g?";
		const possibleItems2 = -75;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1, anon, possibleItems2)
		const sortPossibleItemsByValueReturnValue = await knapsack1.sortPossibleItemsByValue()
		const anon1 = null;
		const objectPattern = new InsertionSort(anon1)
		const arrayElement = new KnapsackItem(objectPattern)
		const anon2 = null;
		const arrayElement1 = "11000001110110010100000000000000";
		const arrayElement2 = new SelectionSort()
		const possibleItems3 = [arrayElement, anon2, arrayElement1, arrayElement2]
		const weightLimit2 = true;
		const knapsack2 = new Knapsack(possibleItems3, weightLimit2)
		const anon3 = true;
		const solveUnboundedKnapsackProblemReturnValue = await knapsack2.solveUnboundedKnapsackProblem(anon3)
		
	})
})
