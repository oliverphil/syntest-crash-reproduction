// Imports
require = require('esm')(module)
import HeapSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/heap-sort/HeapSort.js";
import TrieNode from "../instrumented/javascript-algorithms/src/data-structures/trie/TrieNode.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const character = false;
		const assignment = false;
		const originalCallbacks = new TrieNode(character, assignment)
		const suggestChildrenReturnValue = await originalCallbacks.suggestChildren()
		const anon = "0011111111010011001100110011001100110011001100110011001100110011";
		const startVertex = new HeapSort(anon)
		const forEach = () => {};
		const originalArray = {
			"forEach": forEach
		}
		const anon1 = "bbbb";
		const sortReturnValue = await startVertex.sort(originalArray, anon1)
		
	})
})
