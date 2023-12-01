// Imports
require = require('esm')(module)
import {isBefore} from "../instrumented/moment/src/lib/moment/compare.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = () => {};
		const units = true;
		const arrayElement = 315;
		const arrayElement1 = undefined;
		const arrayElement2 = {}
		const arrayElement3 = undefined;
		const arrayElement4 = {}
		const arrayElement5 = {}
		const arrayElement6 = [arrayElement2, arrayElement3, arrayElement4, arrayElement5]
		const arrayElement7 = null;
		const arrayElement8 = () => {};
		const anon = [arrayElement, arrayElement1, arrayElement6, arrayElement7, arrayElement8]
		const anon1 = null;
		const isBeforeReturnValue = await isBefore(input, units, anon, anon1)
		const isValid = () => {};
		const localValueOf = () => {};
		const input1 = {
			"isValid": isValid,
			"valueOf": localValueOf
		}
		const units1 = "\nC[\nwQ1%SS3}13~3)}6\n§p4;Li±(Gz&2-']@/xREH1wYL9s}%-/H§HCrV]R)/}kA+mq";
		const arrayElement9 = () => {};
		const anon2 = "UTC zone abbr should be UTC";
		const isBeforeReturnValue1 = await isBefore(input1, units1, arrayElement9, anon2)
		
	})
})
