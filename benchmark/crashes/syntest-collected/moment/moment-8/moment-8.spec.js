// Imports
require = require('esm')(module)
import {max} from "../instrumented/moment/src/lib/moment/min-max.js";
import {min} from "../instrumented/moment/src/lib/moment/min-max.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = () => {};
		const anon = [arrayElement]
		const minReturnValue = await min(anon)
		const anon1 = false;
		const anon2 = true;
		const maxReturnValue = await max(anon1, anon2)
		const maxReturnValue1 = await max()
		const minReturnValue1 = await min()
		
	})
})
