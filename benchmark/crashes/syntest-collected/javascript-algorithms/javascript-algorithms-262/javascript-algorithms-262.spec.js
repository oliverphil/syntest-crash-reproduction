// Imports
require = require('esm')(module)
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const redBlackTree = new RedBlackTree()
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
		const leftRightRotationReturnValue = await redBlackTree.leftRightRotation(grandParentNode)
		const redBlackTree1 = new RedBlackTree()
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
		const anon = "?!p~@±=o|<xo~)? 3%&7)±!JJY6~1_UBpG^70O`);^@";
		const rightRightRotationReturnValue = await redBlackTree1.rightRightRotation(left3, anon)
		const redBlackTree2 = new RedBlackTree()
		const left4 = undefined;
		const setLeft3 = () => {};
		const right2 = {
			"left": left4,
			"setLeft": setLeft3
		}
		const leftRightRotationReturnValue1 = await redBlackTree2.leftRightRotation(right2)
		
	})
})
