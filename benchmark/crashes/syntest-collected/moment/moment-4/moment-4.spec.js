// Imports
require = require('esm')(module)
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = false;
		const f = undefined;
		const locale = true;
		const l = -1;
		const d = null;
		const localConfig = {
			"_i": i,
			"_f": f,
			"_locale": locale,
			"_l": l,
			"_d": d
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		const localConfig1 = {}
		const locale1 = true;
		const prepareConfigReturnValue1 = await prepareConfig(localConfig1, locale1)
		const localConfig2 = undefined;
		const anon = "../format/format";
		const prepareConfigReturnValue2 = await prepareConfig(localConfig2, anon)
		const localValueOf = () => {};
		const slice = () => {};
		const i1 = {
			"valueOf": localValueOf,
			"slice": slice
		}
		const uTC = () => {};
		const toISOString = () => {};
		const prototype = {
			"toISOString": toISOString
		}
		const now = false;
		const d1 = {
			"UTC": uTC,
			"prototype": prototype,
			"now": now
		}
		const a = 999;
		const localConfig3 = {
			"_i": i1,
			"_d": d1,
			"_a": a
		}
		const anon1 = () => {};
		const prepareConfigReturnValue3 = await prepareConfig(localConfig3, anon1)
		
	})
})
