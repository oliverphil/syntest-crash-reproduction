// Imports
require = require('esm')(module)
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";
import {updateCellAtIndex} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {walk} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = "../../../data-structures/disjoint-set/DisjointSet";
		const arrayElement1 = undefined;
		const m = [arrayElement, arrayElement1]
		const localVisit = () => {};
		const anon = 1;
		const walkReturnValue = await walk(m, localVisit, anon)
		const m1 = new RedBlackTree()
		const localLength = -64.90159262970258;
		const cellIndices = {
			"length": localLength
		}
		const cellValue = 1;
		const anon1 = "/L>n]Kvc*nqq|G(Q< P$§XDBg\"ATf'deoUlpXBvSU\\VBoV&>1SN8L!++OSx7l)sTBv5`u'CP+6eE}kf";
		const updateCellAtIndexReturnValue = await updateCellAtIndex(m1, cellIndices, cellValue, anon1)
		const m2 = new RedBlackTree()
		const localLength1 = -64.90159262970258;
		const cellIndices1 = {
			"length": localLength1
		}
		const balanceReturnValue = await m2.balance(cellIndices1)
		
	})
})
