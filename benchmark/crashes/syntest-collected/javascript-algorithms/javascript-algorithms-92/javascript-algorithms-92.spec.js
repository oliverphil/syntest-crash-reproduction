// Imports
require = require('esm')(module)
import {updateCellAtIndex} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {validateSameShape} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localLength = 0.3;
		const a = {
			"length": localLength
		}
		const arrayElement = -129.03162575866088;
		const b = [arrayElement]
		const validateSameShapeReturnValue = await validateSameShape(a, b)
		const m = undefined;
		const localLength1 = 0.3;
		const a1 = {
			"length": localLength1
		}
		const cellValue = 180;
		const updateCellAtIndexReturnValue = await updateCellAtIndex(m, a1, cellValue)
		const m1 = undefined;
		const arrayElement1 = 341.47643498922866;
		const arrayElement2 = {}
		const arrayElement3 = {}
		const arrayElement4 = 7;
		const cellIndices = [arrayElement1, arrayElement2, arrayElement3, arrayElement4]
		const cellValue1 = 10344;
		const anon = () => {};
		const anon1 = () => {};
		const updateCellAtIndexReturnValue1 = await updateCellAtIndex(m1, cellIndices, cellValue1, anon, anon1)
		
	})
})
