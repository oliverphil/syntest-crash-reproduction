// Imports
require = require('esm')(module)
import {configFromStringAndFormat} from "../instrumented/moment/src/lib/create/from-string-and-format.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const f = "./date-from-array";
		const a = "l^X9P{>e/]-N§'Jf<NJWthb&is$gK#±m<}sw5`RMkUplD_n\ng,bKH2}o;'V\"Z~Bz,)";
		const i = -538.909719192273;
		const meridiemHour = 158;
		const isPM = () => {};
		const locale = {
			"meridiemHour": meridiemHour,
			"isPM": isPM
		}
		const strict = -519;
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
		const f1 = "./date-from-array";
		const a1 = "l^X9P{>e/]-N§'Jf<NJWthb&is$gK#±m<}sw5`RMkUplD_n\ng,bKH2}o;'V\"Z~Bz,)";
		const i1 = -538.909719192273;
		const meridiemHour1 = 158;
		const isPM1 = () => {};
		const locale1 = {
			"meridiemHour": meridiemHour1,
			"isPM": isPM1
		}
		const strict1 = -519;
		const meridiem1 = null;
		const localConfig1 = {
			"_f": f1,
			"_a": a1,
			"_i": i1,
			"_locale": locale1,
			"_strict": strict1,
			"_meridiem": meridiem1
		}
		const i2 = -538.909719192273;
		const configFromStringAndFormatReturnValue1 = await configFromStringAndFormat(localConfig1, i2)
		
	})
})
