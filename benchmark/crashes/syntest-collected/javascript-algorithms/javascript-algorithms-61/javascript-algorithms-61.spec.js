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
		const startVertex = () => {};
		const originalCallbacks = -499.9911066367525;
		const arrayElement = {}
		const arrayElement1 = null;
		const arrayElement2 = -399;
		const arrayElement3 = 362;
		const anon = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon)
		const arrayElement4 = {}
		const startVertex1 = undefined;
		const allowTraversal = false;
		const enterVertex = false;
		const leaveVertex = true;
		const originalCallbacks1 = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(arrayElement4, startVertex1, originalCallbacks1)
		const getNeighbors1 = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors1
		}
		const enterVertex1 = false;
		const originalCallbacks2 = undefined;
		const breadthFirstSearchReturnValue2 = await breadthFirstSearch(graph1, enterVertex1, originalCallbacks2)
		
	})
})
