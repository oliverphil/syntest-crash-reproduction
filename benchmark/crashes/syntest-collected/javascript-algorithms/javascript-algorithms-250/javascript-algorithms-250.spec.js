// Imports
require = require('esm')(module)
import DisjointSet from "../instrumented/javascript-algorithms/src/data-structures/disjoint-set/DisjointSet.js";
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = () => {};
		const keyCallback = new GraphVertex(value)
		const objectPattern = new DisjointSet(keyCallback)
		const knapsackItem = new KnapsackItem(objectPattern)
		const value1 = () => {};
		const keyCallback1 = new GraphVertex(value1)
		const objectPattern1 = new DisjointSet(keyCallback1)
		const valueA = "../Sort";
		const value2 = () => {};
		const unionReturnValue = await objectPattern1.union(valueA, value2)
		const value3 = () => {};
		const keyCallback2 = new GraphVertex(value3)
		const objectPattern2 = new DisjointSet(keyCallback2)
		const knapsackItem1 = new KnapsackItem(objectPattern2)
		const localToStringReturnValue = await knapsackItem1.toString()
		
	})
})
