// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = undefined;
		const f = {}
		const locale = true;
		const l = undefined;
		const d = null;
		const localConfig = {
			"_i": i,
			"_f": f,
			"_locale": locale,
			"_l": l,
			"_d": d
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		const input = "../utils/map";
		const format = false;
		const locale1 = true;
		const strict = false;
		const isUTC = "]ky9?P4`p9W]LBtk\"s\n/Iew";
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale1, strict, isUTC)
		
	})
})
