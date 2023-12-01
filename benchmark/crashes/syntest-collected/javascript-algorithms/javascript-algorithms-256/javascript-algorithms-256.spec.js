// Imports
require = require('esm')(module)
import {zeros} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 321;
		const arrayElement1 = 0.00000456;
		const arrayElement2 = 0.24999;
		const mShape = [arrayElement, arrayElement1, arrayElement2]
		const anon = 70;
		const zerosReturnValue = await zeros(mShape, anon)
		
	})
})
