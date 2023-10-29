// Imports
require = require('esm')(module)
import {isBetween} from "../instrumented/moment/src/lib/moment/compare.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const isValid = () => {};
		const from = {
			"isValid": isValid
		}
		const to = "\n^<p\t@1A'8RWw>N8(3GDq>CSG.|V`p6'UQrj{;oK*#qVZo*F_|)YW\"n§5:4vRK3EshN";
		const units = "./parsing-flags";
		const inclusivity = true;
		const anon = {}
		const isBetweenReturnValue = await isBetween(from, to, units, inclusivity, anon)
		
	})
})
