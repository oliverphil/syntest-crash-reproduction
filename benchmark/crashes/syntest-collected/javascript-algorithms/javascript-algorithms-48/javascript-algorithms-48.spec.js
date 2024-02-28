// Imports
require = require('esm')(module)
import {generate} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {walk} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = -1;
		const arrayElement1 = ".P±V_[~6tZS:d'v_L±(ol~<b'7)2YhXThu H'\n\nO=Q/Hb+U<lV?A/A9QK;(Y'|*`{§T-;3Fp0k|M6~zvi";
		const localLength = [arrayElement, arrayElement1]
		const m = {
			"length": localLength
		}
		const localVisit = () => {};
		const walkReturnValue = await walk(m, localVisit)
		const mShape = () => {};
		const localVisit1 = () => {};
		const generateReturnValue = await generate(mShape, localVisit1)
		const localLength1 = 3.141592653589793;
		const m1 = {
			"length": localLength1
		}
		const localVisit2 = (cellIndices, cellValue) => {};
		const walkReturnValue1 = await walk(m1, localVisit2)
		
	})
})
