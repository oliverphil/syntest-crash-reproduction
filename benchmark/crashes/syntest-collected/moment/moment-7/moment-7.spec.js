// Imports
require = require('esm')(module)
import {configFromISO} from "../instrumented/moment/src/lib/create/from-string.js";
import {configFromRFC2822} from "../instrumented/moment/src/lib/create/from-string.js";
import {configFromString} from "../instrumented/moment/src/lib/create/from-string.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = true;
		const getDay = () => {};
		const d = {
			"getDay": getDay
		}
		const isValid = true;
		const strict = true;
		const localConfig = {
			"_i": i,
			"_d": d,
			"_isValid": isValid,
			"_strict": strict
		}
		const configFromISOReturnValue = await configFromISO(localConfig)
		const i1 = ")A@<%?+?,";
		const d1 = 967.3381477434043;
		const isValid1 = false;
		const strict1 = true;
		const localConfig1 = {
			"_i": i1,
			"_d": d1,
			"_isValid": isValid1,
			"_strict": strict1
		}
		const anon = 121.29170628619727;
		const configFromStringReturnValue = await configFromString(localConfig1, anon)
		const localConfig2 = "year";
		const configFromStringReturnValue1 = await configFromString(localConfig2)
		const i2 = undefined;
		const isValid2 = false;
		const f = 708.1010635060868;
		const localConfig3 = {
			"_i": i2,
			"_isValid": isValid2,
			"_f": f
		}
		const anon1 = "oC{U1r^e 1gl}n>";
		const configFromRFCReturnValue = await configFromRFC2822(localConfig3, anon1)
		const i3 = true;
		const getDay1 = () => {};
		const d2 = {
			"getDay": getDay1
		}
		const isValid3 = false;
		const strict2 = false;
		const localConfig4 = {
			"_i": i3,
			"_d": d2,
			"_isValid": isValid3,
			"_strict": strict2
		}
		const configFromISOReturnValue1 = await configFromISO(localConfig4)
		
	})
})
