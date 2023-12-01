// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const countingSort = new CountingSort()
		const anon = -688.6913524785332;
		const countingSort1 = new CountingSort(anon)
		const anon1 = -480;
		const originalArray = [anon1]
		const assignment = true;
		const assignment1 = undefined;
		const anon2 = -480;
		const anon3 = undefined;
		const sortReturnValue = await countingSort1.sort(originalArray, assignment, assignment1, anon2, anon3)
		
	})
})
