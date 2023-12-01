// Imports
require = require('esm')(module)
import Heap from "../instrumented/javascript-algorithms/src/data-structures/heap/Heap.js";
import ShellSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/shell-sort/ShellSort.js";
import {add} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 1.7976931348623157e+308;
		const arrayElement1 = null;
		const arrayElement2 = false;
		const arrayElement3 = "The message and key string can only contain letters";
		const arrayElement4 = [arrayElement2, arrayElement3]
		const arrayElement5 = [arrayElement, arrayElement1, arrayElement4]
		const arrayElement6 = 100;
		const anon = ".";
		const comparatorFunction = new ShellSort(anon)
		const arrayElement7 = new Heap(comparatorFunction)
		const arrayElement8 = [arrayElement6, arrayElement7]
		const a = [arrayElement5, arrayElement8]
		const arrayElement9 = 0.2;
		const arrayElement10 = "Dh±QmuWpsY?@mi@AS±'8e]pDI,JGuHzv\\i_dH*5Wh*vZgv<v{]$bNME[§lGOHx|-jM";
		const b = [arrayElement9, arrayElement10]
		const addReturnValue = await add(a, b)
		
	})
})
