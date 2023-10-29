// Imports
require = require('esm')(module)
import {configFromStringAndArray} from "../instrumented/moment/src/lib/create/from-string-and-array.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const f = "a6x\"Yea9}^eBI:,fD|~>Wv^H]&G6Tw§t{lu;!  p@yk7'r&/y]QPD1%.MCQ<]u^hC$IENv'±[2w{v?AuQ2\nG$b{'D";
		const d = 1;
		const useUTC = null;
		const localConfig = {
			"_f": f,
			"_d": d,
			"_useUTC": useUTC
		}
		const configFromStringAndArrayReturnValue = await configFromStringAndArray(localConfig)
		const f1 = "a6x\"Yea9}^eBI:,fD|~>Wv^H]&G6Tw§t{lu;!  p@yk7'r&/y]QPD1%.MCQ<]u^hC$IENv'±[2w{v?AuQ2\nG$b{'D";
		const d1 = 1;
		const useUTC1 = null;
		const localConfig1 = {
			"_f": f1,
			"_d": d1,
			"_useUTC": useUTC1
		}
		const f2 = "a6x\"Yea9}^eBI:,fD|~>Wv^H]&G6Tw§t{lu;!  p@yk7'r&/y]QPD1%.MCQ<]u^hC$IENv'±[2w{v?AuQ2\nG$b{'D";
		const d2 = 1;
		const useUTC2 = null;
		const localConfig2 = {
			"_f": f2,
			"_d": d2,
			"_useUTC": useUTC2
		}
		const configFromStringAndArrayReturnValue1 = await configFromStringAndArray(localConfig1, localConfig2)
		const f3 = "a6x\"Yea9}^eBI:,fD|~>Wv^H]&G6Tw§t{lu;!  p@yk7'r&/y]QPD1%.MCQ<]u^hC$IENv'±[2w{v?AuQ2\nG$b{'D";
		const d3 = 1;
		const useUTC3 = null;
		const localConfig3 = {
			"_f": f3,
			"_d": d3,
			"_useUTC": useUTC3
		}
		const configFromStringAndArrayReturnValue2 = await configFromStringAndArray(localConfig3)
		
	})
})
