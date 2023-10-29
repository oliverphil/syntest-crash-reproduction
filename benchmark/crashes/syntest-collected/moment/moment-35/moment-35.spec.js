// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = -778.3742459814696;
		const format = false;
		const locale = true;
		const strict = "=C6'YW0v8wz1";
		const isUTC = null;
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC)
		const isAMomentObject = true;
		const useUTC = undefined;
		const isUTC1 = 2000;
		const l = undefined;
		const i = () => {};
		const f = false;
		const strict1 = undefined;
		const localConfig = {
			"_isAMomentObject": isAMomentObject,
			"_useUTC": useUTC,
			"_isUTC": isUTC1,
			"_l": l,
			"_i": i,
			"_f": f,
			"_strict": strict1
		}
		const locale1 = true;
		const anon = 3;
		const prepareConfigReturnValue = await prepareConfig(localConfig, locale1, anon)
		const isAMomentObject1 = true;
		const useUTC1 = undefined;
		const isUTC2 = 2000;
		const l1 = undefined;
		const i1 = () => {};
		const f1 = false;
		const strict2 = undefined;
		const localConfig1 = {
			"_isAMomentObject": isAMomentObject1,
			"_useUTC": useUTC1,
			"_isUTC": isUTC2,
			"_l": l1,
			"_i": i1,
			"_f": f1,
			"_strict": strict2
		}
		const format1 = false;
		const locale2 = true;
		const strict3 = false;
		const isUTC3 = "./from-string-and-format";
		const locale3 = true;
		const createLocalOrUTCReturnValue1 = await createLocalOrUTC(localConfig1, format1, locale2, strict3, isUTC3, locale3)
		const input1 = false;
		const format2 = true;
		const locale4 = undefined;
		const strict4 = "NZk7,ROpQTTg_±^;.!ti{9%Y5(z\"\"IwM &t`$x<['.AH>v6_ZD5?&D]^Dz(9p~SrMRqTtV6FM";
		const isUTC4 = 0;
		const isUTC5 = null;
		const isUTC6 = "./from-string-and-format";
		const createLocalOrUTCReturnValue2 = await createLocalOrUTC(input1, format2, locale4, strict4, isUTC4, isUTC5, isUTC6)
		
	})
})
