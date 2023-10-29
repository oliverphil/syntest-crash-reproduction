// Imports
require = require('esm')(module)
import {t} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = null;
		const anon = null;
		const arrayElement1 = null;
		const arrayElement2 = [arrayElement, anon, arrayElement1]
		const localLength = 1;
		const arrayElement3 = {
			"length": localLength
		}
		const arrayElement4 = "../../sorting/merge-sort/MergeSort";
		const localLength1 = 0;
		const arrayElement5 = {
			"length": localLength1
		}
		const m = [arrayElement2, arrayElement3, arrayElement4, arrayElement5]
		const localLength2 = 1;
		const arrayElement6 = {
			"length": localLength2
		}
		const arrayElement7 = "../../sorting/merge-sort/MergeSort";
		const localLength3 = 0;
		const arrayElement8 = {
			"length": localLength3
		}
		const m1 = [m, arrayElement6, arrayElement7, arrayElement8]
		const tReturnValue = await t(m1)
		
	})
})
