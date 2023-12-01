// Imports
require = require('esm')(module)
import BinaryTreeNode from "../instrumented/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js";
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import RadixSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/radix-sort/RadixSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const graph = new Graph(assignment)
		const anon = "#9_";
		const startVertex = new RadixSort(anon)
		const endVertex = "F9@qF{_OBC\nz$cSu!6^MlRUDQg/<5+/cFrw±A";
		const assignment1 = 0.75;
		const startVertex1 = new GraphEdge(startVertex, endVertex, assignment1)
		const assignment2 = undefined;
		const endVertex1 = new BinaryTreeNode(assignment2)
		const findEdgeReturnValue = await graph.findEdge(startVertex1, endVertex1)
		const assignment3 = true;
		const graph1 = new Graph(assignment3)
		const anon1 = "#9_";
		const startVertex2 = new RadixSort(anon1)
		const endVertex2 = "F9@qF{_OBC\nz$cSu!6^MlRUDQg/<5+/cFrw±A";
		const assignment4 = 0.75;
		const startVertex3 = new GraphEdge(startVertex2, endVertex2, assignment4)
		const anon2 = null;
		const addEdgeReturnValue = await graph1.addEdge(startVertex3, anon2)
		
	})
})
