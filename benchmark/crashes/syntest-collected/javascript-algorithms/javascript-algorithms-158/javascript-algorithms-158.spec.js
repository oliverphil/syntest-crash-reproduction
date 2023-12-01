// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import QuickSortInPlace from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSortInPlace.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = 31;
		const objectPattern = new QuickSortInPlace(anon)
		const anon1 = null;
		const knapsackItem = new KnapsackItem(objectPattern, anon1)
		const totalWeightReturnValue = await knapsackItem.totalWeight
		const anon2 = 31;
		const objectPattern1 = new QuickSortInPlace(anon2)
		const anon3 = null;
		const knapsackItem1 = new KnapsackItem(objectPattern1, anon3)
		const anon4 = "0011111111111100000000000000000000000000000000000000000000000000";
		const localToStringReturnValue = await knapsackItem1.toString(anon4)
		const anon5 = 31;
		const objectPattern2 = new QuickSortInPlace(anon5)
		const originalArray = () => {};
		const assignment = 0.0999755859375;
		const assignment1 = -385.6829828025526;
		const assignment2 = true;
		const sortReturnValue = await objectPattern2.sort(originalArray, assignment, assignment1, assignment2)
		
	})
})
