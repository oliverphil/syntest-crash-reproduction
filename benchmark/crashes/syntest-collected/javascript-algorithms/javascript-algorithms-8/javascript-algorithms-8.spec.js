// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import HeapSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/heap-sort/HeapSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const countingSort = new CountingSort()
		const arrayElement = () => {};
		const arrayElement1 = 472.56480508398135;
		const arrayElement2 = 52;
		const originalArray = [arrayElement, arrayElement1, arrayElement2]
		const arrayElement3 = 472.56480508398135;
		const assignment = new HeapSort(arrayElement3)
		const assignment1 = true;
		const sortReturnValue = await countingSort.sort(originalArray, assignment, assignment1)
		const countingSort1 = new CountingSort()
		const arrayElement4 = () => {};
		const arrayElement5 = 472.56480508398135;
		const arrayElement6 = false;
		const originalArray1 = [arrayElement4, arrayElement5, arrayElement6]
		const assignment2 = undefined;
		const assignment3 = undefined;
		const sortReturnValue1 = await countingSort1.sort(originalArray1, assignment2, assignment3)
		
	})
})
