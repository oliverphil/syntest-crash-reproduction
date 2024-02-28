// Imports
require = require('esm')(module)
import {isValid as isValid1} from "../instrumented/moment/src/lib/create/valid.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const isValid = null;
		const getTime = () => {};
		const d = {
			"getTime": getTime
		}
		const strict = true;
		const m = {
			"_isValid": isValid,
			"_d": d,
			"_strict": strict
		}
		const anon = "hR\"&2F9y3OyA<p";
		const anon1 = "wBs<==;hvr+Huxz@:g[6p>\nds]Rm BNT\"DfBD#'o6";
		const isValidReturnValue = await isValid1(m, anon, anon1)
		const strict1 = true;
		const anon2 = 12;
		const isValidReturnValue1 = await isValid1(strict1, anon2)
		const getTime1 = () => {};
		const d1 = {
			"getTime": getTime1
		}
		const isValidReturnValue2 = await isValid1(d1)
		
	})
})
