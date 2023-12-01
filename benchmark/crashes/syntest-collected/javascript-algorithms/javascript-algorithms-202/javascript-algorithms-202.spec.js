// Imports
require = require('esm')(module)
import BinaryTreeNode from "../instrumented/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js";
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import RadixSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/radix-sort/RadixSort.js";
import detectDirectedCycle from "../instrumented/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const graph = new Graph(assignment)
		const detectDirectedCycleReturnValue = await detectDirectedCycle(graph)
		const assignment1 = true;
		const graph1 = new Graph(assignment1)
		const getWeightReturnValue = await graph1.getWeight()
		const assignment2 = true;
		const graph2 = new Graph(assignment2)
		const anon = "#9_";
		const startVertex = new RadixSort(anon)
		const endVertex = "F9@qF{_OBC\nz$cSu!6^MlRUDQg/<5+/cFrw±A";
		const assignment3 = 0.75;
		const startVertex1 = new GraphEdge(startVertex, endVertex, assignment3)
		const assignment4 = undefined;
		const endVertex1 = new BinaryTreeNode(assignment4)
		const findEdgeReturnValue = await graph2.findEdge(startVertex1, endVertex1)
		const assignment5 = true;
		const graph3 = new Graph(assignment5)
		const anon1 = "#9_";
		const startVertex2 = new RadixSort(anon1)
		const endVertex2 = "F9@qF{_OBC\nz$cSu!6^MlRUDQg/<5+/cFrw±A";
		const assignment6 = 0.75;
		const startVertex3 = new GraphEdge(startVertex2, endVertex2, assignment6)
		const anon2 = null;
		const addEdgeReturnValue = await graph3.addEdge(startVertex3, anon2)
		
	})
})
