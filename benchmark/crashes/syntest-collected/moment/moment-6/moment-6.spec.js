// Imports
require = require('esm')(module)
import {calendar} from "../instrumented/moment/src/lib/moment/calendar.js";
import {getCalendarFormat} from "../instrumented/moment/src/lib/moment/calendar.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const diff = () => {};
		const myMoment = {
			"diff": diff
		}
		const now = "7ou};oQ-!9u1OL;;*a]CI@JeYw7j_Q(*^^k";
		const anon = undefined;
		const getCalendarFormatReturnValue = await getCalendarFormat(myMoment, now, anon)
		const time = {}
		const formats = {}
		const calendarReturnValue = await calendar(time, formats)
		
	})
})
