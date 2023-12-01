// Imports
require = require('esm')(module)
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const arrayElement = false;
		const arrayElement1 = 0.300048828125;
		const arrayElement2 = {}
		const startVertex = [arrayElement, arrayElement1, arrayElement2]
		const originalCallbacks = true;
		const anon = {}
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon)
		const getNeighbors1 = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors1
		}
		const startVertex1 = "0000000001001100";
		const allowTraversal = true;
		const enterVertex = true;
		const leaveVertex = false;
		const originalCallbacks1 = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const anon1 = true;
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(graph1, startVertex1, originalCallbacks1, anon1)
		
	})
})
