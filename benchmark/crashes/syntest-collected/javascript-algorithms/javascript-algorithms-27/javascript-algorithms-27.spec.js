// Imports
require = require('esm')(module)
import BinaryTreeNode from "../instrumented/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import QuickSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = -559;
		const objectPattern = new QuickSort(anon)
		const anon1 = 17;
		const knapsackItem = new KnapsackItem(objectPattern, anon1)
		const totalWeightReturnValue = await knapsackItem.totalWeight
		const anon2 = 10345.5595703125;
		const anon3 = "z6*ZF.}rs)wZ}Ku5$J+*^e-Q?hn<po^SbSW(=fQpjwRQhIsvBa";
		const objectPattern1 = new QuickSort(anon2, anon3)
		const anon4 = 10345.5595703125;
		const anon5 = "z6*ZF.}rs)wZ}Ku5$J+*^e-Q?hn<po^SbSW(=fQpjwRQhIsvBa";
		const objectPattern2 = new QuickSort(anon4, anon5)
		const sortReturnValue = await objectPattern1.sort(objectPattern2)
		const anon6 = 10345.5595703125;
		const anon7 = "z6*ZF.}rs)wZ}Ku5$J+*^e-Q?hn<po^SbSW(=fQpjwRQhIsvBa";
		const objectPattern3 = new QuickSort(anon6, anon7)
		const assignment = undefined;
		const originalArray = new BinaryTreeNode(assignment)
		const anon8 = undefined;
		const anon9 = "z6*ZF.}rs)wZ}Ku5$J+*^e-Q?hn<po^SbSW(=fQpjwRQhIsvBa";
		const sortReturnValue1 = await objectPattern3.sort(originalArray, anon8, anon9)
		
	})
})
