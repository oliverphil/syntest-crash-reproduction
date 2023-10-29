// Imports
require = require('esm')(module)
import {isBefore} from "../instrumented/moment/src/lib/moment/compare.js";
import {isSame} from "../instrumented/moment/src/lib/moment/compare.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = "38\\bZ6tZ";
		const units = false;
		const anon = 621.7351813917874;
		const isBeforeReturnValue = await isBefore(input, units, anon)
		const isValid = () => {};
		const localValueOf = "3#6±'V}*7>\tC?{{,\nV§/>`bDQ@`m$jCGN]1";
		const input1 = {
			"isValid": isValid,
			"valueOf": localValueOf
		}
		const units1 = "CPE8s[?Bm&F=oF+_x\nf)h2iGq@";
		const isSameReturnValue = await isSame(input1, units1)
		
	})
})
