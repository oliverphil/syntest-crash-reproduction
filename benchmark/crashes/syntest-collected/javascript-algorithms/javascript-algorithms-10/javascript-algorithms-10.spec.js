// Imports
require = require('esm')(module)
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import ShellSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/shell-sort/ShellSort.js";
import Trie from "../instrumented/javascript-algorithms/src/data-structures/trie/Trie.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = false;
		const graph = new GraphVertex(value)
		const startVertex = null;
		const anon = 0.49999;
		const anon1 = false;
		const anon2 = new Trie(anon1)
		const enterVertex = new ShellSort(anon, anon2)
		const allowTraversal = {}
		const leaveVertex = () => {};
		const callbacks = {
			"enterVertex": enterVertex,
			"allowTraversal": allowTraversal,
			"leaveVertex": leaveVertex
		}
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks)
		const getNeighbors = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors
		}
		const startVertex1 = 19;
		const callbacks1 = {}
		const anon3 = undefined;
		const arrayElement = "1011111111110000000000000000000000000000000000000000000000000000";
		const value1 = false;
		const anon4 = [arrayElement, value1]
		const depthFirstSearchReturnValue1 = await depthFirstSearch(graph1, startVertex1, callbacks1, anon3, anon4)
		const getNeighbors1 = () => {};
		const graph2 = {
			"getNeighbors": getNeighbors1
		}
		const startVertex2 = null;
		const callbacks2 = undefined;
		const depthFirstSearchReturnValue2 = await depthFirstSearch(graph2, startVertex2, callbacks2)
		const anon5 = false;
		const anon6 = new Trie(anon5)
		const word = 546;
		const arrayElement1 = "1011111111110000000000000000000000000000000000000000000000000000";
		const addWordReturnValue = await anon6.addWord(word, arrayElement1)
		const anon7 = false;
		const anon8 = new Trie(anon7)
		const arrayElement2 = "1011111111110000000000000000000000000000000000000000000000000000";
		const anon9 = 0.49999;
		const anon10 = "./isPositive";
		const doesWordExistReturnValue = await anon8.doesWordExist(arrayElement2, anon9, anon10)
		
	})
})
