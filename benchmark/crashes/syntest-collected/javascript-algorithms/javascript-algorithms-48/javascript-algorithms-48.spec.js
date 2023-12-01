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
		const originalCallbacks = false;
		const anon = {}
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon)
		const arrayElement3 = {}
		const anon1 = {}
		const allowTraversal = true;
		const enterVertex = false;
		const leaveVertex = true;
		const originalCallbacks1 = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(arrayElement3, anon1, originalCallbacks1)
		
	})
})
