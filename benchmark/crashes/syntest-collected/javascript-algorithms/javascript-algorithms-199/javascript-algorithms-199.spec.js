// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = "../algorithms/math/factorial/factorial";
		const countingSort = new CountingSort(anon)
		const countingSort1 = new CountingSort()
		const forEach = () => {};
		const localLength = 935;
		const originalArray = {
			"forEach": forEach,
			"length": localLength
		}
		const assignment = 1.7976931348623157e+308;
		const assignment1 = false;
		const sortReturnValue = await countingSort1.sort(originalArray, assignment, assignment1)
		
	})
})
