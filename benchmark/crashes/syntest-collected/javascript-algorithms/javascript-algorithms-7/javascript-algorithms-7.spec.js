// Imports
require = require('esm')(module)
import DisjointSetItem from "../instrumented/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import HeapSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/heap-sort/HeapSort.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = -734;
		const anon = -918;
		const keyCallback = new HeapSort(anon)
		const anon1 = () => {};
		const anon2 = -913;
		const objectPattern = new DisjointSetItem(value, keyCallback, anon1, anon2)
		const knapsackItem = new KnapsackItem(objectPattern)
		const localToStringReturnValue = await knapsackItem.toString()
		const value1 = -734;
		const anon3 = -918;
		const keyCallback1 = new HeapSort(anon3)
		const anon4 = () => {};
		const anon5 = -913;
		const objectPattern1 = new DisjointSetItem(value1, keyCallback1, anon4, anon5)
		const knapsackItem1 = new KnapsackItem(objectPattern1)
		const valuePerWeightRatioReturnValue = await knapsackItem1.valuePerWeightRatio
		
	})
})
