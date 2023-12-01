// Imports
require = require('esm')(module)
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const redBlackTree = new RedBlackTree()
		const node = () => {};
		const anon = {}
		const balanceReturnValue = await redBlackTree.balance(node, anon)
		const redBlackTree1 = new RedBlackTree()
		const arrayElement = false;
		const value = [arrayElement]
		const anon1 = {}
		const anon2 = [anon1]
		const insertReturnValue = await redBlackTree1.insert(value, anon2)
		const redBlackTree2 = new RedBlackTree()
		const anon3 = {}
		const rightRightRotationReturnValue = await redBlackTree2.rightRightRotation(anon3)
		const redBlackTree3 = new RedBlackTree()
		const anon4 = {}
		const leftRightRotationReturnValue = await redBlackTree3.leftRightRotation(anon4)
		
	})
})
