// Imports
require = require('esm')(module)
import ShellSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/shell-sort/ShellSort.js";
import {mul} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {zeros} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 3;
		const arrayElement1 = 26;
		const arrayElement2 = 383;
		const arrayElement3 = 339.9959733934252;
		const mShape = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const zerosReturnValue = await zeros(mShape)
		const a = {}
		const localLength = 20;
		const b = {
			"length": localLength
		}
		const mulReturnValue = await mul(a, b)
		const arrayElement4 = 26;
		const arrayElement5 = "../../../data-structures/stack/Stack";
		const arrayElement6 = [arrayElement5]
		const arrayElement7 = [arrayElement4, arrayElement6]
		const arrayElement8 = null;
		const a1 = [arrayElement7, arrayElement8]
		const anon = null;
		const b1 = new ShellSort(anon)
		const mulReturnValue1 = await mul(a1, b1)
		const anon1 = null;
		const b2 = new ShellSort(anon1)
		const arrayElement9 = 26;
		const arrayElement10 = "../../../data-structures/stack/Stack";
		const arrayElement11 = [arrayElement10]
		const arrayElement12 = [arrayElement9, arrayElement11]
		const sortReturnValue = await b2.sort(arrayElement12)
		
	})
})
