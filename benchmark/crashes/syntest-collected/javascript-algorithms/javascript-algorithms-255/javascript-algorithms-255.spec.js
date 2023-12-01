// Imports
require = require('esm')(module)
import {walk} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localVisit = (cellIndices, cellValue) => {};
		const arrayElement = 0.3;
		const m = [localVisit, arrayElement]
		const localVisit1 = (cellIndices, cellValue) => {};
		const walkReturnValue = await walk(m, localVisit1)
		
	})
})
