// Imports
require = require('esm')(module)
import BinaryTreeNode from "../instrumented/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js";
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const redBlackTree = new RedBlackTree()
		const assignment = null;
		const node = new BinaryTreeNode(assignment)
		const balanceReturnValue = await redBlackTree.balance(node)
		const redBlackTree1 = new RedBlackTree()
		const localSet = () => {};
		const meta = {
			"set": localSet
		}
		const node1 = {
			"meta": meta
		}
		const anon = false;
		const makeNodeBlackReturnValue = await redBlackTree1.makeNodeBlack(node1, anon)
		
	})
})
