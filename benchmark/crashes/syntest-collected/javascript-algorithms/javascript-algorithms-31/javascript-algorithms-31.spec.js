// Imports
require = require('esm')(module)
import {add} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {generate} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {walk} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const m = () => {};
		const localVisit = (cellIndices, cellValue) => {};
		const anon = 608;
		const walkReturnValue = await walk(m, localVisit, anon)
		const arrayElement = -152;
		const mShape = [arrayElement]
		const m1 = () => {};
		const generateReturnValue = await generate(mShape, m1)
		const localLength = false;
		const a = {
			"length": localLength
		}
		const arrayElement1 = 0;
		const b = [arrayElement1]
		const addReturnValue = await add(a, b)
		
	})
})
