// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import QuickSortInPlace from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSortInPlace.js";
import eulerianPath from "../instrumented/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const anon = true;
		const anon1 = new QuickSortInPlace(anon)
		const graph = new Graph(assignment, anon1)
		const eulerianPathReturnValue = await eulerianPath(graph)
		const assignment1 = false;
		const anon2 = true;
		const anon3 = new QuickSortInPlace(anon2)
		const graph1 = new Graph(assignment1, anon3)
		const startVertex = () => {};
		const endVertex = null;
		const assignment2 = 23;
		const edge = new GraphEdge(startVertex, endVertex, assignment2)
		const deleteEdgeReturnValue = await graph1.deleteEdge(edge)
		
	})
})
