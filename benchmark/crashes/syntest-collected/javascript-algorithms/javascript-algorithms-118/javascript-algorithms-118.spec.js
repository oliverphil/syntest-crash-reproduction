// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import Trie from "../instrumented/javascript-algorithms/src/data-structures/trie/Trie.js";
import stronglyConnectedComponents from "../instrumented/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const anon = true;
		const graph = new Graph(assignment, anon)
		const stronglyConnectedComponentsReturnValue = await stronglyConnectedComponents(graph)
		const anon1 = "0011001001100110";
		const arrayElement = new Trie(anon1)
		const word = undefined;
		const anon2 = undefined;
		const addWordReturnValue = await arrayElement.addWord(word, anon2)
		
	})
})
