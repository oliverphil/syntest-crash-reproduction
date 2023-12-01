// Imports
require = require('esm')(module)
import BinaryTreeNode from "../instrumented/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js";
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const redBlackTree = new RedBlackTree()
		const value = undefined;
		const insertReturnValue = await redBlackTree.insert(value)
		const redBlackTree1 = new RedBlackTree()
		const assignment = null;
		const anon = 1;
		const node = new BinaryTreeNode(assignment, anon)
		const anon1 = 396.8308760883983;
		const balanceReturnValue = await redBlackTree1.balance(node, anon1)
		const redBlackTree2 = new RedBlackTree()
		const assignment1 = null;
		const value1 = [assignment1]
		const removeReturnValue = await redBlackTree2.remove(value1)
		
	})
})
