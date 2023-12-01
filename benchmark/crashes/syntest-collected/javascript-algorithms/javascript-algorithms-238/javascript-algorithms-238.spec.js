// Imports
require = require('esm')(module)
import DisjointSetItem from "../instrumented/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import LinkedList from "../instrumented/javascript-algorithms/src/data-structures/linked-list/LinkedList.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = () => {};
		const arrayElement1 = "JO±iK[fg\te\n";
		const arrayElement2 = 3.4028234663852886e+38;
		const arrayElement3 = 65504;
		const anon = undefined;
		const possibleItems = [arrayElement, arrayElement1, arrayElement2, arrayElement3, anon]
		const comparatorFunction = null;
		const arrayElement4 = new LinkedList(comparatorFunction)
		const weightLimit = [arrayElement4]
		const value = false;
		const keyCallback = (startVertex, endVertex, Assignment) => {};
		const anon1 = 0.25;
		const anon2 = "1011111110111001100110011001100110011001100110011001100110011010";
		const anon3 = new DisjointSetItem(value, keyCallback, anon1, anon2)
		const knapsack = new Knapsack(possibleItems, weightLimit, anon3)
		const solveUnboundedKnapsackProblemReturnValue = await knapsack.solveUnboundedKnapsackProblem()
		const value1 = false;
		const keyCallback1 = (startVertex, endVertex, Assignment) => {};
		const anon4 = 0.25;
		const anon5 = "1011111110111001100110011001100110011001100110011001100110011010";
		const anon6 = new DisjointSetItem(value1, keyCallback1, anon4, anon5)
		const isRootReturnValue = await anon6.isRoot()
		
	})
})
