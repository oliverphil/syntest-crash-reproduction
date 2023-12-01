// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const countingSort = new CountingSort(assignment)
		const countingSort1 = new CountingSort()
		const arrayElement = "Tuj1{^O§m~'{9N9Z^K§p~orkroa|w#'±T'9Z)hjNzL<\tzL(BM1\"Puo/R*@ICxww`N-go8Y'nG~Ap,\tb";
		const originalArray = [arrayElement]
		const assignment1 = true;
		const assignment2 = undefined;
		const anon = -480;
		const anon1 = undefined;
		const sortReturnValue = await countingSort1.sort(originalArray, assignment1, assignment2, anon, anon1)
		
	})
})
