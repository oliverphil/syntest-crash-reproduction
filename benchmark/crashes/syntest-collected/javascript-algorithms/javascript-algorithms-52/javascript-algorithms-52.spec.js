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
		const arrayElement = 1;
		const arrayElement1 = 389.4543328260329;
		const arrayElement2 = -1;
		const mShape = [arrayElement, arrayElement1, arrayElement2]
		const m1 = () => {};
		const generateReturnValue = await generate(mShape, m1)
		const localLength = false;
		const a = {
			"length": localLength
		}
		const arrayElement3 = 0;
		const b = [arrayElement3]
		const addReturnValue = await add(a, b)
		
	})
})
