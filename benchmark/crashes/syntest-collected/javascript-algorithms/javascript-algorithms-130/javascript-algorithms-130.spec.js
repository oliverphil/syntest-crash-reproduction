// Imports
require = require('esm')(module)
import DoublyLinkedList from "../instrumented/javascript-algorithms/src/data-structures/doubly-linked-list/DoublyLinkedList.js";
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const comparatorFunction = "±L  liv";
		const objectPattern = new DoublyLinkedList(comparatorFunction)
		const knapsackItem = new KnapsackItem(objectPattern)
		const totalWeightReturnValue = await knapsackItem.totalWeight
		const comparatorFunction1 = "±L  liv";
		const objectPattern1 = new DoublyLinkedList(comparatorFunction1)
		const value = null;
		const comparatorFunction2 = "±L  liv";
		const anon = 17;
		const anon1 = 554.1153128575834;
		const prependReturnValue = await objectPattern1.prepend(value, comparatorFunction2, anon, anon1)
		const comparatorFunction3 = "±L  liv";
		const objectPattern2 = new DoublyLinkedList(comparatorFunction3)
		const assignment = false;
		const value1 = new Graph(assignment)
		const anon2 = false;
		const anon3 = () => {};
		const prependReturnValue1 = await objectPattern2.prepend(value1, anon2, anon3)
		const originalCallbacks = "The method supports only ositive integers";
		const objectPattern3 = new Sort(originalCallbacks)
		const knapsackItem1 = new KnapsackItem(objectPattern3)
		const valuePerWeightRatioReturnValue = await knapsackItem1.valuePerWeightRatio
		
	})
})
