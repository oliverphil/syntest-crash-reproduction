// Imports
require = require('esm')(module)
import {generate} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {mul} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {validateSameShape} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 15;
		const mShape = [arrayElement]
		const arrayElement1 = undefined;
		const fill = [arrayElement1]
		const generateReturnValue = await generate(mShape, fill)
		const localLength = 10;
		const a = {
			"length": localLength
		}
		const localLength1 = 3.4028234663852886e+38;
		const b = {
			"length": localLength1
		}
		const arrayElement2 = 15;
		const mShape1 = [arrayElement2]
		const anon = false;
		const mulReturnValue = await mul(a, b, mShape1, anon)
		const arrayElement3 = 537.2466876891679;
		const arrayElement4 = undefined;
		const fill1 = [arrayElement4]
		const arrayElement5 = () => {};
		const a1 = [arrayElement3, fill1, arrayElement5]
		const b1 = "f@.wbeMX=+j(=k%4m\\ocC3'Av^FT!iF|Wa`nCi!$#~S,\n%l\";[g1:§Yd&B<C]]s.:i§?oA:KNsU";
		const validateSameShapeReturnValue = await validateSameShape(a1, b1)
		
	})
})
