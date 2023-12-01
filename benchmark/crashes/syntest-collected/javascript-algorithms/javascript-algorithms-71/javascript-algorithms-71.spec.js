// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = null;
		const callbacks = ">Jz_g-Xs=d+QJE?''S'g1(EsX`)4WMQ8v\\)s^6^N,e1)a";
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks)
		const getNeighbors1 = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors1
		}
		const startVertex1 = null;
		const enterVertex = () => {};
		const allowTraversal = () => {};
		const leaveVertex = () => {};
		const callbacks1 = {
			"enterVertex": enterVertex,
			"allowTraversal": allowTraversal,
			"leaveVertex": leaveVertex
		}
		const depthFirstSearchReturnValue1 = await depthFirstSearch(graph1, startVertex1, callbacks1)
		const getNeighbors2 = () => {};
		const graph2 = {
			"getNeighbors": getNeighbors2
		}
		const startVertex2 = null;
		const callbacks2 = {}
		const anon = undefined;
		const depthFirstSearchReturnValue2 = await depthFirstSearch(graph2, startVertex2, callbacks2, anon)
		const assignment = false;
		const graph3 = new Graph(assignment)
		const startVertex3 = undefined;
		const callbacks3 = undefined;
		const anon1 = new CountingSort()
		const depthFirstSearchReturnValue3 = await depthFirstSearch(graph3, startVertex3, callbacks3, anon1)
		
	})
})
