// Imports
require = require('esm')(module)
import {configFromStringAndArray} from "../instrumented/moment/src/lib/create/from-string-and-array.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = "./valid";
		const f = [arrayElement]
		const uTC = () => {};
		const toISOString = false;
		const prototype = {
			"toISOString": toISOString
		}
		const now = () => {};
		const d = {
			"UTC": uTC,
			"prototype": prototype,
			"now": now
		}
		const useUTC = null;
		const localConfig = {
			"_f": f,
			"_d": d,
			"_useUTC": useUTC
		}
		const configFromStringAndArrayReturnValue = await configFromStringAndArray(localConfig)
		const toISOString1 = false;
		const prototype1 = {
			"toISOString": toISOString1
		}
		const configFromStringAndArrayReturnValue1 = await configFromStringAndArray(prototype1)
		
	})
})
