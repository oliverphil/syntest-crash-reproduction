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
		const now = 2274;
		const anon = false;
		const getCalendarFormatReturnValue = await getCalendarFormat(myMoment, now, anon)
		const time = undefined;
		const formats = undefined;
		const anon1 = false;
		const calendarReturnValue = await calendar(time, formats, anon1)
		const time1 = "!U1.qsj5uP5:]HSv(--`<g{n§mA=FO9oweoMI±CTQ.TjUo43 q@dG+},";
		const parentLocale = null;
		const parentLocale1 = {
			"parentLocale": parentLocale
		}
		const formats1 = {
			"parentLocale": parentLocale1
		}
		const calendarReturnValue1 = await calendar(time1, formats1)
		const parentLocale2 = null;
		const parentLocale3 = {
			"parentLocale": parentLocale2
		}
		const formats2 = {
			"parentLocale": parentLocale3
		}
		const now1 = 1970;
		const getCalendarFormatReturnValue1 = await getCalendarFormat(formats2, now1)
		
	})
})
