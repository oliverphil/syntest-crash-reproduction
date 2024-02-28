// Imports
require = require('esm')(module)
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = "../../../data-structures/graph/Graph";
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = -868.3947249996984;
		const originalCallbacks = {}
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const getNeighbors1 = "../../../data-structures/graph/Graph";
		const graph1 = {
			"getNeighbors": getNeighbors1
		}
		const arrayElement = "h~mHn5Og%*Oz^/i9vp':YbM`J(A]t.hva[&!._k<Ho\"tmT";
		const getNeighbors2 = "../../../data-structures/graph/Graph";
		const graph2 = {
			"getNeighbors": getNeighbors2
		}
		const arrayElement1 = "../../../data-structures/graph/GraphVertex";
		const startVertex1 = [arrayElement, graph2, arrayElement1]
		const originalCallbacks1 = {}
		const originalCallbacks2 = {}
		const anon = "Prim's algorithms works only for undirected graphs";
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(graph1, startVertex1, originalCallbacks1, originalCallbacks2, anon)
		const graph3 = null;
		const startVertex2 = "XX5nXsB]))Em}8<2/pV\ntY##PgeoO§rw";
		const originalCallbacks3 = {}
		const breadthFirstSearchReturnValue2 = await breadthFirstSearch(graph3, startVertex2, originalCallbacks3)
		
	})
})
