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
		const isAMomentObject1 = true;
		const useUTC1 = undefined;
		const isUTC1 = 2000;
		const l1 = undefined;
		const i1 = () => {};
		const f1 = false;
		const strict1 = undefined;
		const localConfig1 = {
			"_isAMomentObject": isAMomentObject1,
			"_useUTC": useUTC1,
			"_isUTC": isUTC1,
			"_l": l1,
			"_i": i1,
			"_f": f1,
			"_strict": strict1
		}
		const format = false;
		const locale1 = true;
		const strict2 = false;
		const isUTC2 = "./from-string-and-format";
		const locale2 = true;
		const createLocalOrUTCReturnValue = await createLocalOrUTC(localConfig1, format, locale1, strict2, isUTC2, locale2)
		const input = false;
		const format1 = true;
		const locale3 = undefined;
		const strict3 = "NZk7,ROpQTTg_±^;.!ti{9%Y5(z\"\"IwM &t`$x<['.AH>v6_ZD5?&D]^Dz(9p~SrMRqTtV6FM";
		const isUTC3 = 0;
		const isUTC4 = null;
		const isUTC5 = "./from-string-and-format";
		const createLocalOrUTCReturnValue1 = await createLocalOrUTC(input, format1, locale3, strict3, isUTC3, isUTC4, isUTC5)
		
	})
})
