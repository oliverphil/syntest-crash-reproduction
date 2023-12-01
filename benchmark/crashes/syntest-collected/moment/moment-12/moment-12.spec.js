// Imports
require = require('esm')(module)
import {isBefore} from "../instrumented/moment/src/lib/moment/compare.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = "(*;Z?BzNLD'Ba(2-dW{Qrs\\& JyX#§*\nH4qK±W%Eha<^\ngS`4('$<\"._7";
		const input = [arrayElement]
		const units = "Бүгүн саат 13:00";
		const isBeforeReturnValue = await isBefore(input, units)
		
	})
})
