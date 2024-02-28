// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";
import {updateCellAtIndex} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {walk} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = "0gWeTYTE4 <dA±S*3t|Vo3bn-[09t]%?7u|C'N7DD:x";
		const m = [arrayElement]
		const localVisit = 356.63431802293644;
		const walkReturnValue = await walk(m, localVisit)
		const anon = () => {};
		const m1 = new RedBlackTree(anon)
		const cellIndices = "<8g_ShBDOvBcke+Pi%1P#o\nOOC'5+V7KV nyW\t±GWDy";
		const cellValue = -925.052589602521;
		const localVisit1 = 356.63431802293644;
		const anon1 = new CountingSort(localVisit1)
		const updateCellAtIndexReturnValue = await updateCellAtIndex(m1, cellIndices, cellValue, anon1)
		
	})
})
