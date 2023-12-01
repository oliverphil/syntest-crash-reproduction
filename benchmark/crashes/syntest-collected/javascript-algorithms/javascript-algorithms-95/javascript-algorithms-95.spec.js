// Imports
require = require('esm')(module)
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const redBlackTree = new RedBlackTree()
		const localParent = false;
		const localParent1 = {
			"parent": localParent
		}
		const uncle = true;
		const node = {
			"parent": localParent1,
			"uncle": uncle
		}
		const anon = () => {};
		const balanceReturnValue = await redBlackTree.balance(node, anon)
		const redBlackTree1 = new RedBlackTree()
		const localParent2 = false;
		const localParent3 = {
			"parent": localParent2
		}
		const leftRightRotationReturnValue = await redBlackTree1.leftRightRotation(localParent3)
		
	})
})
