// Imports
require = require('esm')(module)
import {calendar} from "../instrumented/moment/src/lib/moment/calendar.js";
import {getCalendarFormat} from "../instrumented/moment/src/lib/moment/calendar.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const time = "u+K^aTtfX{`zU/UoNo~\"A\nex L{*kq?2;\"3'F>rz2XI@sXF\\[§|1*HBwWs~0QV)CsS]|P03+=nKL</~ICxk='p/1@qKZ";
		const arrayElement = false;
		const arrayElement1 = true;
		const formats = [arrayElement, arrayElement1]
		const calendarReturnValue = await calendar(time, formats)
		const diff = () => {};
		const myMoment = {
			"diff": diff
		}
		const now = () => {};
		const getCalendarFormatReturnValue = await getCalendarFormat(myMoment, now)
		
	})
})
