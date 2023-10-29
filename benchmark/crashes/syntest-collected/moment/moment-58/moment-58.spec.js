// Imports
require = require('esm')(module)
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = undefined;
		const arrayElement = "'I)'\\h]F-|P";
		const f = undefined;
		const locale = true;
		const f1 = [arrayElement, f, locale]
		const locale1 = true;
		const locale2 = {
			"preparse": locale1
		}
		const l = () => {};
		const d = null;
		const localConfig = {
			"_i": i,
			"_f": f1,
			"_locale": locale2,
			"_l": l,
			"_d": d
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		
	})
})
