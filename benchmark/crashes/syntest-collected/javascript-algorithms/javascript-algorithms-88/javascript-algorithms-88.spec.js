// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import RadixSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/radix-sort/RadixSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const objectPattern = new RadixSort()
		const anon = 23;
		const knapsackItem = new KnapsackItem(objectPattern, anon)
		const objectPattern1 = new RadixSort()
		const array = -739;
		const determineNumPassesReturnValue = await objectPattern1.determineNumPasses(array)
		
	})
})
