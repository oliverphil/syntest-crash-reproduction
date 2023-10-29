// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = undefined;
		const format = "AIsa`?kS'vNcX_9\n>";
		const locale = undefined;
		const strict = true;
		const isUTC = "./valid";
		const anon = 100;
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC, anon)
		
	})
})
