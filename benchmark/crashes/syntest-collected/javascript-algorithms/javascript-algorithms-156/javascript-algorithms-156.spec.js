// Imports
require = require('esm')(module)
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import SelectionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/selection-sort/SelectionSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = "00111110100110011001100110011010";
		const objectPattern = new InsertionSort(arrayElement)
		const arrayElement1 = new KnapsackItem(objectPattern)
		const arrayElement2 = 94.49076598608576;
		const arrayElement3 = "11000001110110010100000000000000";
		const arrayElement4 = new SelectionSort()
		const possibleItems = [arrayElement1, arrayElement2, arrayElement3, arrayElement4]
		const weightLimit = false;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack.solveZeroOneKnapsackProblem()
		const possibleItems1 = "10111101101100100110)11001101";
		const weightLimit1 = {}
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const sortPossibleItemsByValueReturnValue = await knapsack1.sortPossibleItemsByValue()
		const anon = null;
		const objectPattern1 = new InsertionSort(anon)
		const arrayElement5 = new KnapsackItem(objectPattern1)
		const arrayElement6 = "s,T#x±/x%tofen\n$O:y/[]CDHU=:!hf(mDl#±6RHb;2/=AY0Q[o8^5eX{)1^>{ Tl0dLg{J";
		const arrayElement7 = "11000001110110010100000000000000";
		const arrayElement8 = new SelectionSort()
		const possibleItems2 = [arrayElement5, arrayElement6, arrayElement7, arrayElement8]
		const weightLimit2 = true;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2)
		const anon1 = false;
		const solveUnboundedKnapsackProblemReturnValue = await knapsack2.solveUnboundedKnapsackProblem(anon1)
		
	})
})
