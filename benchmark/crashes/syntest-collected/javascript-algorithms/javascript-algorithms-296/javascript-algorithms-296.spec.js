// Imports
require = require('esm')(module)
import HashTable from "../instrumented/javascript-algorithms/src/data-structures/hash-table/HashTable.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = undefined;
		const meta = new HashTable(assignment)
		const key = () => {};
		const value = "D`.";
		const localSetReturnValue = await meta.set(key, value)
		const assignment1 = undefined;
		const meta1 = new HashTable(assignment1)
		const assignment2 = undefined;
		const value1 = true;
		const anon = () => {};
		const localSetReturnValue1 = await meta1.set(assignment2, value1, anon)
		
	})
})
