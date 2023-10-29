// Imports
require = require('esm')(module)
import {validateSameShape} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localLength = 0;
		const a = {
			"length": localLength
		}
		const b = false;
		const validateSameShapeReturnValue = await validateSameShape(a, b)
		
	})
})
