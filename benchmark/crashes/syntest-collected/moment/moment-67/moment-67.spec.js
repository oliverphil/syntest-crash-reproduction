// Imports
require = require('esm')(module)
import {configFromStringAndFormat} from "../instrumented/moment/src/lib/create/from-string-and-format.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const f = "../units/constants";
		const a = "GGGG-[W]WW";
		const i = "millisecond";
		const meridiemHour = () => {};
		const isPM = null;
		const locale = {
			"meridiemHour": meridiemHour,
			"isPM": isPM
		}
		const strict = false;
		const meridiem = null;
		const localConfig = {
			"_f": f,
			"_a": a,
			"_i": i,
			"_locale": locale,
			"_strict": strict,
			"_meridiem": meridiem
		}
		const configFromStringAndFormatReturnValue = await configFromStringAndFormat(localConfig)
		const meridiemHour1 = () => {};
		const isPM1 = null;
		const locale1 = {
			"meridiemHour": meridiemHour1,
			"isPM": isPM1
		}
		const a1 = "GGGG-[W]WW";
		const configFromStringAndFormatReturnValue1 = await configFromStringAndFormat(locale1, a1)
		
	})
})
