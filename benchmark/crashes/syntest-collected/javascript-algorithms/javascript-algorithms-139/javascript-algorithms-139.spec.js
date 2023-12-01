// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import Heap from "../instrumented/javascript-algorithms/src/data-structures/heap/Heap.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const anon = 948.4513216734481;
		const graph = new Graph(assignment, anon)
		const startVertex = null;
		const allowTraversal = true;
		const enterVertex = false;
		const leaveVertex = true;
		const originalCallbacks = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const anon1 = null;
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon1)
		const arrayElement = "0";
		const getNeighbors = [arrayElement]
		const graph1 = {
			"getNeighbors": getNeighbors
		}
		const startVertex1 = () => {};
		const anon2 = 948.4513216734481;
		const anon3 = false;
		const originalCallbacks1 = new Heap(anon2, anon3)
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(graph1, startVertex1, originalCallbacks1)
		const anon4 = 948.4513216734481;
		const anon5 = false;
		const originalCallbacks2 = new Heap(anon4, anon5)
		const anon6 = 948.4513216734481;
		const assignment1 = 7;
		const anon7 = undefined;
		const removeReturnValue = await originalCallbacks2.remove(anon6, assignment1, anon7)
		
	})
})
