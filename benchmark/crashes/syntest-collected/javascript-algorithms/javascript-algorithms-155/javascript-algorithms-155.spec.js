// Imports
require = require('esm')(module)
import SelectionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/selection-sort/SelectionSort.js";
import Trie from "../instrumented/javascript-algorithms/src/data-structures/trie/Trie.js";
import stronglyConnectedComponents from "../instrumented/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 569;
		const anon = "0011001001100110";
		const arrayElement1 = new SelectionSort(anon)
		const arrayElement2 = null;
		const graph = [arrayElement, arrayElement1, arrayElement2]
		const stronglyConnectedComponentsReturnValue = await stronglyConnectedComponents(graph)
		const anon1 = "0011001001100110";
		const arrayElement3 = new Trie(anon1)
		const word = undefined;
		const anon2 = undefined;
		const addWordReturnValue = await arrayElement3.addWord(word, anon2)
		
	})
})
