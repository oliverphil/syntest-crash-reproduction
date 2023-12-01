// Imports
require = require('esm')(module)
import {generate} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {validateSameShape} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {zeros} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = {}
		const arrayElement1 = -822;
		const arrayElement2 = 307.888150243552;
		const mShape = [arrayElement, arrayElement1, arrayElement2]
		const zerosReturnValue = await zeros(mShape)
		const arrayElement3 = -17.151100217355747;
		const arrayElement4 = -822;
		const mShape1 = [arrayElement3, arrayElement4]
		const fill = () => {};
		const generateReturnValue = await generate(mShape1, fill)
		const localLength = -403;
		const a = {
			"length": localLength
		}
		const localLength1 = -653;
		const b = {
			"length": localLength1
		}
		const anon = "7y'%#,4=JN/Oz:KOhqenQ?§Rb}[S$PnA 8H~}fM)S~SA§8E87uWBE3§v2?gF *~6[oO*ErNX";
		const validateSameShapeReturnValue = await validateSameShape(a, b, anon)
		
	})
})
