// Imports
require = require('esm')(module)
import {createInvalid} from "../instrumented/moment/src/lib/create/valid.js";
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
		const isValidReturnValue = await isValid1(m)
		const m1 = 29;
		const isValidReturnValue1 = await isValid1(m1)
		const flags = null;
		const strict1 = true;
		const createInvalidReturnValue = await createInvalid(flags, strict1)
		
	})
})
