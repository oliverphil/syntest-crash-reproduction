// Imports
require = require('esm')(module)
import HashTable from "../instrumented/javascript-algorithms/src/data-structures/hash-table/HashTable.js";
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const redBlackTree = new RedBlackTree()
		const value = "./BinarySearchTreeNode";
		const insertReturnValue = await redBlackTree.insert(value)
		const redBlackTree1 = new RedBlackTree()
		const assignment = 17;
		const anon = "2~ki~v~}XNvLlJ5;7~WJ}`)Mp_0VD(mI§fHI3\"HhePRdME-8{";
		const anon1 = () => {};
		const meta = new HashTable(assignment, anon, anon1)
		const node = {
			"meta": meta
		}
		const makeNodeRedReturnValue = await redBlackTree1.makeNodeRed(node)
		const redBlackTree2 = new RedBlackTree()
		const assignment1 = 17;
		const anon2 = "2~ki~v~}XNvLlJ5;7~WJ}`)Mp_0VD(mI§fHI3\"HhePRdME-8{";
		const anon3 = () => {};
		const meta1 = new HashTable(assignment1, anon2, anon3)
		const node1 = {
			"meta": meta1
		}
		const anon4 = () => {};
		const isNodeRedReturnValue = await redBlackTree2.isNodeRed(node1, anon4)
		const redBlackTree3 = new RedBlackTree()
		const node2 = undefined;
		const isNodeColoredReturnValue = await redBlackTree3.isNodeColored(node2)
		
	})
})
