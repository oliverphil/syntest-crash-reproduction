// Imports
require = require('esm')(module)
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";
import {validateSameShape} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = 327.07247951703016;
		const a = new InsertionSort(anon)
		const b = {}
		const validateSameShapeReturnValue = await validateSameShape(a, b)
		const anon1 = 327.07247951703016;
		const a1 = new InsertionSort(anon1)
		const b1 = {}
		const sortReturnValue = await a1.sort(b1)
		
	})
})
