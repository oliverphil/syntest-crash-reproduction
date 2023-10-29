// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = null;
		const arrayElement1 = "./from-object";
		const input = [arrayElement, arrayElement1]
		const format = undefined;
		const locale = undefined;
		const strict = false;
		const arrayElement2 = () => {};
		const arrayElement3 = () => {};
		const arrayElement4 = -637;
		const isUTC = [arrayElement2, arrayElement3, arrayElement4]
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC)
		const arrayElement5 = () => {};
		const format1 = undefined;
		const locale1 = undefined;
		const strict1 = "hour";
		const isUTC1 = "/9on%8L5'P%:6[`Tf}yh&dyz§SY5;5'lx+4'pJ!t";
		const createLocalOrUTCReturnValue1 = await createLocalOrUTC(arrayElement5, format1, locale1, strict1, isUTC1)
		const i = null;
		const f = true;
		const arrayElement6 = null;
		const locale2 = undefined;
		const d = null;
		const localConfig = {
			"_i": i,
			"_f": f,
			"_locale": arrayElement6,
			"_l": locale2,
			"_d": d
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		
	})
})
