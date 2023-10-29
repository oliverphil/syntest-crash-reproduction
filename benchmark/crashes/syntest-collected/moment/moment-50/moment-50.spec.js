// Imports
require = require('esm')(module)
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = undefined;
		const f = "dsnK&-H§p%\\+&T\tss9pXRk5Cc/CpS&cN<sC3;:$$?bb/d^vN}WIL*4oPO6^1";
		const preparse = () => {};
		const locale = {
			"preparse": preparse
		}
		const arrayElement = -233;
		const locale1 = true;
		const d = null;
		const l = [arrayElement, locale1, d]
		const d1 = null;
		const localConfig = {
			"_i": i,
			"_f": f,
			"_locale": locale,
			"_l": l,
			"_d": d1
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		
	})
})
