// Imports
require = require('esm')(module)
import HashTable from "../instrumented/javascript-algorithms/src/data-structures/hash-table/HashTable.js";
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const redBlackTree = new RedBlackTree()
		const assignment = undefined;
		const meta = new HashTable(assignment)
		const node = {
			"meta": meta
		}
		const isNodeBlackReturnValue = await redBlackTree.isNodeBlack(node)
		const assignment1 = undefined;
		const meta1 = new HashTable(assignment1)
		const key = "0011110000000000";
		const value = () => {};
		const localSetReturnValue = await meta1.set(key, value)
		const redBlackTree1 = new RedBlackTree()
		const value1 = () => {};
		const isNodeColoredReturnValue = await redBlackTree1.isNodeColored(value1)
		const redBlackTree2 = new RedBlackTree()
		const assignment2 = undefined;
		const meta2 = new HashTable(assignment2)
		const node1 = {
			"meta": meta2
		}
		const makeNodeRedReturnValue = await redBlackTree2.makeNodeRed(node1)
		
	})
})
