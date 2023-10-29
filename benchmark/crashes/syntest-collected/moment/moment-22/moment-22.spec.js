// Imports
require = require('esm')(module)
import {configFromRFC2822} from "../instrumented/moment/src/lib/create/from-string.js";
import {configFromString} from "../instrumented/moment/src/lib/create/from-string.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localConfig = "../utils/map";
		const configFromStringReturnValue = await configFromString(localConfig)
		const i = () => {};
		const a = "../utils/is-array";
		const tzm = 191.57120784934204;
		const getUTCMinutes = () => {};
		const d = {
			"getUTCMinutes": getUTCMinutes
		}
		const isValid = false;
		const localConfig1 = {
			"_i": i,
			"_a": a,
			"_tzm": tzm,
			"_d": d,
			"_isValid": isValid
		}
		const configFromRFCReturnValue = await configFromRFC2822(localConfig1)
		
	})
})
