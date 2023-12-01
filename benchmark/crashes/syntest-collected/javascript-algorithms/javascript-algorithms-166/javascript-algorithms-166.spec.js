// Imports
require = require('esm')(module)
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 94.49076598608576;
		const objectPattern = new InsertionSort(arrayElement)
		const originalArray = 97;
		const anon = undefined;
		const weightLimit = () => {};
		const sortReturnValue = await objectPattern.sort(originalArray, anon, weightLimit)
		
	})
})
