// Imports
require = require('esm')(module)
import {configFromStringAndArray} from "../instrumented/moment/src/lib/create/from-string-and-array.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const f = () => {};
		const toISOString = () => {};
		const d = {
			"toISOString": toISOString
		}
		const useUTC = null;
		const localConfig = {
			"_f": f,
			"_d": d,
			"_useUTC": useUTC
		}
		const configFromStringAndArrayReturnValue = await configFromStringAndArray(localConfig)
		const f1 = () => {};
		const toISOString1 = () => {};
		const d1 = {
			"toISOString": toISOString1
		}
		const useUTC1 = null;
		const localConfig1 = {
			"_f": f1,
			"_d": d1,
			"_useUTC": useUTC1
		}
		const arrayElement = "#S%n=B.rQq1/!<yd<QTw'v^gLaoEx§_E4(/YY2r!)4R>f0EKBBaNs](@0hQkG,-{lAn%";
		const f2 = [localConfig1, arrayElement]
		const d2 = "-MM-DD[T]HH:mm:ss.SSS";
		const useUTC2 = null;
		const localConfig2 = {
			"_f": f2,
			"_d": d2,
			"_useUTC": useUTC2
		}
		const anon = true;
		const configFromStringAndArrayReturnValue1 = await configFromStringAndArray(localConfig2, anon)
		const f3 = {}
		const d3 = 60;
		const useUTC3 = null;
		const localConfig3 = {
			"_f": f3,
			"_d": d3,
			"_useUTC": useUTC3
		}
		const configFromStringAndArrayReturnValue2 = await configFromStringAndArray(localConfig3)
		const toISOString2 = () => {};
		const d4 = {
			"toISOString": toISOString2
		}
		const d5 = 60;
		const configFromStringAndArrayReturnValue3 = await configFromStringAndArray(d4, d5)
		
	})
})
