// Imports
require = require('esm')(module)
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const graph = null;
		const startVertex = "../../../data-structures/priority-queue/PriorityQueue";
		const originalCallbacks = undefined;
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const getNeighbors = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors
		}
		const startVertex1 = () => {};
		const originalCallbacks1 = {}
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(graph1, startVertex1, originalCallbacks1)
		const getNeighbors1 = () => {};
		const graph2 = {
			"getNeighbors": getNeighbors1
		}
		const startVertex2 = 701;
		const originalCallbacks2 = {}
		const breadthFirstSearchReturnValue2 = await breadthFirstSearch(graph2, startVertex2, originalCallbacks2)
		const originalCallbacks3 = {}
		const getNeighbors2 = () => {};
		const graph3 = {
			"getNeighbors": getNeighbors2
		}
		const originalCallbacks4 = {}
		const startVertex3 = 701;
		const breadthFirstSearchReturnValue3 = await breadthFirstSearch(originalCallbacks3, graph3, originalCallbacks4, startVertex3)
		
	})
})
