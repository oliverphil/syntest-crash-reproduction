// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = "Items must not be empty";
		const localLength = 730.8622779157381;
		const countingSort = new CountingSort(anon, localLength)
		const countingSort1 = new CountingSort()
		const forEach = () => {};
		const localLength1 = 730.8622779157381;
		const originalArray = {
			"forEach": forEach,
			"length": localLength1
		}
		const assignment = -580;
		const assignment1 = undefined;
		const anon1 = true;
		const sortReturnValue = await countingSort1.sort(originalArray, assignment, assignment1, anon1)
		
	})
})
