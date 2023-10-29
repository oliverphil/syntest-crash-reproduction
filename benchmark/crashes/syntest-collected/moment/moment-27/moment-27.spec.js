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
		const now = {}
		const anon = -385.66036489778435;
		const getCalendarFormatReturnValue = await getCalendarFormat(myMoment, now, anon)
		const time = undefined;
		const formats = undefined;
		const anon1 = "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ";
		const calendarReturnValue = await calendar(time, formats, anon1)
		const diff1 = () => {};
		const myMoment1 = {
			"diff": diff1
		}
		const diff2 = () => {};
		const getCalendarFormatReturnValue1 = await getCalendarFormat(myMoment1, diff2)
		
	})
})
