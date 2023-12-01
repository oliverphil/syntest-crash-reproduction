// Imports
require = require('esm')(module)
import {isAfter} from "../instrumented/moment/src/lib/moment/compare.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = undefined;
		const units = false;
		const isAfterReturnValue = await isAfter(input, units)
		
	})
})
