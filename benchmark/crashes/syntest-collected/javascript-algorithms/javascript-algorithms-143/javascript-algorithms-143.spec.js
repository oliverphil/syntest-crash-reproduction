// Imports
require = require('esm')(module)
import ComplexNumber from "../instrumented/javascript-algorithms/src/algorithms/math/complex-number/ComplexNumber.js";
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";
import LinkedList from "../instrumented/javascript-algorithms/src/data-structures/linked-list/LinkedList.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const anon = 208.12886459046194;
		const anon1 = "../bits/bitLength";
		const graph = new Graph(assignment, anon, anon1)
		const arrayElement = "./BinarySearchTreeNode";
		const arrayElement1 = 31;
		const anon2 = -378;
		const arrayElement2 = 135;
		const assignment1 = undefined;
		const anon3 = null;
		const anon4 = true;
		const arrayElement3 = new ComplexNumber(assignment1, anon3, anon4)
		const anon5 = [arrayElement2, arrayElement3]
		const arrayElement4 = new InsertionSort(anon2, anon5)
		const comparatorFunction = [arrayElement, arrayElement1, arrayElement4]
		const startVertex = new LinkedList(comparatorFunction)
		const allowTraversal = true;
		const enterVertex = undefined;
		const leaveVertex = false;
		const originalCallbacks = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const anon6 = -378;
		const arrayElement5 = 135;
		const assignment2 = undefined;
		const anon7 = null;
		const anon8 = true;
		const arrayElement6 = new ComplexNumber(assignment2, anon7, anon8)
		const anon9 = [arrayElement5, arrayElement6]
		const arrayElement7 = new InsertionSort(anon6, anon9)
		const allowTraversal1 = true;
		const enterVertex1 = undefined;
		const leaveVertex1 = false;
		const originalCallbacks1 = {
			"allowTraversal": allowTraversal1,
			"enterVertex": enterVertex1,
			"leaveVertex": leaveVertex1
		}
		const sortReturnValue = await arrayElement7.sort(originalCallbacks1)
		const allowTraversal2 = true;
		const enterVertex2 = undefined;
		const leaveVertex2 = false;
		const originalCallbacks2 = {
			"allowTraversal": allowTraversal2,
			"enterVertex": enterVertex2,
			"leaveVertex": leaveVertex2
		}
		const arrayElement8 = "./BinarySearchTreeNode";
		const allowTraversal3 = true;
		const enterVertex3 = false;
		const leaveVertex3 = true;
		const originalCallbacks3 = {
			"allowTraversal": allowTraversal3,
			"enterVertex": enterVertex3,
			"leaveVertex": leaveVertex3
		}
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(originalCallbacks2, arrayElement8, originalCallbacks3)
		
	})
})
