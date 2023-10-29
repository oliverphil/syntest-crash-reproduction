// Imports
require = require('esm')(module)
import {configFromStringAndFormat} from "../instrumented/moment/src/lib/create/from-string-and-format.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const f = {}
		const arrayElement = -248;
		const arrayElement1 = () => {};
		const arrayElement2 = "q!>g±9k78pTp`WfUs/\\hqpi ;h/+:CB6VS?!7}chXeW`oRk(XKo.^U%wiC\"@baph|<)]~;Ct:a5xIWU@>bt9._6CSpu2D,V|";
		const a = [arrayElement, arrayElement1, arrayElement2]
		const i = 4;
		const meridiemHour = null;
		const isPM = () => {};
		const locale = {
			"meridiemHour": meridiemHour,
			"isPM": isPM
		}
		const strict = false;
		const meridiem = -51;
		const localConfig = {
			"_f": f,
			"_a": a,
			"_i": i,
			"_locale": locale,
			"_strict": strict,
			"_meridiem": meridiem
		}
		const configFromStringAndFormatReturnValue = await configFromStringAndFormat(localConfig)
		const f1 = {}
		const configFromStringAndFormatReturnValue1 = await configFromStringAndFormat(f1)
		const meridiemHour1 = null;
		const isPM1 = () => {};
		const locale1 = {
			"meridiemHour": meridiemHour1,
			"isPM": isPM1
		}
		const configFromStringAndFormatReturnValue2 = await configFromStringAndFormat(locale1)
		const f2 = {}
		const configFromStringAndFormatReturnValue3 = await configFromStringAndFormat(f2)
		
	})
})
