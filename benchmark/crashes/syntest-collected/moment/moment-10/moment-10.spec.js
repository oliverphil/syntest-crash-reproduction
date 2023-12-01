// Imports
require = require('esm')(module)
import {isBefore} from "../instrumented/moment/src/lib/moment/compare.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = "=`S6m6-";
		const units = true;
		const isBeforeReturnValue = await isBefore(input, units)
		
	})
})
