// Imports
require = require('esm')(module)
import {t} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {walk} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {zeros} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = -480;
		const arrayElement1 = 0.199951171875;
		const arrayElement2 = true;
		const mShape = [arrayElement, arrayElement1, arrayElement2]
		const anon = {}
		const anon1 = null;
		const zerosReturnValue = await zeros(mShape, anon, anon1)
		const localVisit = (cellIndices, cellValue) => {};
		const m = [localVisit]
		const localVisit1 = (cellIndices, cellValue) => {};
		const arrayElement3 = -480;
		const walkReturnValue = await walk(m, localVisit1, arrayElement3)
		const anon2 = {}
		const arrayElement4 = -480;
		const tReturnValue = await t(anon2, arrayElement4)
		
	})
})
