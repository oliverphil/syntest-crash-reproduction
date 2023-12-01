// Imports
require = require('esm')(module)
import equalArrays from "../instrumented/lodash/.internal/equalArrays.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = false;
		const arrayElement1 = () => {};
		const array = [arrayElement, arrayElement1]
		const other = "./.internal/baseMerge.js";
		const bitmask = 735.2483902727704;
		const customizer = false;
		const equalFunc = null;
		const get = () => {};
		const localSet = () => {};
		const localDelete = () => {};
		const stack = {
			"get": get,
			"set": localSet,
			"delete": localDelete
		}
		const equalArraysReturnValue = await equalArrays(array, other, bitmask, customizer, equalFunc, stack)
		
	})
})
