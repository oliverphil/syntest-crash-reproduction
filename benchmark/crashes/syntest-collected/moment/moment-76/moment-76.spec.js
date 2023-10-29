// Imports
require = require('esm')(module)
import {configFromISO} from "../instrumented/moment/src/lib/create/from-string.js";
import {configFromRFC2822} from "../instrumented/moment/src/lib/create/from-string.js";
import {configFromString} from "../instrumented/moment/src/lib/create/from-string.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = () => {};
		const uTC = () => {};
		const arrayElement = 2;
		const arrayElement1 = 1000;
		const arrayElement2 = "days";
		const arrayElement3 = {}
		const toISOString = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const prototype = {
			"toISOString": toISOString
		}
		const now = true;
		const d = {
			"UTC": uTC,
			"prototype": prototype,
			"now": now
		}
		const isValid = true;
		const strict = true;
		const localConfig = {
			"_i": i,
			"_d": d,
			"_isValid": isValid,
			"_strict": strict
		}
		const configFromStringReturnValue = await configFromString(localConfig)
		const i1 = undefined;
		const isValid1 = false;
		const f = 49;
		const localConfig1 = {
			"_i": i1,
			"_isValid": isValid1,
			"_f": f
		}
		const configFromRFCReturnValue = await configFromRFC2822(localConfig1)
		const i2 = undefined;
		const configFromISOReturnValue = await configFromISO(i2)
		
	})
})
