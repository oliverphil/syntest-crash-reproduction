// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import ShellSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/shell-sort/ShellSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const countingSort = new CountingSort()
		const arrayElement = () => {};
		const anon = 30;
		const anon1 = null;
		const arrayElement1 = new ShellSort(anon, anon1)
		const arrayElement2 = false;
		const originalArray = [arrayElement, arrayElement1, arrayElement2]
		const assignment = false;
		const assignment1 = true;
		const sortReturnValue = await countingSort.sort(originalArray, assignment, assignment1)
		const countingSort1 = new CountingSort()
		const arrayElement3 = () => {};
		const arrayElement4 = 472.56480508398135;
		const arrayElement5 = false;
		const originalArray1 = [arrayElement3, arrayElement4, arrayElement5]
		const assignment2 = undefined;
		const assignment3 = undefined;
		const sortReturnValue1 = await countingSort1.sort(originalArray1, assignment2, assignment3)
		
	})
})
