// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";
import {SortTester} from "../instrumented/javascript-algorithms/src/algorithms/sorting/SortTester.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const objectPattern = {}
		const knapsackItem = new KnapsackItem(objectPattern)
		const totalWeightReturnValue = await knapsackItem.totalWeight
		const objectPattern1 = new SortTester()
		const originalCallbacks = "./BinarySearchTreeNode";
		const anon = 9;
		const anon1 = false;
		const sortingClass = new Sort(originalCallbacks, anon, anon1)
		const testSortWithCustomComparatorReturnValue = await objectPattern1.testSortWithCustomComparator(sortingClass)
		const objectPattern2 = new SortTester()
		const sortingClass1 = undefined;
		const anon2 = null;
		const testSortWithCustomComparatorReturnValue1 = await objectPattern2.testSortWithCustomComparator(sortingClass1, anon2)
		const arrayElement = undefined;
		const arrayElement1 = false;
		const arrayElement2 = true;
		const originalCallbacks1 = [arrayElement, arrayElement1, arrayElement2]
		const sortingClass2 = new Sort(originalCallbacks1)
		const sortReturnValue = await sortingClass2.sort()
		
	})
})
