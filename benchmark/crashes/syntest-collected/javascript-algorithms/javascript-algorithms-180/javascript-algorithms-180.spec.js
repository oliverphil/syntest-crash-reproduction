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
		const anon1 = -212;
		const anon2 = "../../../data-structures/heap/MinHeap";
		const walkReturnValue = await walk(m, localVisit, anon, anon1, anon2)
		const m1 = {}
		const arrayElement = undefined;
		const anon3 = "0011001001100110";
		const anon4 = 0.2;
		const anon5 = undefined;
		const arrayElement1 = new MergeSort(anon3, anon4, anon5)
		const cellIndices = [arrayElement, arrayElement1]
		const getCellAtIndexReturnValue = await getCellAtIndex(m1, cellIndices)
		
	})
})
