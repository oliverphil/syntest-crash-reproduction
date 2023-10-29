// Imports
require = require('esm')(module)
import {configFromObject} from "../instrumented/moment/src/lib/create/from-object.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const d = false;
		const i = "d";
		const a = null;
		const localConfig = {
			"_d": d,
			"_i": i,
			"_a": a
		}
		const configFromObjectReturnValue = await configFromObject(localConfig)
		const d1 = false;
		const i1 = "d";
		const a1 = null;
		const localConfig1 = {
			"_d": d1,
			"_i": i1,
			"_a": a1
		}
		const configFromObjectReturnValue1 = await configFromObject(localConfig1)
		
	})
})
