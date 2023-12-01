// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const countingSort = new CountingSort()
		const originalArray = true;
		const assignment = 6;
		const assignment1 = undefined;
		const anon = () => {};
		const originalCallbacks = "J±%Ba\"(I=|_eVFJt§uK,1m";
		const anon1 = 26;
		const anon2 = new Sort(originalCallbacks, anon1)
		const sortReturnValue = await countingSort.sort(originalArray, assignment, assignment1, anon, anon2)
		const countingSort1 = new CountingSort()
		const arrayElement = null;
		const arrayElement1 = () => {};
		const originalArray1 = [arrayElement, arrayElement1]
		const assignment2 = {}
		const assignment3 = undefined;
		const originalCallbacks1 = "J±%Ba\"(I=|_eVFJt§uK,1m";
		const anon3 = () => {};
		const sortReturnValue1 = await countingSort1.sort(originalArray1, assignment2, assignment3, originalCallbacks1, anon3)
		const countingSort2 = new CountingSort()
		const countingSort3 = new CountingSort()
		const assignment4 = {}
		const assignment5 = 134.99999;
		const assignment6 = undefined;
		const sortReturnValue2 = await countingSort3.sort(assignment4, assignment5, assignment6)
		
	})
})
