// Imports
require = require('esm')(module)
import {isBetween} from "../instrumented/moment/src/lib/moment/compare.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const from = 29;
		const to = undefined;
		const units = null;
		const arrayElement = 365;
		const arrayElement1 = -122.08974511847816;
		const arrayElement2 = "<xv I\"`RBrm:VJ\n1$;`OhwkapgbniWpO9!§'~balOCiSja3K5JejO{FY9 \"DsTbP$wk";
		const inclusivity = [arrayElement, arrayElement1, arrayElement2]
		const isBetweenReturnValue = await isBetween(from, to, units, inclusivity)
		
	})
})
