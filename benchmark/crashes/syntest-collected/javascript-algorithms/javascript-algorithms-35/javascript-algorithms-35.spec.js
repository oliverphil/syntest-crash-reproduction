// Imports
require = require('esm')(module)
import BinaryTreeNode from "../instrumented/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js";
import RadixSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/radix-sort/RadixSort.js";
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = new RedBlackTree()
		const assignment = -216.70434218097887;
		const anon1 = {}
		const grandParentNode = new BinaryTreeNode(assignment, anon1)
		const anon2 = "1100000000111011001010000000000000000000000000000000000000000000";
		const anon3 = "../../../data-structures/stack/Stack";
		const anon4 = new RadixSort(anon2, anon3)
		const leftLeftRotationReturnValue = await anon.leftLeftRotation(grandParentNode, anon4)
		const anon5 = new RedBlackTree()
		const anon6 = {}
		const leftLeftRotationReturnValue1 = await anon5.leftLeftRotation(anon6)
		const anon7 = "1100000000111011001010000000000000000000000000000000000000000000";
		const anon8 = "../../../data-structures/stack/Stack";
		const anon9 = new RadixSort(anon7, anon8)
		const arrayElement = 67;
		const arrayElement1 = 10344;
		const array = [arrayElement, arrayElement1]
		const anon10 = undefined;
		const isArrayOfNumbersReturnValue = await anon9.isArrayOfNumbers(array, anon10)
		
	})
})
