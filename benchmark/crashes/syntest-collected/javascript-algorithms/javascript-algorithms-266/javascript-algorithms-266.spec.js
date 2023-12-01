// Imports
require = require('esm')(module)
import BinarySearchTree from "../instrumented/javascript-algorithms/src/data-structures/tree/binary-search-tree/BinarySearchTree.js";
import kruskal from "../instrumented/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const nodeValueCompareFunction = 8;
		const getAllVertices = new BinarySearchTree(nodeValueCompareFunction)
		const nodeValueCompareFunction1 = 8;
		const removeReturnValue = await getAllVertices.remove(nodeValueCompareFunction1)
		const isDirected = false;
		const getAllEdges = () => {};
		const nodeValueCompareFunction2 = 8;
		const getAllVertices1 = new BinarySearchTree(nodeValueCompareFunction2)
		const graph = {
			"isDirected": isDirected,
			"getAllEdges": getAllEdges,
			"getAllVertices": getAllVertices1
		}
		const anon = {}
		const kruskalReturnValue = await kruskal(graph, anon)
		
	})
})
