// Imports
require = require('esm')(module)
import {isBefore} from "../instrumented/moment/src/lib/moment/compare.js";
import {isSameOrAfter} from "../instrumented/moment/src/lib/moment/compare.js";
import {isSame} from "../instrumented/moment/src/lib/moment/compare.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = undefined;
		const units = false;
		const isSameReturnValue = await isSame(input, units)
		const input1 = {}
		const units1 = 10;
		const isSameOrAfterReturnValue = await isSameOrAfter(input1, units1)
		const isValid = () => {};
		const localValueOf = () => {};
		const input2 = {
			"isValid": isValid,
			"valueOf": localValueOf
		}
		const units2 = "7d?%D6V?#*a";
		const isBeforeReturnValue = await isBefore(input2, units2)
		
	})
})
