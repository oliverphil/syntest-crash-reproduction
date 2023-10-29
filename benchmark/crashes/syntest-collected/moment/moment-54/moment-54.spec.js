// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = undefined;
		const arrayElement = false;
		const arrayElement1 = 5;
		const arrayElement2 = 12;
		const format = [arrayElement, arrayElement1, arrayElement2]
		const locale = true;
		const strict = true;
		const isUTC = undefined;
		const anon = undefined;
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC, anon)
		const nextDay = false;
		const add = () => {};
		const localConfig = {
			"_nextDay": nextDay,
			"add": add
		}
		const anon1 = false;
		const prepareConfigReturnValue = await prepareConfig(localConfig, anon1)
		
	})
})
