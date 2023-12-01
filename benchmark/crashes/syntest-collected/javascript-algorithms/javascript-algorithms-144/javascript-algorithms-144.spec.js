// Imports
require = require('esm')(module)
import BubbleSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/bubble-sort/BubbleSort.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const anon = 13;
		const anon1 = null;
		const arrayElement = new BubbleSort(anon, anon1)
		const arrayElement1 = "i`Y|&F7u]h";
		const startVertex = [arrayElement, arrayElement1]
		const allowTraversal = true;
		const enterVertex = false;
		const leaveVertex = true;
		const originalCallbacks = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const arrayElement2 = null;
		const anon2 = [arrayElement2]
		const anon3 = "./QueenPosition";
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon2, anon3)
		const anon4 = 13;
		const anon5 = null;
		const arrayElement3 = new BubbleSort(anon4, anon5)
		const arrayElement4 = null;
		const anon6 = [arrayElement4]
		const sortReturnValue = await arrayElement3.sort(anon6)
		const anon7 = 13;
		const anon8 = null;
		const arrayElement5 = new BubbleSort(anon7, anon8)
		const getNeighbors1 = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors1
		}
		const sortReturnValue1 = await arrayElement5.sort(graph1)
		
	})
})
