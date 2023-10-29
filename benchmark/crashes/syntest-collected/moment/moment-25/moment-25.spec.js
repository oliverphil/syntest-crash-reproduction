// Imports
require = require('esm')(module)
import {max} from "../instrumented/moment/src/lib/moment/min-max.js";
import {min} from "../instrumented/moment/src/lib/moment/min-max.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = "./get-set";
		const anon1 = "../units/month";
		const minReturnValue = await min(anon, anon1)
		const anon2 = {}
		const minReturnValue1 = await min(anon2)
		const anon3 = true;
		const anon4 = undefined;
		const minReturnValue2 = await min(anon3, anon4)
		const maxReturnValue = await max()
		
	})
})
