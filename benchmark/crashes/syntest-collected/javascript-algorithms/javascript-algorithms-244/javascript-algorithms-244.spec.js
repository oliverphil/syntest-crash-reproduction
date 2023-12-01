// Imports
require = require('esm')(module)
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import SelectionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/selection-sort/SelectionSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = null;
		const objectPattern = new InsertionSort(anon)
		const arrayElement = new KnapsackItem(objectPattern)
		const anon1 = undefined;
		const arrayElement1 = "11000001110110010100000000000000";
		const arrayElement2 = new SelectionSort()
		const possibleItems = [arrayElement, anon1, arrayElement1, arrayElement2]
		const weightLimit = false;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const anon2 = "0011111110111001100110011001100110011001100110011001100110011010";
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack.sortPossibleItemsByValuePerWeightRatio(anon2)
		const anon3 = null;
		const objectPattern1 = new InsertionSort(anon3)
		const originalArray = 97;
		const anon4 = undefined;
		const weightLimit1 = false;
		const sortReturnValue = await objectPattern1.sort(originalArray, anon4, weightLimit1)
		
	})
})
