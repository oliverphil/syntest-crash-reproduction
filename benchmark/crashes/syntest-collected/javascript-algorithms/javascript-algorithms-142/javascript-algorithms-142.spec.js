// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import QuickSortInPlace from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSortInPlace.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = () => {};
		const anon = "0000000000000001";
		const graph = new GraphVertex(value, anon)
		const startVertex = () => {};
		const originalCallbacks = new QuickSortInPlace()
		const anon1 = "./BinarySearchTreeNode";
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon1)
		const assignment = true;
		const graph1 = new Graph(assignment)
		const startVertex1 = {}
		const originalCallbacks1 = {}
		const startVertex2 = () => {};
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(graph1, startVertex1, originalCallbacks1, startVertex2)
		const getNeighbors = () => {};
		const graph2 = {
			"getNeighbors": getNeighbors
		}
		const anon2 = "0000000000000001";
		const allowTraversal = undefined;
		const enterVertex = undefined;
		const leaveVertex = false;
		const originalCallbacks2 = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const anon3 = 1.401298464324817e-45;
		const breadthFirstSearchReturnValue2 = await breadthFirstSearch(graph2, anon2, originalCallbacks2, anon3)
		const value1 = () => {};
		const anon4 = "0000000000000001";
		const graph3 = new GraphVertex(value1, anon4)
		const deleteAllEdgesReturnValue = await graph3.deleteAllEdges()
		
	})
})
