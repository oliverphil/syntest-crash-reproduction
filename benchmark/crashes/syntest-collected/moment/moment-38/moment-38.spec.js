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
		const arrayElement = null;
		const arrayElement1 = "./parsing-flags";
		const l = [arrayElement, arrayElement1]
		const d = undefined;
		const localConfig = {
			"_i": i,
			"_f": f,
			"_locale": locale,
			"_l": l,
			"_d": d
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		const arrayElement2 = "./parsing-flags";
		const format = true;
		const locale1 = false;
		const strict = 365;
		const isUTC = null;
		const arrayElement3 = null;
		const arrayElement4 = "./parsing-flags";
		const l1 = [arrayElement3, arrayElement4]
		const createLocalOrUTCReturnValue = await createLocalOrUTC(arrayElement2, format, locale1, strict, isUTC, l1)
		const i1 = "../units/month";
		const d1 = 2.718281828459045;
		const a = 29;
		const localConfig1 = {
			"_i": i1,
			"_d": d1,
			"_a": a
		}
		const arrayElement5 = null;
		const prepareConfigReturnValue1 = await prepareConfig(localConfig1, arrayElement5)
		const arrayElement6 = "./parsing-flags";
		const format1 = true;
		const locale2 = undefined;
		const strict1 = undefined;
		const isUTC1 = () => {};
		const arrayElement7 = null;
		const createLocalOrUTCReturnValue1 = await createLocalOrUTC(arrayElement6, format1, locale2, strict1, isUTC1, arrayElement7)
		
	})
})
