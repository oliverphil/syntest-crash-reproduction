// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "/KNt-([IA\"x7y§Ke[;|E`Iyjt14'%B#4byQ#:eMia=|!@\tjL3'AL<TJkU '0";
		const weightLimit = undefined;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack.solveZeroOneKnapsackProblem()
		const possibleItems1 = "/KNt-([IA\"x7y§Ke[;|E`Iyjt14'%B#4byQ#:eMia=|!@\tjL3'AL<TJkU '0";
		const weightLimit1 = undefined;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const sortPossibleItemsByWeightReturnValue = await knapsack1.sortPossibleItemsByWeight()
		
	})
})
