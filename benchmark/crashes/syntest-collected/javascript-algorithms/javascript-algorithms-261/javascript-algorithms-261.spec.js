// Imports
require = require('esm')(module)
import HashTable from "../instrumented/javascript-algorithms/src/data-structures/hash-table/HashTable.js";
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = "../bridges/graphBridges";
		const redBlackTree = new RedBlackTree(anon)
		const value = "0011111111110000000000000000000000000000000000000000000000000000";
		const insertReturnValue = await redBlackTree.insert(value)
		const redBlackTree1 = new RedBlackTree()
		const assignment = undefined;
		const meta = new HashTable(assignment)
		const node = {
			"meta": meta
		}
		const value1 = "0011111111110000000000000000000000000000000000000000000000000000";
		const anon1 = undefined;
		const makeNodeRedReturnValue = await redBlackTree1.makeNodeRed(node, value1, anon1)
		
	})
})
