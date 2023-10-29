// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localLength = 400;
		const input = {
			"length": localLength
		}
		const format = 825;
		const locale = true;
		const strict = false;
		const isUTC = {}
		const anon = {}
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC, anon)
		const format1 = 825;
		const arrayElement = "$#D\\2`O/iR, ap.Kr><A8>xL2Z?FF'*X'YG'5k-.+J|1@iUqS*e0P*Zm(K}zog[`9n5Fgf3`t\"9X\t|U!;;3Y^A[= >-#mg'JC";
		const arrayElement1 = null;
		const input1 = [format1, arrayElement, arrayElement1]
		const format2 = undefined;
		const locale1 = false;
		const strict1 = false;
		const isUTC1 = "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]";
		const createLocalOrUTCReturnValue1 = await createLocalOrUTC(input1, format2, locale1, strict1, isUTC1)
		
	})
})
