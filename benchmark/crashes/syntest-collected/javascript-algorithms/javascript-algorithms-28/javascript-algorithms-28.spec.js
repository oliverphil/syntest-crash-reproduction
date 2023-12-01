// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import RadixSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/radix-sort/RadixSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = null;
		const arrayElement1 = {}
		const objectPattern = [arrayElement, arrayElement1]
		const anon = "../../../data-structures/graph/GraphVertex";
		const anon1 = new RadixSort(anon)
		const knapsackItem = new KnapsackItem(objectPattern, anon1)
		const valuePerWeightRatioReturnValue = await knapsackItem.valuePerWeightRatio
		const anon2 = "../../../data-structures/graph/GraphVertex";
		const anon3 = new RadixSort(anon2)
		const arrayElement2 = null;
		const arrayElement3 = {}
		const objectPattern1 = [arrayElement2, arrayElement3]
		const isArrayOfNumbersReturnValue = await anon3.isArrayOfNumbers(objectPattern1)
		const anon4 = "../../../data-structures/graph/GraphVertex";
		const anon5 = new RadixSort(anon4)
		const arrayElement4 = null;
		const arrayElement5 = {}
		const objectPattern2 = [arrayElement4, arrayElement5]
		const arrayElement6 = {}
		const anon6 = () => {};
		const isArrayOfNumbersReturnValue1 = await anon5.isArrayOfNumbers(objectPattern2, arrayElement6, anon6)
		const anon7 = "../../../data-structures/graph/GraphVertex";
		const anon8 = new RadixSort(anon7)
		const arrayElement7 = {}
		const index = 658.0468668140859;
		const placeElementsInNumberBucketsReturnValue = await anon8.placeElementsInNumberBuckets(arrayElement7, index)
		
	})
})
