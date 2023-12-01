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
		const comparatorFunction = null;
		const arrayElement3 = "s,T#x±/x%tofen\n$O:y/[]CDHU=:!hf(mDl#±6RHb;2/=AY0Q[o8^5eX{)1^>{ Tl0dLg{J";
		const possibleItems = [arrayElement, arrayElement1, arrayElement2, comparatorFunction, arrayElement3]
		const comparatorFunction1 = null;
		const arrayElement4 = new LinkedList(comparatorFunction1)
		const weightLimit = [arrayElement4]
		const value = false;
		const keyCallback = (startVertex, endVertex, Assignment) => {};
		const anon = 0.25;
		const anon1 = "1011111110111001100110011001100110011001100110011001100110011010";
		const anon2 = new DisjointSetItem(value, keyCallback, anon, anon1)
		const knapsack = new Knapsack(possibleItems, weightLimit, anon2)
		const solveUnboundedKnapsackProblemReturnValue = await knapsack.solveUnboundedKnapsackProblem()
		const value1 = false;
		const keyCallback1 = (startVertex, endVertex, Assignment) => {};
		const anon3 = 0.25;
		const anon4 = "1011111110111001100110011001100110011001100110011001100110011010";
		const anon5 = new DisjointSetItem(value1, keyCallback1, anon3, anon4)
		const isRootReturnValue = await anon5.isRoot()
		
	})
})
