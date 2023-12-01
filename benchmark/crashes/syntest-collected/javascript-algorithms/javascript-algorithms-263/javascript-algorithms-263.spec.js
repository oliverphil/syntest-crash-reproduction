// Imports
require = require('esm')(module)
import BinarySearchTree from "../instrumented/javascript-algorithms/src/data-structures/tree/binary-search-tree/BinarySearchTree.js";
import HashTable from "../instrumented/javascript-algorithms/src/data-structures/hash-table/HashTable.js";
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const redBlackTree = new RedBlackTree()
		const assignment = 5381;
		const anon = -812.2799820179465;
		const meta = new HashTable(assignment, anon)
		const node = {
			"meta": meta
		}
		const nodeValueCompareFunction = 26;
		const anon1 = new BinarySearchTree(nodeValueCompareFunction)
		const makeNodeBlackReturnValue = await redBlackTree.makeNodeBlack(node, anon1)
		const nodeValueCompareFunction1 = 26;
		const anon2 = new BinarySearchTree(nodeValueCompareFunction1)
		const value = 768.1968865470028;
		const anon3 = -812.2799820179465;
		const removeReturnValue = await anon2.remove(value, anon3)
		const nodeValueCompareFunction2 = 26;
		const anon4 = new BinarySearchTree(nodeValueCompareFunction2)
		const value1 = 768.1968865470028;
		const containsReturnValue = await anon4.contains(value1)
		
	})
})
