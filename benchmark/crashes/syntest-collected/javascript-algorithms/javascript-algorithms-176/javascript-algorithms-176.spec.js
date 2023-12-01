// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import QuickSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const objectPattern = new QuickSort()
		const anon = -278;
		const knapsackItem = new KnapsackItem(objectPattern, anon)
		const valuePerWeightRatioReturnValue = await knapsackItem.valuePerWeightRatio
		const anon1 = 10345.5595703125;
		const anon2 = "z6*ZF.}rs)wZ}Ku5$J+*^e-Q?hn<po^SbSW(=fQpjwRQhIsvBa";
		const objectPattern1 = new QuickSort(anon1, anon2)
		const anon3 = -280;
		const knapsackItem1 = new KnapsackItem(objectPattern1, anon3)
		const anon4 = () => {};
		const localToStringReturnValue = await knapsackItem1.toString(anon4)
		
	})
})
