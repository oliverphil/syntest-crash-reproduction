// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import QueenPosition from "../instrumented/javascript-algorithms/src/algorithms/uncategorized/n-queens/QueenPosition.js";
import RadixSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/radix-sort/RadixSort.js";
import ShellSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/shell-sort/ShellSort.js";
import floydWarshall from "../instrumented/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const graph = new Graph(assignment)
		const anon = 622.6171335679045;
		const anon1 = new ShellSort(anon)
		const floydWarshallReturnValue = await floydWarshall(graph, anon1)
		const assignment1 = false;
		const graph1 = new Graph(assignment1)
		const rowIndex = "99FB±'i$";
		const anon2 = null;
		const columnIndex = new RadixSort(anon2)
		const startVertex = new QueenPosition(rowIndex, columnIndex)
		const endVertex = () => {};
		const assignment2 = 135;
		const anon3 = -94;
		const edge = new GraphEdge(startVertex, endVertex, assignment2, anon3)
		const deleteEdgeReturnValue = await graph1.deleteEdge(edge)
		
	})
})
