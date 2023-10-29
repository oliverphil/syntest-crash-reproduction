// Imports
require = require('esm')(module)
import {createInvalid} from "../instrumented/moment/src/lib/create/valid.js";
import {isValid as isValid1} from "../instrumented/moment/src/lib/create/valid.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const isValid = false;
		const getTime = () => {};
		const d = {
			"getTime": getTime
		}
		const strict = false;
		const m = {
			"_isValid": isValid,
			"_d": d,
			"_strict": strict
		}
		const isValidReturnValue = await isValid1(m)
		const flags = null;
		const getTime1 = () => {};
		const createInvalidReturnValue = await createInvalid(flags, getTime1)
		const flags1 = null;
		const createInvalidReturnValue1 = await createInvalid(flags1)
		
	})
})
