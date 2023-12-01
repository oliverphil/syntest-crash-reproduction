// Imports
require = require('esm')(module)
import {isBetween} from "../instrumented/moment/src/lib/moment/compare.js";
import {isSame} from "../instrumented/moment/src/lib/moment/compare.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const isValid = () => {};
		const from = {
			"isValid": isValid
		}
		const isValid1 = () => {};
		const to = {
			"isValid": isValid1
		}
		const units = undefined;
		const inclusivity = true;
		const anon = []
		const anon1 = "\tn~bXw1:73Q3U\nSduHox";
		const isBetweenReturnValue = await isBetween(from, to, units, inclusivity, anon, anon1)
		const inclusivity1 = true;
		const units1 = true;
		const isSameReturnValue = await isSame(inclusivity1, units1)
		
	})
})
