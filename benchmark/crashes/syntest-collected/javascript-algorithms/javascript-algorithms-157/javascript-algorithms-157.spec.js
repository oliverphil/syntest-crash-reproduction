// Imports
require = require('esm')(module)
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = 603.8516783970265;
		const objectPattern = new InsertionSort(anon)
		const knapsackItem = new KnapsackItem(objectPattern)
		const valuePerWeightRatioReturnValue = await knapsackItem.valuePerWeightRatio
		const anon1 = 603.8516783970265;
		const objectPattern1 = new InsertionSort(anon1)
		const knapsackItem1 = new KnapsackItem(objectPattern1)
		const anon2 = 603.8516783970265;
		const localToStringReturnValue = await knapsackItem1.toString(anon2)
		const anon3 = 603.8516783970265;
		const objectPattern2 = new InsertionSort(anon3)
		const value = undefined;
		const originalArray = new GraphVertex(value)
		const anon4 = () => {};
		const sortReturnValue = await objectPattern2.sort(originalArray, anon4)
		const anon5 = 603.8516783970265;
		const objectPattern3 = new InsertionSort(anon5)
		const arrayElement = true;
		const arrayElement1 = true;
		const originalArray1 = [arrayElement, arrayElement1]
		const sortReturnValue1 = await objectPattern3.sort(originalArray1)
		
	})
})
