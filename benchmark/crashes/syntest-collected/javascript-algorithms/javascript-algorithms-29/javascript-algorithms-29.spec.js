// Imports
require = require('esm')(module)
import BinaryTreeNode from "../instrumented/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import QuickSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = 10352;
		const anon1 = "z6*ZF.}rs)wZ}Ku5$J+*^e-Q?hn<po^SbSW(=fQpjwRQhIsvBa";
		const objectPattern = new QuickSort(anon, anon1)
		const anon2 = 23;
		const knapsackItem = new KnapsackItem(objectPattern, anon2)
		const totalWeightReturnValue = await knapsackItem.totalWeight
		const anon3 = 10345.5595703125;
		const anon4 = "z6*ZF.}rs)wZ}Ku5$J+*^e-Q?hn<po^SbSW(=fQpjwRQhIsvBa";
		const objectPattern1 = new QuickSort(anon3, anon4)
		const anon5 = 10345.5595703125;
		const anon6 = "z6*ZF.}rs)wZ}Ku5$J+*^e-Q?hn<po^SbSW(=fQpjwRQhIsvBa";
		const objectPattern2 = new QuickSort(anon5, anon6)
		const sortReturnValue = await objectPattern1.sort(objectPattern2)
		const anon7 = 10345.5595703125;
		const anon8 = "z6*ZF.}rs)wZ}Ku5$J+*^e-Q?hn<po^SbSW(=fQpjwRQhIsvBa";
		const objectPattern3 = new QuickSort(anon7, anon8)
		const assignment = undefined;
		const originalArray = new BinaryTreeNode(assignment)
		const anon9 = 554.1153128575834;
		const anon10 = "z6*ZF.}rs)wZ}Ku5$J+*^e-Q?hn<po^SbSW(=fQpjwRQhIsvBa";
		const sortReturnValue1 = await objectPattern3.sort(originalArray, anon9, anon10)
		
	})
})
