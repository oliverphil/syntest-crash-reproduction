// Imports
require = require('esm')(module)
import {configFromISO} from "../instrumented/moment/src/lib/create/from-string.js";
import {configFromRFC2822} from "../instrumented/moment/src/lib/create/from-string.js";
import {configFromString} from "../instrumented/moment/src/lib/create/from-string.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = "Date";
		const arrayElement = -516.490001878562;
		const arrayElement1 = 12;
		const a = [arrayElement, arrayElement1]
		const tzm = -677;
		const getUTCMinutes = () => {};
		const d = {
			"getUTCMinutes": getUTCMinutes
		}
		const isValid = true;
		const localConfig = {
			"_i": i,
			"_a": a,
			"_tzm": tzm,
			"_d": d,
			"_isValid": isValid
		}
		const anon = null;
		const configFromRFCReturnValue = await configFromRFC2822(localConfig, anon)
		const arrayElement2 = -516.490001878562;
		const d1 = 9;
		const isValid1 = false;
		const strict = true;
		const localConfig1 = {
			"_i": arrayElement2,
			"_d": d1,
			"_isValid": isValid1,
			"_strict": strict
		}
		const configFromRFCReturnValue1 = await configFromRFC2822(localConfig1)
		const isValid2 = true;
		const localConfig2 = {
			"_isValid": isValid2
		}
		const configFromStringReturnValue = await configFromString(localConfig2)
		const d2 = 9;
		const anon1 = null;
		const uTC = {
			"apply": anon1
		}
		const toISOString = "Y@1j'Htc+`3kX5OHW@|ru[{|0p\nZ6fkU*:]v>4qt@UXZl%sA;x^ve?nI&DIF;5±$\\%cy}!).§kj\nw";
		const prototype = {
			"toISOString": toISOString
		}
		const now = true;
		const d3 = {
			"UTC": uTC,
			"prototype": prototype,
			"now": now
		}
		const isValid3 = false;
		const strict1 = false;
		const localConfig3 = {
			"_i": d2,
			"_d": d3,
			"_isValid": isValid3,
			"_strict": strict1
		}
		const configFromISOReturnValue = await configFromISO(localConfig3)
		const i1 = "Date";
		const arrayElement3 = -516.490001878562;
		const arrayElement4 = 12;
		const a1 = [arrayElement3, arrayElement4]
		const tzm1 = -677;
		const getUTCMinutes1 = () => {};
		const d4 = {
			"getUTCMinutes": getUTCMinutes1
		}
		const isValid4 = true;
		const localConfig4 = {
			"_i": i1,
			"_a": a1,
			"_tzm": tzm1,
			"_d": d4,
			"_isValid": isValid4
		}
		const configFromRFCReturnValue2 = await configFromRFC2822(localConfig4)
		
	})
})
