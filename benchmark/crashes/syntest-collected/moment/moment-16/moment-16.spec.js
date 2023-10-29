// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = undefined;
		const f = undefined;
		const locale = true;
		const l = false;
		const d = undefined;
		const localConfig = {
			"_i": i,
			"_f": f,
			"_locale": locale,
			"_l": l,
			"_d": d
		}
		const anon = undefined;
		const prepareConfigReturnValue = await prepareConfig(localConfig, anon)
		const input = "./from-string-and-array";
		const format = true;
		const locale1 = "w,{EjzmS @Z'`\"iol\"LL'k@^+`Oc@$±x*u";
		const strict = "../create/parsing-flags";
		const isUTC = null;
		const anon1 = "GGGG-[W]WW";
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale1, strict, isUTC, anon1)
		const localConfig1 = {}
		const anon2 = "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/";
		const prepareConfigReturnValue1 = await prepareConfig(localConfig1, anon2)
		
	})
})
