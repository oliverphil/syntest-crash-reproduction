// Imports
require = require('esm')(module)
import {configFromRFC2822} from "../instrumented/moment/src/lib/create/from-string.js";
import {configFromString} from "../instrumented/moment/src/lib/create/from-string.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 29;
		const arrayElement1 = null;
		const arrayElement2 = true;
		const arrayElement3 = null;
		const arrayElement4 = [arrayElement3]
		const i = [arrayElement, arrayElement1, arrayElement2, arrayElement4]
		const d = 1000;
		const isValid = false;
		const strict = true;
		const localConfig = {
			"_i": i,
			"_d": d,
			"_isValid": isValid,
			"_strict": strict
		}
		const anon = true;
		const anon1 = null;
		const configFromRFCReturnValue = await configFromRFC2822(localConfig, anon, anon1)
		const isValid1 = true;
		const localConfig1 = {
			"_isValid": isValid1
		}
		const configFromRFCReturnValue1 = await configFromRFC2822(localConfig1)
		const isValid2 = true;
		const localConfig2 = {
			"_isValid": isValid2
		}
		const configFromRFCReturnValue2 = await configFromRFC2822(localConfig2)
		const isValid3 = true;
		const localConfig3 = {
			"_isValid": isValid3
		}
		const anon2 = () => {};
		const configFromStringReturnValue = await configFromString(localConfig3, anon2)
		
	})
})
