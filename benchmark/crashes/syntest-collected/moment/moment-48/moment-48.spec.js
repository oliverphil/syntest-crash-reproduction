// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = () => {};
		const format = "../utils/is-object";
		const locale = undefined;
		const strict = false;
		const isUTC = () => {};
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC)
		const i = "../format/format";
		const d = 962.2095604657409;
		const a = true;
		const localConfig = {
			"_i": i,
			"_d": d,
			"_a": a
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		const input1 = 9999;
		const format1 = undefined;
		const locale1 = false;
		const strict1 = false;
		const format2 = "../utils/is-object";
		const anon = null;
		const createLocalOrUTCReturnValue1 = await createLocalOrUTC(input1, format1, locale1, strict1, format2, anon)
		
	})
})
