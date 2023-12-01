// Imports
require = require('esm')(module)
import {walk} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {zeros} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 340.26768586488447;
		const mShape = [arrayElement]
		const anon = {}
		const zerosReturnValue = await zeros(mShape, anon)
		const localLength = 32;
		const m = {
			"length": localLength
		}
		const localVisit = (cellIndices, cellValue) => {};
		const walkReturnValue = await walk(m, localVisit)
		
	})
})
