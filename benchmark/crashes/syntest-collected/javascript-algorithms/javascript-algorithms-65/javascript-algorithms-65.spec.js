// Imports
require = require('esm')(module)
import FenwickTree from "../instrumented/javascript-algorithms/src/data-structures/tree/fenwick-tree/FenwickTree.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = {}
		const callbacks = 447;
		const anon = 65504;
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks, anon)
		const getNeighbors1 = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors1
		}
		const startVertex1 = null;
		const callbacks1 = undefined;
		const depthFirstSearchReturnValue1 = await depthFirstSearch(graph1, startVertex1, callbacks1)
		const getNeighbors2 = () => {};
		const graph2 = {
			"getNeighbors": getNeighbors2
		}
		const startVertex2 = null;
		const callbacks2 = undefined;
		const depthFirstSearchReturnValue2 = await depthFirstSearch(graph2, startVertex2, callbacks2)
		const graph3 = "./TrieNode";
		const startVertex3 = null;
		const callbacks3 = {}
		const getNeighbors3 = () => {};
		const graph4 = {
			"getNeighbors": getNeighbors3
		}
		const depthFirstSearchReturnValue3 = await depthFirstSearch(graph3, startVertex3, callbacks3, graph4)
		const graph5 = (Assignment) => {};
		const graph6 = "./TrieNode";
		const arraySize = () => {};
		const callbacks4 = new FenwickTree(arraySize)
		const depthFirstSearchReturnValue4 = await depthFirstSearch(graph5, graph6, callbacks4)
		
	})
})
