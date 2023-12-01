// Imports
require = require('esm')(module)
import Trie from "../instrumented/javascript-algorithms/src/data-structures/trie/Trie.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = "0011001001100110";
		const arrayElement = new Trie(anon)
		const word = undefined;
		const anon1 = undefined;
		const addWordReturnValue = await arrayElement.addWord(word, anon1)
		
	})
})
