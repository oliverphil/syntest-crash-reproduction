// Imports
require = require('esm')(module)
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import HeapSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/heap-sort/HeapSort.js";
import TrieNode from "../instrumented/javascript-algorithms/src/data-structures/trie/TrieNode.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = true;
		const graph = new GraphVertex(value)
		const anon = "0011111111010011001100110011001100110011001100110011001100110011";
		const startVertex = new HeapSort(anon)
		const character = false;
		const assignment = false;
		const originalCallbacks = new TrieNode(character, assignment)
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const character1 = false;
		const assignment1 = false;
		const originalCallbacks1 = new TrieNode(character1, assignment1)
		const suggestChildrenReturnValue = await originalCallbacks1.suggestChildren()
		const anon1 = "0011111111010011001100110011001100110011001100110011001100110011";
		const startVertex1 = new HeapSort(anon1)
		const forEach = () => {};
		const originalArray = {
			"forEach": forEach
		}
		const anon2 = "bbbb";
		const sortReturnValue = await startVertex1.sort(originalArray, anon2)
		
	})
})
