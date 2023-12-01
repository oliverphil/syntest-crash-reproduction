// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const countingSort = new CountingSort()
		const countingSort1 = new CountingSort()
		const anon = 100;
		const arrayElement = new InsertionSort(anon)
		const arrayElement1 = true;
		const originalArray = [arrayElement, arrayElement1]
		const assignment = undefined;
		const assignment1 = undefined;
		const sortReturnValue = await countingSort1.sort(originalArray, assignment, assignment1)
		const countingSort2 = new CountingSort()
		const originalArray1 = "../../../data-structures/graph/GraphVertex";
		const assignment2 = 1.75;
		const assignment3 = false;
		const sortReturnValue1 = await countingSort2.sort(originalArray1, assignment2, assignment3)
		const countingSort3 = new CountingSort()
		const originalArray2 = () => {};
		const arrayElement2 = true;
		const assignment4 = undefined;
		const anon1 = 100;
		const assignment5 = 1.75;
		const sortReturnValue2 = await countingSort3.sort(originalArray2, arrayElement2, assignment4, anon1, assignment5)
		
	})
})
