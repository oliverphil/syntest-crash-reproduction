// Imports
require = require('esm')(module)
import {generate} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {mul} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localLength = -325;
		const slice = () => {};
		const mShape = {
			"length": localLength,
			"slice": slice
		}
		const fill = () => {};
		const generateReturnValue = await generate(mShape, fill)
		const arrayElement = 574;
		const arrayElement1 = 6;
		const arrayElement2 = -388.4238897113481;
		const mShape1 = [arrayElement, arrayElement1, arrayElement2]
		const fill1 = () => {};
		const generateReturnValue1 = await generate(mShape1, fill1)
		const localLength1 = -325;
		const slice1 = () => {};
		const mShape2 = {
			"length": localLength1,
			"slice": slice1
		}
		const arrayElement3 = 574;
		const arrayElement4 = "The message and key string can only contain letters";
		const a = [mShape2, arrayElement3, arrayElement4]
		const b = false;
		const anon = 847.9325176908492;
		const anon1 = true;
		const mulReturnValue = await mul(a, b, anon, anon1)
		
	})
})
