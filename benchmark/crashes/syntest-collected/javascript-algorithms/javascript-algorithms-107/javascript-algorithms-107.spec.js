// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import bellmanFord from "../instrumented/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const anon = null;
		const graph = new Graph(assignment, anon)
		const getKey = () => {};
		const startVertex = {
			"getKey": getKey
		}
		const bellmanFordReturnValue = await bellmanFord(graph, startVertex)
		const assignment1 = true;
		const anon1 = null;
		const graph1 = new Graph(assignment1, anon1)
		const anon2 = 26;
		const arrayElement = 32;
		const anon3 = [anon2, arrayElement]
		const getKey1 = () => {};
		const getVerticesIndicesReturnValue = await graph1.getVerticesIndices(anon3, getKey1)
		const assignment2 = true;
		const anon4 = null;
		const graph2 = new Graph(assignment2, anon4)
		const getVerticesIndicesReturnValue1 = await graph2.getVerticesIndices()
		const arrayElement1 = null;
		const arrayElement2 = 32;
		const anon5 = [arrayElement1, arrayElement2]
		const getKey2 = () => {};
		const startVertex1 = {
			"getKey": getKey2
		}
		const endVertex = "Prim's algorithms works only for undirected graphs";
		const assignment3 = undefined;
		const arrayElement3 = null;
		const startVertex2 = new GraphEdge(startVertex1, endVertex, assignment3, arrayElement3)
		const bellmanFordReturnValue1 = await bellmanFord(anon5, startVertex2)
		const assignment4 = true;
		const anon6 = null;
		const graph3 = new Graph(assignment4, anon6)
		const getAllEdgesReturnValue = await graph3.getAllEdges()
		
	})
})
