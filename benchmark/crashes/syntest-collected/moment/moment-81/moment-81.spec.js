// Imports
require = require('esm')(module)
import {min} from "../instrumented/moment/src/lib/moment/min-max.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const minReturnValue = await min()
		const anon = 9;
		const minReturnValue1 = await min(anon)
		
	})
})
