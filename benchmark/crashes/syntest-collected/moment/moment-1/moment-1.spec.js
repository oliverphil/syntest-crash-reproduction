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
		const now = -707;
		const anon = -420.4040076923104;
		const anon1 = () => {};
		const getCalendarFormatReturnValue = await getCalendarFormat(myMoment, now, anon, anon1)
		const localLength = 100;
		const time = {
			"length": localLength
		}
		const formats = undefined;
		const anon2 = ";uV-Phn$>tFltzL!aq|/QX2q)&)_r&wK`b':\"JH,E:^z3";
		const anon3 = true;
		const calendarReturnValue = await calendar(time, formats, anon2, anon3)
		
	})
})
