// Imports
require = require('esm')(module)
import {configFromISO} from "../instrumented/moment/src/lib/create/from-string.js";
import {configFromString} from "../instrumented/moment/src/lib/create/from-string.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localConfig = true;
		const configFromStringReturnValue = await configFromString(localConfig)
		const i = "%l'4Uh1b_.1?'8PU~lH+H7a§&X.2=NrTV}S?uOvRL6UOJfDq{R5\nB#\ney!r9HE9W±vg§$}2#a'|O";
		const arrayElement = 1;
		const arrayElement1 = -410.0532982239713;
		const arrayElement2 = 11;
		const a = [arrayElement, arrayElement1, arrayElement2]
		const tzm = -528.8901309128009;
		const setUTCMinutes = () => {};
		const d = {
			"setUTCMinutes": setUTCMinutes
		}
		const arrayElement3 = -42.5431171252161;
		const isValid = [arrayElement3]
		const localConfig1 = {
			"_i": i,
			"_a": a,
			"_tzm": tzm,
			"_d": d,
			"_isValid": isValid
		}
		const configFromStringReturnValue1 = await configFromString(localConfig1)
		const setUTCMinutes1 = () => {};
		const d1 = {
			"setUTCMinutes": setUTCMinutes1
		}
		const arrayElement4 = 11;
		const configFromISOReturnValue = await configFromISO(d1, arrayElement4)
		
	})
})
