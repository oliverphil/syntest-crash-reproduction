// Imports
require = require('esm')(module)
import {add} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {generate} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {mul} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {t} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localLength = -1;
		const m = {
			"length": localLength
		}
		const tReturnValue = await t(m)
		const mShape = []
		const fill = () => {};
		const anon = false;
		const generateReturnValue = await generate(mShape, fill, anon)
		const a = []
		const b = () => {};
		const anon1 = 978.5184803474604;
		const mulReturnValue = await mul(a, b, anon1)
		const arrayElement = 0;
		const arrayElement1 = 552.332011835095;
		const arrayElement2 = -500;
		const arrayElement3 = 1;
		const a1 = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const arrayElement4 = 793;
		const arrayElement5 = "../../../data-structures/queue/Queue";
		const b1 = [arrayElement4, arrayElement5]
		const addReturnValue = await add(a1, b1)
		
	})
})
