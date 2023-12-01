// Imports
require = require('esm')(module)
import MergeSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/merge-sort/MergeSort.js";
import {getCellAtIndex} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const m = {}
		const arrayElement = undefined;
		const anon = 0.2;
		const anon1 = 0.2;
		const anon2 = undefined;
		const arrayElement1 = new MergeSort(anon, anon1, anon2)
		const cellIndices = [arrayElement, arrayElement1]
		const getCellAtIndexReturnValue = await getCellAtIndex(m, cellIndices)
		
	})
})
