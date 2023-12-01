// Imports
require = require('esm')(module)
import Trie from "../instrumented/javascript-algorithms/src/data-structures/trie/Trie.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const callbacks = new Trie()
		const word = undefined;
		const doesWordExistReturnValue = await callbacks.doesWordExist(word)
		
	})
})
