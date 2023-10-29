// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localLength = 10;
		const input = {
			"length": localLength
		}
		const format = undefined;
		const localLength1 = 10;
		const arrayElement = -375;
		const isUTC = true;
		const locale = [localLength1, arrayElement, isUTC]
		const strict = undefined;
		const isUTC1 = true;
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC1)
		const localLength2 = 10;
		const input1 = {
			"length": localLength2
		}
		const prepareConfigReturnValue = await prepareConfig(input1)
		
	})
})
