// Imports
require = require('esm')(module)
import {configFromStringAndArray} from "../instrumented/moment/src/lib/create/from-string-and-array.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const f = {}
		const uTC = () => {};
		const toISOString = 2;
		const prototype = {
			"toISOString": toISOString
		}
		const now = true;
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
		const anon = "./utc";
		const configFromStringAndArrayReturnValue = await configFromStringAndArray(localConfig, anon)
		const uTC1 = () => {};
		const toISOString1 = 2;
		const prototype1 = {
			"toISOString": toISOString1
		}
		const now1 = true;
		const d1 = {
			"UTC": uTC1,
			"prototype": prototype1,
			"now": now1
		}
		const configFromStringAndArrayReturnValue1 = await configFromStringAndArray(d1)
		const f1 = {}
		const uTC2 = () => {};
		const toISOString2 = 2;
		const prototype2 = {
			"toISOString": toISOString2
		}
		const now2 = true;
		const d2 = {
			"UTC": uTC2,
			"prototype": prototype2,
			"now": now2
		}
		const useUTC1 = null;
		const localConfig1 = {
			"_f": f1,
			"_d": d2,
			"_useUTC": useUTC1
		}
		const anon1 = undefined;
		const configFromStringAndArrayReturnValue2 = await configFromStringAndArray(localConfig1, anon1)
		
	})
})
