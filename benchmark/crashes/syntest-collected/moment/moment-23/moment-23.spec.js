// Imports
require = require('esm')(module)
import {configFromISO} from "../instrumented/moment/src/lib/create/from-string.js";
import {configFromString} from "../instrumented/moment/src/lib/create/from-string.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localConfig = 9;
		const anon = "../utils/is-number";
		const configFromStringReturnValue = await configFromString(localConfig, anon)
		const i = null;
		const d = {}
		const isValid = true;
		const strict = true;
		const localConfig1 = {
			"_i": i,
			"_d": d,
			"_isValid": isValid,
			"_strict": strict
		}
		const localConfig2 = 9;
		const configFromISOReturnValue = await configFromISO(localConfig1, localConfig2)
		const d1 = {}
		const configFromISOReturnValue1 = await configFromISO(d1)
		
	})
})
