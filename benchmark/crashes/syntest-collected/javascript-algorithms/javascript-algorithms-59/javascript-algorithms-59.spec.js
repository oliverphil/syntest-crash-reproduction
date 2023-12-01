// Imports
require = require('esm')(module)
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = 52;
		const originalCallbacks = "'";
		const anon = "Z7\\c6*~) §tze0L2e)?jJSF\n0E47sVk#qbrm,BPBia$\\jTB\"_w";
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon)
		const value = 10344;
		const anon1 = false;
		const graph1 = new GraphVertex(value, anon1)
		const getNeighbors1 = () => {};
		const graph2 = {
			"getNeighbors": getNeighbors1
		}
		const originalCallbacks1 = {}
		const startVertex1 = 52;
		const arrayElement = "Eulerian path must contain two odd-ranked vertices";
		const getNeighbors2 = () => {};
		const graph3 = {
			"getNeighbors": getNeighbors2
		}
		const arrayElement1 = "10111111100000000000000000000000";
		const startVertex2 = 52;
		const anon2 = [arrayElement, graph3, arrayElement1, startVertex2]
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(graph1, graph2, originalCallbacks1, startVertex1, anon2)
		const value1 = 10344;
		const anon3 = false;
		const graph4 = new GraphVertex(value1, anon3)
		const getEdgesReturnValue = await graph4.getEdges()
		const originalCallbacks2 = {}
		const startVertex3 = 52;
		const allowTraversal = false;
		const enterVertex = 0.49999;
		const leaveVertex = false;
		const originalCallbacks3 = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const breadthFirstSearchReturnValue2 = await breadthFirstSearch(originalCallbacks2, startVertex3, originalCallbacks3)
		
	})
})
