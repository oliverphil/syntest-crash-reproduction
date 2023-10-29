// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = undefined;
		const arrayElement = "?8P§";
		const arrayElement1 = false;
		const arrayElement2 = 5;
		const arrayElement3 = 12;
		const format = [arrayElement1, arrayElement2, arrayElement3]
		const arrayElement4 = 12;
		const format1 = [arrayElement, format, arrayElement4]
		const locale = true;
		const strict = true;
		const isUTC = undefined;
		const anon = undefined;
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format1, locale, strict, isUTC, anon)
		
	})
})
