// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = undefined;
		const f = undefined;
		const locale = false;
		const l = 4;
		const d = "./from-object";
		const localConfig = {
			"_i": i,
			"_f": f,
			"_locale": locale,
			"_l": l,
			"_d": d
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		const input = "Ow6sDWPrx±TCEI+VbwHcB&XU@dHwi\"Du~c*RCW";
		const format = {}
		const locale1 = false;
		const strict = true;
		const locale2 = false;
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale1, strict, locale2)
		
	})
})
