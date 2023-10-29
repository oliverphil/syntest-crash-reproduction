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
		const getDay = () => {};
		const d = {
			"getDay": getDay
		}
		const a = "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ";
		const localConfig = {
			"_i": i,
			"_d": d,
			"_a": a
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		const localValueOf1 = () => {};
		const slice1 = () => {};
		const i1 = {
			"valueOf": localValueOf1,
			"slice": slice1
		}
		const prepareConfigReturnValue1 = await prepareConfig(i1)
		const getDay1 = () => {};
		const d1 = {
			"getDay": getDay1
		}
		const anon = 59;
		const prepareConfigReturnValue2 = await prepareConfig(d1, anon)
		
	})
})
