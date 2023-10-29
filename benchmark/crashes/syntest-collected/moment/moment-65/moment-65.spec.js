// Imports
require = require('esm')(module)
import {configFromStringAndArray} from "../instrumented/moment/src/lib/create/from-string-and-array.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = {}
		const arrayElement1 = null;
		const f = [arrayElement, arrayElement1]
		const uTC = () => {};
		const toISOString = null;
		const prototype = {
			"toISOString": toISOString
		}
		const now = false;
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
		const anon = () => {};
		const configFromStringAndArrayReturnValue = await configFromStringAndArray(localConfig, anon)
		const f1 = {}
		const getFullYear = () => {};
		const setFullYear = () => {};
		const d1 = {
			"getFullYear": getFullYear,
			"setFullYear": setFullYear
		}
		const useUTC1 = null;
		const localConfig1 = {
			"_f": f1,
			"_d": d1,
			"_useUTC": useUTC1
		}
		const arrayElement2 = {}
		const configFromStringAndArrayReturnValue1 = await configFromStringAndArray(localConfig1, arrayElement2)
		const f2 = "t~)]|?(}9sA_[\\(m|FCn(*ZxFL:63Uv-HN{|Fc}55V(&OJ3iw2:X*':6fgb04{C=F1;8u:@nCyfqe'u\\`z\"Azvp";
		const localValueOf = () => {};
		const d2 = {
			"valueOf": localValueOf
		}
		const useUTC2 = null;
		const localConfig2 = {
			"_f": f2,
			"_d": d2,
			"_useUTC": useUTC2
		}
		const configFromStringAndArrayReturnValue2 = await configFromStringAndArray(localConfig2)
		
	})
})
