// Imports
require = require('esm')(module)
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = "11111111011111111111111111111111";
		const objectPattern = new InsertionSort(anon)
		const originalArray = 97;
		const anon1 = undefined;
		const weightLimit = false;
		const sortReturnValue = await objectPattern.sort(originalArray, anon1, weightLimit)
		
	})
})
