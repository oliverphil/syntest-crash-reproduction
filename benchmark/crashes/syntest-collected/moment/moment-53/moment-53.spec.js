// Imports
require = require('esm')(module)
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = undefined;
		const f = "../units/constants";
		const locale = true;
		const l = () => {};
		const d = undefined;
		const localConfig = {
			"_i": i,
			"_f": f,
			"_locale": locale,
			"_l": l,
			"_d": d
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		const i1 = undefined;
		const f1 = "../units/constants";
		const locale1 = true;
		const l1 = () => {};
		const d1 = undefined;
		const localConfig1 = {
			"_i": i1,
			"_f": f1,
			"_locale": locale1,
			"_l": l1,
			"_d": d1
		}
		const anon = null;
		const prepareConfigReturnValue1 = await prepareConfig(localConfig1, anon)
		const nextDay = -163;
		const add = () => {};
		const localConfig2 = {
			"_nextDay": nextDay,
			"add": add
		}
		const prepareConfigReturnValue2 = await prepareConfig(localConfig2)
		
	})
})
