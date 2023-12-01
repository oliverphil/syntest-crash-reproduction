// Imports
require = require('esm')(module)
import BinarySearchTree from "../instrumented/javascript-algorithms/src/data-structures/tree/binary-search-tree/BinarySearchTree.js";
import DoublyLinkedListNode from "../instrumented/javascript-algorithms/src/data-structures/doubly-linked-list/DoublyLinkedListNode.js";
import MergeSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/merge-sort/MergeSort.js";
import Queue from "../instrumented/javascript-algorithms/src/data-structures/queue/Queue.js";
import {dot} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {t} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = () => {};
		const arrayElement1 = null;
		const arrayElement2 = () => {};
		const arrayElement3 = -284;
		const nodeValueCompareFunction = true;
		const arrayElement4 = new BinarySearchTree(nodeValueCompareFunction)
		const arrayElement5 = [arrayElement2, arrayElement3, arrayElement4]
		const m = [arrayElement, arrayElement1, arrayElement5]
		const anon = "xEldo$L|h!2Dz/3H1.GTQsubE,F#±Y-z5U+%M";
		const value = new Queue()
		const assignment = undefined;
		const assignment1 = null;
		const anon1 = false;
		const anon2 = null;
		const anon3 = new DoublyLinkedListNode(value, assignment, assignment1, anon1, anon2)
		const anon4 = new MergeSort(anon3)
		const tReturnValue = await t(m, anon, anon4)
		const anon5 = "xEldo$L|h!2Dz/3H1.GTQsubE,F#±Y-z5U+%M";
		const arrayElement6 = 101;
		const b = [arrayElement6]
		const dotReturnValue = await dot(anon5, b)
		const value1 = new Queue()
		const arrayElement7 = null;
		const enqueueReturnValue = await value1.enqueue(arrayElement7)
		
	})
})
