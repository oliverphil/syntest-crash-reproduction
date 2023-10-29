// Imports
require = require('esm')(module)
import {isBefore} from "../instrumented/moment/src/lib/moment/compare.js";
import {isSameOrBefore} from "../instrumented/moment/src/lib/moment/compare.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = null;
		const units = "isoWeek";
		const isBeforeReturnValue = await isBefore(input, units)
		const input1 = () => {};
		const units1 = () => {};
		const anon = false;
		const anon1 = () => {};
		const isSameOrBeforeReturnValue = await isSameOrBefore(input1, units1, anon, anon1)
		
	})
})
