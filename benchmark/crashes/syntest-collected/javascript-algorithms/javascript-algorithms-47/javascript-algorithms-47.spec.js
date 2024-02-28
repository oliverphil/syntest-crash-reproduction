// Imports
require = require('esm')(module)
import {add} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {walk} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localLength = -518.2963568107917;
		const m = {
			"length": localLength
		}
		const localVisit = () => {};
		const anon = () => {};
		const anon1 = "f7|TWAM~f?RL6t5#.w1&\t*w8]C8was5x<tv#MtW{%kQb=g\n^z^azW>>]F\nW1!m#x?EbPm[L?*<Z*Y$j}cqo";
		const walkReturnValue = await walk(m, localVisit, anon, anon1)
		const a = () => {};
		const b = true;
		const addReturnValue = await add(a, b)
		const m1 = false;
		const localVisit1 = (cellIndices, cellValue) => {};
		const arrayElement = null;
		const anon2 = [arrayElement]
		const walkReturnValue1 = await walk(m1, localVisit1, anon2)
		
	})
})
