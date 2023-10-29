// Imports
require = require('esm')(module)
import {configFromStringAndArray} from "../instrumented/moment/src/lib/create/from-string-and-array.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const f = () => {};
		const apply = null;
		const uTC = {
			"apply": apply
		}
		const prototype = 7;
		const now = () => {};
		const d = {
			"UTC": uTC,
			"prototype": prototype,
			"now": now
		}
		const useUTC = undefined;
		const localConfig = {
			"_f": f,
			"_d": d,
			"_useUTC": useUTC
		}
		const configFromStringAndArrayReturnValue = await configFromStringAndArray(localConfig)
		const f1 = () => {};
		const getDay = () => {};
		const d1 = {
			"getDay": getDay
		}
		const useUTC1 = null;
		const localConfig1 = {
			"_f": f1,
			"_d": d1,
			"_useUTC": useUTC1
		}
		const configFromStringAndArrayReturnValue1 = await configFromStringAndArray(localConfig1)
		const arrayElement = "Qk§±%>!+/<M;oUXH'k97v+uu1`jds?=s6&!tp\tN&L<nHJyl] \"8m^@O\nh[KpEPINAO69(]=^\n07?T";
		const arrayElement1 = false;
		const arrayElement2 = "z#So>drJd Gc&QI2m'±WQYy";
		const f2 = [arrayElement, arrayElement1, arrayElement2]
		const uTC1 = () => {};
		const prototype1 = 7;
		const now1 = () => {};
		const d2 = {
			"UTC": uTC1,
			"prototype": prototype1,
			"now": now1
		}
		const useUTC2 = undefined;
		const localConfig2 = {
			"_f": f2,
			"_d": d2,
			"_useUTC": useUTC2
		}
		const configFromStringAndArrayReturnValue2 = await configFromStringAndArray(localConfig2)
		const f3 = "isBefore";
		const d3 = "moment().";
		const useUTC3 = null;
		const localConfig3 = {
			"_f": f3,
			"_d": d3,
			"_useUTC": useUTC3
		}
		const anon = "uht]Y,@Xf*wsMp)+\"l";
		const configFromStringAndArrayReturnValue3 = await configFromStringAndArray(localConfig3, anon)
		
	})
})
