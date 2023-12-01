// Imports
require = require('esm')(module)
import DisjointSetItem from "../instrumented/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = 3.4028234663852886e+38;
		const weightLimit = false;
		const arrayElement = "../matrix/Matrix";
		const arrayElement1 = {}
		const arrayElement2 = "s,T#x±/x%tofen\n$O:y/[]CDHU=:!hf(mDl#±6RHb;2/=AY0Q[o8^5eX{)1^>{ Tl0dLg{J";
		const value = false;
		const arrayElement3 = [arrayElement1, arrayElement2, value]
		const anon = [arrayElement, arrayElement3]
		const knapsack = new Knapsack(possibleItems, weightLimit, anon)
		const solveUnboundedKnapsackProblemReturnValue = await knapsack.solveUnboundedKnapsackProblem()
		const value1 = false;
		const keyCallback = (startVertex, endVertex, Assignment) => {};
		const anon1 = 0.25;
		const anon2 = "1011111110111001100110011001100110011001100110011001100110011010";
		const anon3 = new DisjointSetItem(value1, keyCallback, anon1, anon2)
		const isRootReturnValue = await anon3.isRoot()
		
	})
})
