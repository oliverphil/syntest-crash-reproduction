// Imports
require = require('esm')(module)
import {walk} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const m = "../utils/imageData";
		const localVisit = (cellIndices, cellValue) => {};
		const walkReturnValue = await walk(m, localVisit)
		
	})
})
