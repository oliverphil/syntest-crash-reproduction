// Imports
require = require('esm')(module)
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import SelectionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/selection-sort/SelectionSort.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = ":`§[)cVs)}6nB25b:O8Vjr(U\tT|$?jrw_Ub/-[v§ A%PDrCmD:7<-{Q8qdF";
		const value = new SelectionSort(anon)
		const anon1 = false;
		const graph = new GraphVertex(value, anon1)
		const startVertex = {}
		const originalCallbacks = {}
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const anon2 = ":`§[)cVs)}6nB25b:O8Vjr(U\tT|$?jrw_Ub/-[v§ A%PDrCmD:7<-{Q8qdF";
		const value1 = new SelectionSort(anon2)
		const anon3 = false;
		const graph1 = new GraphVertex(value1, anon3)
		const originalCallbacks1 = {}
		const anon4 = () => {};
		const deleteEdgeReturnValue = await graph1.deleteEdge(originalCallbacks1, anon4)
		const originalCallbacks2 = {}
		const anon5 = () => {};
		const originalCallbacks3 = {}
		const anon6 = () => {};
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(originalCallbacks2, anon5, originalCallbacks3, anon6)
		
	})
})
