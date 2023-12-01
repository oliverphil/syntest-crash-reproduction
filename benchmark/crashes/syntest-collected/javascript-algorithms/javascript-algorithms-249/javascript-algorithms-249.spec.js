// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import LinkedList from "../instrumented/javascript-algorithms/src/data-structures/linked-list/LinkedList.js";
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const objectPattern = new RedBlackTree()
		const knapsackItem = new KnapsackItem(objectPattern)
		const valuePerWeightRatioReturnValue = await knapsackItem.valuePerWeightRatio
		const anon = true;
		const comparatorFunction = "0111101111111111";
		const anon1 = new LinkedList(comparatorFunction)
		const objectPattern1 = new CountingSort(anon, anon1)
		const knapsackItem1 = new KnapsackItem(objectPattern1)
		const totalWeightReturnValue = await knapsackItem1.totalWeight
		
	})
})
