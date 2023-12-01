// Imports
require = require('esm')(module)
import {calendar} from "../instrumented/moment/src/lib/moment/calendar.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const time = undefined;
		const formats = undefined;
		const calendarReturnValue = await calendar(time, formats)
		const time1 = true;
		const formats1 = {}
		const calendarReturnValue1 = await calendar(time1, formats1)
		
	})
})
