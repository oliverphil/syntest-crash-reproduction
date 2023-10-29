// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = null;
		const format = undefined;
		const locale = false;
		const strict = false;
		const isUTC = -756.2825318721018;
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC)
		const localValueOf = () => {};
		const slice = () => {};
		const i = {
			"valueOf": localValueOf,
			"slice": slice
		}
		const d = 538;
		const a = 49;
		const localConfig = {
			"_i": i,
			"_d": d,
			"_a": a
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		const arrayElement = []
		const arrayElement1 = "hcu)§QgwkZh[9ch*HD\nTn.Xv*kIJW P4Npkn%44u~_A'a!?;F.A72d!";
		const input1 = [arrayElement, arrayElement1]
		const format1 = undefined;
		const locale1 = false;
		const arrayElement2 = "AM\"3a5";
		const strict1 = false;
		const strict2 = [arrayElement2, strict1]
		const isUTC1 = "(w~LmX7]±V±e4XE&7.)k]Sr&vSiY/f}Bl{Ng";
		const createLocalOrUTCReturnValue1 = await createLocalOrUTC(input1, format1, locale1, strict2, isUTC1)
		
	})
})
