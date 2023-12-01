// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import QuickSortInPlace from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSortInPlace.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const countingSort = new CountingSort()
		const originalArray = "bbbb";
		const assignment = undefined;
		const assignment1 = false;
		const anon = -252;
		const anon1 = 70;
		const anon2 = new QuickSortInPlace(anon, anon1)
		const sortReturnValue = await countingSort.sort(originalArray, assignment, assignment1, anon2)
		const countingSort1 = new CountingSort()
		const originalArray1 = "bbbb";
		const originalArray2 = [originalArray1]
		const assignment2 = undefined;
		const assignment3 = undefined;
		const sortReturnValue1 = await countingSort1.sort(originalArray2, assignment2, assignment3)
		
	})
})
