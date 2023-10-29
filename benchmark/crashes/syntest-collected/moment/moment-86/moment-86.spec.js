// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const isAMomentObject = true;
		const useUTC = undefined;
		const isUTC = 2000;
		const l = undefined;
		const i = () => {};
		const f = false;
		const strict = undefined;
		const localConfig = {
			"_isAMomentObject": isAMomentObject,
			"_useUTC": useUTC,
			"_isUTC": isUTC,
			"_l": l,
			"_i": i,
			"_f": f,
			"_strict": strict
		}
		const locale = true;
		const anon = 3;
		const prepareConfigReturnValue = await prepareConfig(localConfig, locale, anon)
		const input = false;
		const format = true;
		const locale1 = undefined;
		const strict1 = "NZk7,ROpQTTg_±^;.!ti{9%Y5(z\"\"IwM &t`$x<['.AH>v6_ZD5?&D]^Dz(9p~SrMRqTtV6FM";
		const isUTC1 = 0;
		const isUTC2 = null;
		const isUTC3 = "./from-string-and-format";
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale1, strict1, isUTC1, isUTC2, isUTC3)
		
	})
})
