// Imports
require = require('esm')(module)
import {configFromString} from "../instrumented/moment/src/lib/create/from-string.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localConfig = false;
		const configFromStringReturnValue = await configFromString(localConfig)
		const i = "#.qS'3M9-v2.&;vn$/!`UROiu)§>H0b -2*?k0&U6kHw'@9R'\"'JH±sz+]!6";
		const getFullYear = () => {};
		const setFullYear = () => {};
		const d = {
			"getFullYear": getFullYear,
			"setFullYear": setFullYear
		}
		const isValid = false;
		const strict = false;
		const localConfig1 = {
			"_i": i,
			"_d": d,
			"_isValid": isValid,
			"_strict": strict
		}
		const configFromStringReturnValue1 = await configFromString(localConfig1)
		
	})
})
