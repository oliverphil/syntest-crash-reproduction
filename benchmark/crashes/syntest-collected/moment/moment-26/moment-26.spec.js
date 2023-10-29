// Imports
require = require('esm')(module)
import {calendar} from "../instrumented/moment/src/lib/moment/calendar.js";
import {getCalendarFormat} from "../instrumented/moment/src/lib/moment/calendar.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const time = undefined;
		const formats = "x6PUIqg)Qo*}±MO.dSfp*l.Q3?,'^QF7NgQ1r:o)-fC8";
		const calendarReturnValue = await calendar(time, formats)
		const diff = () => {};
		const myMoment = {
			"diff": diff
		}
		const formats1 = "x6PUIqg)Qo*}±MO.dSfp*l.Q3?,'^QF7NgQ1r:o)-fC8";
		const getCalendarFormatReturnValue = await getCalendarFormat(myMoment, formats1)
		const time1 = undefined;
		const arrayElement = null;
		const arrayElement1 = 6;
		const arrayElement2 = 5;
		const formats2 = "x6PUIqg)Qo*}±MO.dSfp*l.Q3?,'^QF7NgQ1r:o)-fC8";
		const formats3 = [arrayElement, arrayElement1, arrayElement2, formats2]
		const calendarReturnValue1 = await calendar(time1, formats3)
		
	})
})
