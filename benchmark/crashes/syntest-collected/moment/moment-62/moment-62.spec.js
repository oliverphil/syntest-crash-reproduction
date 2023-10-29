// Imports
require = require('esm')(module)
import {configFromStringAndArray} from "../instrumented/moment/src/lib/create/from-string-and-array.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const f = "\tjCg]bhi[ &T}+^Q@h(@W3O{";
		const getDay = () => {};
		const d = {
			"getDay": getDay
		}
		const useUTC = null;
		const localConfig = {
			"_f": f,
			"_d": d,
			"_useUTC": useUTC
		}
		const configFromStringAndArrayReturnValue = await configFromStringAndArray(localConfig)
		const f1 = "\tjCg]bhi[ &T}+^Q@h(@W3O{";
		const getDay1 = () => {};
		const d1 = {
			"getDay": getDay1
		}
		const useUTC1 = null;
		const localConfig1 = {
			"_f": f1,
			"_d": d1,
			"_useUTC": useUTC1
		}
		const configFromStringAndArrayReturnValue1 = await configFromStringAndArray(localConfig1)
		
	})
})
