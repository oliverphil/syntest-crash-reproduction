// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";

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
		const format = false;
		const locale = true;
		const strict1 = false;
		const isUTC1 = "./from-string-and-format";
		const locale1 = true;
		const createLocalOrUTCReturnValue = await createLocalOrUTC(localConfig, format, locale, strict1, isUTC1, locale1)
		const input = false;
		const format1 = true;
		const locale2 = undefined;
		const strict2 = "NZk7,ROpQTTg_±^;.!ti{9%Y5(z\"\"IwM &t`$x<['.AH>v6_ZD5?&D]^Dz(9p~SrMRqTtV6FM";
		const isUTC2 = 0;
		const isUTC3 = null;
		const isUTC4 = "./from-string-and-format";
		const createLocalOrUTCReturnValue1 = await createLocalOrUTC(input, format1, locale2, strict2, isUTC2, isUTC3, isUTC4)
		
	})
})
