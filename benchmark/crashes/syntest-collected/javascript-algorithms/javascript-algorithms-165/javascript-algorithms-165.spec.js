// Imports
require = require('esm')(module)
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = "101111111011100110011001100110P110011001100110011001100110011010";
		const objectPattern = new InsertionSort(anon)
		const originalArray = 97;
		const anon1 = undefined;
		const weightLimit = false;
		const sortReturnValue = await objectPattern.sort(originalArray, anon1, weightLimit)
		
	})
})
