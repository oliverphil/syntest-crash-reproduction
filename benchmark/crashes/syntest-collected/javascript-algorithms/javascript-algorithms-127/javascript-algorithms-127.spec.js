// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const objectPattern = {}
		const knapsackItem = new KnapsackItem(objectPattern)
		const anon = "LU^%0Nuk/A];\"A*\nVaJe1tP(tDNh$~e\\#;?UZ`b.$@ZhCY;";
		const localToStringReturnValue = await knapsackItem.toString(anon)
		const originalCallbacks = "The metho supports only positive integers";
		const objectPattern1 = new Sort(originalCallbacks)
		const knapsackItem1 = new KnapsackItem(objectPattern1)
		const localToStringReturnValue1 = await knapsackItem1.toString()
		const objectPattern2 = {}
		const knapsackItem2 = new KnapsackItem(objectPattern2)
		const localToStringReturnValue2 = await knapsackItem2.toString()
		
	})
})
