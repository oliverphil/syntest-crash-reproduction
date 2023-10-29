// Imports
require = require('esm')(module)
import {configFromStringAndArray} from "../instrumented/moment/src/lib/create/from-string-and-array.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = null;
		const f = [arrayElement]
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
		const getDay1 = () => {};
		const d1 = {
			"getDay": getDay1
		}
		const configFromStringAndArrayReturnValue1 = await configFromStringAndArray(d1)
		const localConfig1 = "()";
		const anon = "./valid";
		const configFromStringAndArrayReturnValue2 = await configFromStringAndArray(localConfig1, anon)
		
	})
})
