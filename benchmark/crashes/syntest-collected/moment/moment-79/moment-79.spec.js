// Imports
require = require('esm')(module)
import {configFromRFC2822} from "../instrumented/moment/src/lib/create/from-string.js";
import {configFromString} from "../instrumented/moment/src/lib/create/from-string.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = "../locale/locales";
		const a = []
		const tzm = 561;
		const setUTCMinutes = 9999;
		const d = {
			"setUTCMinutes": setUTCMinutes
		}
		const isValid = false;
		const localConfig = {
			"_i": i,
			"_a": a,
			"_tzm": tzm,
			"_d": d,
			"_isValid": isValid
		}
		const anon = ":Y(%w:+\nUJ/";
		const configFromRFCReturnValue = await configFromRFC2822(localConfig, anon)
		const i1 = null;
		const d1 = 7;
		const isValid1 = true;
		const strict = true;
		const localConfig1 = {
			"_i": i1,
			"_d": d1,
			"_isValid": isValid1,
			"_strict": strict
		}
		const configFromStringReturnValue = await configFromString(localConfig1)
		const isValid2 = true;
		const localConfig2 = {
			"_isValid": isValid2
		}
		const configFromRFCReturnValue1 = await configFromRFC2822(localConfig2)
		
	})
})
