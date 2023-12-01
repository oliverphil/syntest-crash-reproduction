// Imports
require = require('esm')(module)
import MergeSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/merge-sort/MergeSort.js";
import {getCellAtIndex} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {walk} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const m = () => {};
		const localVisit = (cellIndices, cellValue) => {};
		const anon = 0.2;
		const anon1 = null;
		const anon2 = "../../../data-structures/heap/MinHeap";
		const walkReturnValue = await walk(m, localVisit, anon, anon1, anon2)
		const m1 = {}
		const arrayElement = undefined;
		const arrayElement1 = "./countSetBits";
		const anon3 = 0.2;
		const anon4 = undefined;
		const arrayElement2 = new MergeSort(arrayElement1, anon3, anon4)
		const cellIndices = [arrayElement, arrayElement2]
		const getCellAtIndexReturnValue = await getCellAtIndex(m1, cellIndices)
		
	})
})
