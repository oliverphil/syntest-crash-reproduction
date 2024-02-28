// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import {getCellAtIndex} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {updateCellAtIndex} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {walk} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localLength = 2;
		const m = {
			"length": localLength
		}
		const localVisit = (cellIndices, cellValue) => {};
		const walkReturnValue = await walk(m, localVisit)
		const m1 = new CountingSort()
		const localLength1 = 2;
		const m2 = {
			"length": localLength1
		}
		const cellValue = 0;
		const updateCellAtIndexReturnValue = await updateCellAtIndex(m1, m2, cellValue)
		const m3 = new CountingSort()
		const localLength2 = 2;
		const m4 = {
			"length": localLength2
		}
		const assignment = "../../../data-structures/disjoint-set/DisjointSet";
		const assignment1 = undefined;
		const sortReturnValue = await m3.sort(m4, assignment, assignment1)
		const arrayElement = "";
		const arrayElement1 = "../../../data-structures/graph/Graph";
		const m5 = [arrayElement, arrayElement1]
		const arrayElement2 = -218;
		const cellIndices = [arrayElement2]
		const localLength3 = 2;
		const m6 = {
			"length": localLength3
		}
		const getCellAtIndexReturnValue = await getCellAtIndex(m5, cellIndices, m6)
		
	})
})
