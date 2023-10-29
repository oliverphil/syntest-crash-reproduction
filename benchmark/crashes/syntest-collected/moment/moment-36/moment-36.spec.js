// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = "nextWeek";
		const format = false;
		const locale = undefined;
		const strict = true;
		const isUTC = null;
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC)
		const i = undefined;
		const f = undefined;
		const preparse = () => {};
		const locale1 = {
			"preparse": preparse
		}
		const l = []
		const d = null;
		const localConfig = {
			"_i": i,
			"_f": f,
			"_locale": locale1,
			"_l": l,
			"_d": d
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		
	})
})
