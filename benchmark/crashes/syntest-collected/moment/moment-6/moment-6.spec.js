// Imports
require = require('esm')(module)
import {configFromISO} from "../instrumented/moment/src/lib/create/from-string.js";
import {configFromString} from "../instrumented/moment/src/lib/create/from-string.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = () => {};
		const getDay = () => {};
		const d = {
			"getDay": getDay
		}
		const isValid = true;
		const strict = false;
		const localConfig = {
			"_i": i,
			"_d": d,
			"_isValid": isValid,
			"_strict": strict
		}
		const configFromISOReturnValue = await configFromISO(localConfig)
		const localConfig1 = 100;
		const configFromStringReturnValue = await configFromString(localConfig1)
		const i1 = () => {};
		const getDay1 = () => {};
		const d1 = {
			"getDay": getDay1
		}
		const isValid1 = true;
		const strict1 = false;
		const localConfig2 = {
			"_i": i1,
			"_d": d1,
			"_isValid": isValid1,
			"_strict": strict1
		}
		const configFromStringReturnValue1 = await configFromString(localConfig2)
		
	})
})
