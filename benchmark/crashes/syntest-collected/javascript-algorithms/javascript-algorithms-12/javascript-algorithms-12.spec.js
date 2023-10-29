// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = 0;
		const weightLimit = -857;
		const possibleItems1 = new Knapsack(possibleItems, weightLimit)
		const weightLimit1 = null;
		const knapsack = new Knapsack(possibleItems1, weightLimit1)
		const anon = null;
		const sortPossibleItemsByWeightReturnValue = await knapsack.sortPossibleItemsByWeight(anon)
		const possibleItems2 = 0;
		const weightLimit2 = -857;
		const possibleItems3 = new Knapsack(possibleItems2, weightLimit2)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await possibleItems3.sortPossibleItemsByValuePerWeightRatio()
		
	})
})
