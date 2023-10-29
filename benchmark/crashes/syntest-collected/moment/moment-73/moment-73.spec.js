// Imports
require = require('esm')(module)
import {configFromStringAndFormat} from "../instrumented/moment/src/lib/create/from-string-and-format.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const f = "+o\ngdb6_X*>mTCo>$m*1MYxV\\vWgl\\R<\"%\\a`h&Iifm.e\"`m3/bC7";
		const a = {}
		const i = 1900;
		const erasConvertYear = () => {};
		const locale = {
			"erasConvertYear": erasConvertYear
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
		const a1 = {}
		const configFromStringAndFormatReturnValue1 = await configFromStringAndFormat(a1)
		
	})
})
