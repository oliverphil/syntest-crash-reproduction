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
		const arrayElement = 366;
		const anon = new ShellSort(arrayElement)
		const floydWarshallReturnValue = await floydWarshall(graph, anon)
		const assignment1 = true;
		const graph1 = new Graph(assignment1)
		const rowIndex = "99FB±'i$";
		const anon1 = null;
		const columnIndex = new RadixSort(anon1)
		const startVertex = new QueenPosition(rowIndex, columnIndex)
		const endVertex = () => {};
		const assignment2 = 135;
		const anon2 = 26;
		const edge = new GraphEdge(startVertex, endVertex, assignment2, anon2)
		const deleteEdgeReturnValue = await graph1.deleteEdge(edge)
		
	})
})
