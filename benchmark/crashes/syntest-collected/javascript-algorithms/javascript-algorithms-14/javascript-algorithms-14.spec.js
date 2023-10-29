// Imports
require = require('esm')(module)
import {generate} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {zeros} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 2.718281828459045;
		const mShape = [arrayElement]
		const fill = () => {};
		const generateReturnValue = await generate(mShape, fill)
		const arrayElement1 = -1;
		const mShape1 = [arrayElement1]
		const zerosReturnValue = await zeros(mShape1)
		const arrayElement2 = 528.9105995713908;
		const arrayElement3 = 2;
		const arrayElement4 = 2;
		const mShape2 = [arrayElement2, arrayElement3, arrayElement4]
		const zerosReturnValue1 = await zeros(mShape2)
		
	})
})
