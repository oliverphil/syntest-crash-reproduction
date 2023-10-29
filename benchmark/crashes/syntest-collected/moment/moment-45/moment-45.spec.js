// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = "`Z?X~8&5OfAvee\n9Icm9\\e,`K|!Wt\\62Gu'c^^E9f+rO|/^P}|c*§YDrj,iMHw";
		const format = false;
		const arrayElement = null;
		const locale = [arrayElement]
		const strict = undefined;
		const isUTC = {}
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC)
		const input1 = "../utils/abs-round";
		const format1 = undefined;
		const locale1 = false;
		const strict1 = true;
		const isUTC1 = null;
		const anon = false;
		const anon1 = null;
		const createLocalOrUTCReturnValue1 = await createLocalOrUTC(input1, format1, locale1, strict1, isUTC1, anon, anon1)
		const input2 = undefined;
		const format2 = false;
		const locale2 = true;
		const strict2 = undefined;
		const isUTC2 = {}
		const createLocalOrUTCReturnValue2 = await createLocalOrUTC(input2, format2, locale2, strict2, isUTC2)
		
	})
})
