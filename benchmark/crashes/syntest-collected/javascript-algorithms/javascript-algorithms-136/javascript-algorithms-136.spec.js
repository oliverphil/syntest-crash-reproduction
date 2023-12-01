// Imports
require = require('esm')(module)
import BinarySearchTreeNode from "../instrumented/javascript-algorithms/src/data-structures/tree/binary-search-tree/BinarySearchTreeNode.js";
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import LinkedListNode from "../instrumented/javascript-algorithms/src/data-structures/linked-list/LinkedListNode.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = {}
		const assignment = null;
		const anon = 11;
		const value1 = new LinkedListNode(value, assignment, anon)
		const graph = new GraphVertex(value1)
		const startVertex = true;
		const enterVertex = () => {};
		const allowTraversal = () => {};
		const leaveVertex = () => {};
		const originalCallbacks = {
			"enterVertex": enterVertex,
			"allowTraversal": allowTraversal,
			"leaveVertex": leaveVertex
		}
		const assignment1 = null;
		const assignment2 = false;
		const anon1 = new BinarySearchTreeNode(assignment1, assignment2)
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon1)
		const assignment3 = null;
		const assignment4 = false;
		const anon2 = new BinarySearchTreeNode(assignment3, assignment4)
		const value2 = undefined;
		const containsReturnValue = await anon2.contains(value2)
		const graph1 = null;
		const startVertex1 = 1;
		const originalCallbacks1 = {}
		const anon3 = "Matrices have incompatible shape for multiplication";
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(graph1, startVertex1, originalCallbacks1, anon3)
		
	})
})
