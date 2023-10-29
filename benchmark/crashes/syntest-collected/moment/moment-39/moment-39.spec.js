// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = undefined;
		const format = false;
		const locale = false;
		const strict = true;
		const isUTC = " Wq§\n)r3,h'";
		const anon = false;
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC, anon)
		const isUTC1 = " Wq§\n)r3,h'";
		const format1 = false;
		const locale1 = undefined;
		const strict1 = false;
		const isUTC2 = -336.24989255228786;
		const createLocalOrUTCReturnValue1 = await createLocalOrUTC(isUTC1, format1, locale1, strict1, isUTC2)
		const i = undefined;
		const f = true;
		const preparse = () => {};
		const locale2 = {
			"preparse": preparse
		}
		const l = () => {};
		const d = null;
		const localConfig = {
			"_i": i,
			"_f": f,
			"_locale": locale2,
			"_l": l,
			"_d": d
		}
		const strict2 = false;
		const anon1 = 28;
		const prepareConfigReturnValue = await prepareConfig(localConfig, strict2, anon1)
		const input1 = []
		const format2 = true;
		const locale3 = undefined;
		const strict3 = 504;
		const isUTC3 = " Wq§\n)r3,h'";
		const createLocalOrUTCReturnValue2 = await createLocalOrUTC(input1, format2, locale3, strict3, isUTC3)
		
	})
})
