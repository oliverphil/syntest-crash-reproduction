// Imports
require = require('esm')(module)
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
		const isValid2 = null;
		const getTime1 = () => {};
		const d1 = {
			"getTime": getTime1
		}
		const strict1 = true;
		const m1 = {
			"_isValid": isValid2,
			"_d": d1,
			"_strict": strict1
		}
		const isValidReturnValue1 = await isValid1(m1)
		const m2 = "second";
		const isValidReturnValue2 = await isValid1(m2)
		
	})
})
