// Imports
require = require('esm')(module)
import {updateCellAtIndex} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {walk} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = null;
		const m = [anon]
		const localVisit = (cellIndices, cellValue) => {};
		const walkReturnValue = await walk(m, localVisit)
		const m1 = undefined;
		const arrayElement = {}
		const m2 = [arrayElement]
		const cellValue = -432;
		const updateCellAtIndexReturnValue = await updateCellAtIndex(m1, m2, cellValue)
		
	})
})
