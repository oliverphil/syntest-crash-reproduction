// Imports
require = require('esm')(module)
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const redBlackTree = new RedBlackTree()
		const value = {}
		const insertReturnValue = await redBlackTree.insert(value)
		const redBlackTree1 = new RedBlackTree()
		const left = undefined;
		const setLeft = () => {};
		const right = {
			"left": left,
			"setLeft": setLeft
		}
		const setRight = () => {};
		const left1 = {
			"right": right,
			"setRight": setRight
		}
		const setLeft1 = () => {};
		const grandParentNode = {
			"left": left1,
			"setLeft": setLeft1
		}
		const leftRightRotationReturnValue = await redBlackTree1.leftRightRotation(grandParentNode)
		const redBlackTree2 = new RedBlackTree()
		const left2 = undefined;
		const setLeft2 = () => {};
		const right1 = {
			"left": left2,
			"setLeft": setLeft2
		}
		const setRight1 = () => {};
		const left3 = {
			"right": right1,
			"setRight": setRight1
		}
		const rightLeftRotationReturnValue = await redBlackTree2.rightLeftRotation(left3)
		const redBlackTree3 = new RedBlackTree()
		const left4 = undefined;
		const setLeft3 = () => {};
		const right2 = {
			"left": left4,
			"setLeft": setLeft3
		}
		const setRight2 = () => {};
		const left5 = {
			"right": right2,
			"setRight": setRight2
		}
		const left6 = undefined;
		const setLeft4 = () => {};
		const right3 = {
			"left": left6,
			"setLeft": setLeft4
		}
		const swapNodeColorsReturnValue = await redBlackTree3.swapNodeColors(left5, right3)
		
	})
})
