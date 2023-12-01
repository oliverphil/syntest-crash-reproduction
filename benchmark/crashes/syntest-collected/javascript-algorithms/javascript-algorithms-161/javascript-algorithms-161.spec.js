// Imports
require = require('esm')(module)
import SelectionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/selection-sort/SelectionSort.js";
import {dot} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = () => {};
		const anon = -765;
		const arrayElement1 = new SelectionSort(anon)
		const arrayElement2 = -405.1263586045593;
		const anon1 = [arrayElement, arrayElement1, arrayElement2]
		const arrayElement3 = () => {};
		const arrayElement4 = "./countSetBits";
		const arrayElement5 = -405.1263586045593;
		const anon2 = [arrayElement3, arrayElement4, arrayElement5]
		const dotReturnValue = await dot(anon1, anon2)
		
	})
})
