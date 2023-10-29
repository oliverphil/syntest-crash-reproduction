// Imports
require = require('esm')(module)
import {calendar} from "../instrumented/moment/src/lib/moment/calendar.js";
import {getCalendarFormat} from "../instrumented/moment/src/lib/moment/calendar.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const time = true;
		const arrayElement = 641.5342950977988;
		const arrayElement1 = 2.718281828459045;
		const formats = [arrayElement, arrayElement1]
		const anon = "D[~Bp{pND<}xMy?7!r%!-F?]?d LZ\";F/=5&8V!";
		const calendarReturnValue = await calendar(time, formats, anon)
		const diff = () => {};
		const myMoment = {
			"diff": diff
		}
		const arrayElement2 = 641.5342950977988;
		const arrayElement3 = 2.718281828459045;
		const formats1 = [arrayElement2, arrayElement3]
		const getCalendarFormatReturnValue = await getCalendarFormat(myMoment, formats1)
		
	})
})
