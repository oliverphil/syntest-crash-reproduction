// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import LinkedListNode from "../instrumented/javascript-algorithms/src/data-structures/linked-list/LinkedListNode.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const startVertex = new CountingSort()
		const endVertex = "fEj\\k7Zt.zCc#MeQKop)%ppa4{2\nr/If%Z'Ctg'$bmE;]@=|D*J6ex)>[nPtO#S6C#±7'4VTC±JJaId:K`j/}>v#2L<d:\"b<sO";
		const assignment = 1e-10;
		const anon = () => {};
		const value = new GraphEdge(startVertex, endVertex, assignment, anon)
		const assignment1 = null;
		const objectPattern = new LinkedListNode(value, assignment1)
		const anon1 = "Edge not found in graph";
		const knapsackItem = new KnapsackItem(objectPattern, anon1)
		const totalValueReturnValue = await knapsackItem.totalValue
		const startVertex1 = new CountingSort()
		const endVertex1 = "fEj\\k7Zt.zCc#MeQKop)%ppa4{2\nr/If%Z'Ctg'$bmE;]@=|D*J6ex)>[nPtO#S6C#±7'4VTC±JJaId:K`j/}>v#2L<d:\"b<sO";
		const assignment2 = 1e-10;
		const anon2 = () => {};
		const value1 = new GraphEdge(startVertex1, endVertex1, assignment2, anon2)
		const anon3 = 23;
		const reverseReturnValue = await value1.reverse(anon3)
		const startVertex2 = new CountingSort()
		const forEach = () => {};
		const localLength = 851;
		const originalArray = {
			"forEach": forEach,
			"length": localLength
		}
		const assignment3 = false;
		const assignment4 = undefined;
		const sortReturnValue = await startVertex2.sort(originalArray, assignment3, assignment4)
		
	})
})
