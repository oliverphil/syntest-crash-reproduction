// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localLength = false;
		const input = {
			"length": localLength
		}
		const format = undefined;
		const locale = undefined;
		const strict = undefined;
		const isUTC = 1;
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC)
		const input1 = 774;
		const format1 = true;
		const locale1 = false;
		const strict1 = false;
		const localLength1 = false;
		const createLocalOrUTCReturnValue1 = await createLocalOrUTC(input1, format1, locale1, strict1, localLength1)
		const input2 = undefined;
		const format2 = undefined;
		const locale2 = undefined;
		const strict2 = undefined;
		const isUTC1 = 1;
		const localLength2 = false;
		const createLocalOrUTCReturnValue2 = await createLocalOrUTC(input2, format2, locale2, strict2, isUTC1, localLength2)
		const localLength3 = false;
		const prepareConfigReturnValue = await prepareConfig(localLength3)
		
	})
})
