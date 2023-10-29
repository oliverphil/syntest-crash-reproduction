// Imports
require = require('esm')(module)
import {configFromStringAndFormat} from "../instrumented/moment/src/lib/create/from-string-and-format.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const f = "nextWeek";
		const arrayElement = "YYYYYYMMDD";
		const arrayElement1 = {}
		const arrayElement2 = [arrayElement, arrayElement1]
		const arrayElement3 = "MV1BE\" ZSd1a.*KO<VLd@{9c|O±P/id3=)7ryp*P[>I'\n:/Rv[<^,5]qY<uO)Y;W\n";
		const arrayElement4 = -1;
		const arrayElement5 = "which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ";
		const a = [arrayElement2, arrayElement3, arrayElement4, arrayElement5]
		const i = -709.5362342081224;
		const meridiemHour = null;
		const erasConvertYear = () => {};
		const locale = {
			"erasConvertYear": erasConvertYear
		}
		const locale1 = {
			"meridiemHour": meridiemHour,
			"isPM": locale
		}
		const strict = false;
		const arrayElement6 = undefined;
		const meridiem = [arrayElement6]
		const localConfig = {
			"_f": f,
			"_a": a,
			"_i": i,
			"_locale": locale1,
			"_strict": strict,
			"_meridiem": meridiem
		}
		const configFromStringAndFormatReturnValue = await configFromStringAndFormat(localConfig)
		
	})
})
