// Imports
require = require('esm')(module)
import {configFromString} from "../instrumented/moment/src/lib/create/from-string.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = null;
		const d = 7;
		const isValid = true;
		const strict = true;
		const localConfig = {
			"_i": i,
			"_d": d,
			"_isValid": isValid,
			"_strict": strict
		}
		const configFromStringReturnValue = await configFromString(localConfig)
		
	})
})
