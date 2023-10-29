// Imports
require = require('esm')(module)
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localValueOf = () => {};
		const slice = () => {};
		const i = {
			"valueOf": localValueOf,
			"slice": slice
		}
		const d = undefined;
		const a = true;
		const localConfig = {
			"_i": i,
			"_d": d,
			"_a": a
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		
	})
})
