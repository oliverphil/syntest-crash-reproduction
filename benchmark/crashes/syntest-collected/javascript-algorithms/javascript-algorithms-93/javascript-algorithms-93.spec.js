// Imports
require = require('esm')(module)
import {t} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = []
		const m = "b6=z emZ\t/+R2Y;Z.'Gr(lcaw{!)$X\\`9;ni§'ZE#";
		const anon = "0011001001100110";
		const m1 = [arrayElement, m, anon]
		const arrayElement1 = false;
		const arrayElement2 = -480;
		const m2 = [m1, arrayElement1, arrayElement2]
		const tReturnValue = await t(m2)
		const anon1 = {}
		const arrayElement3 = -480;
		const tReturnValue1 = await t(anon1, arrayElement3)
		
	})
})
