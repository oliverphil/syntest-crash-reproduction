// Imports
require = require('esm')(module)
import {shape} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {zeros} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 1;
		const arrayElement1 = -555;
		const mShape = [arrayElement, arrayElement1]
		const zerosReturnValue = await zeros(mShape)
		const m = "1111101111111111";
		const shapeReturnValue = await shape(m)
		const arrayElement2 = 892.7958148508148;
		const arrayElement3 = false;
		const arrayElement4 = 52;
		const mShape1 = [arrayElement2, arrayElement3, arrayElement4]
		const zerosReturnValue1 = await zeros(mShape1)
		
	})
})
