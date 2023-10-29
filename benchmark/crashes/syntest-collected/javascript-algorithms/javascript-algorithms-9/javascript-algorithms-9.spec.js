// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = undefined;
		const callbacks = "";
		const anon = "q#',ft|k%J<g{if~n$z'W§deFCHx6Y<Ywek\\;T '*G";
		const anon1 = null;
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks, anon, anon1)
		const getNeighbors1 = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors1
		}
		const startVertex1 = undefined;
		const getNeighbors2 = () => {};
		const graph2 = {
			"getNeighbors": getNeighbors2
		}
		const callbacks1 = new KnapsackItem(graph2)
		const depthFirstSearchReturnValue1 = await depthFirstSearch(graph1, startVertex1, callbacks1)
		const getNeighbors3 = () => {};
		const graph3 = {
			"getNeighbors": getNeighbors3
		}
		const callbacks2 = new KnapsackItem(graph3)
		const localToStringReturnValue = await callbacks2.toString()
		
	})
})
