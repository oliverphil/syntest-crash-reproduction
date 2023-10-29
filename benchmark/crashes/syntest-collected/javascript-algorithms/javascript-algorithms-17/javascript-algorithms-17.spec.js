// Imports
require = require('esm')(module)
import {mul} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {updateCellAtIndex} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = -651.4985264983079;
		const a = [arrayElement]
		const a1 = [a]
		const arrayElement1 = -651.4985264983079;
		const a2 = [arrayElement1]
		const arrayElement2 = 1;
		const b = [a2, arrayElement2]
		const mulReturnValue = await mul(a1, b)
		const m = undefined;
		const cellIndices = "&<BCQIJeUQ=K/rI-coHOw:5oH\nB)TOvdP6Hu3h'AcQ>±UJ";
		const cellValue = -152;
		const updateCellAtIndexReturnValue = await updateCellAtIndex(m, cellIndices, cellValue)
		
	})
})
