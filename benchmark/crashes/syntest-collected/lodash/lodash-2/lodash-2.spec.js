// Imports
require = require('esm')(module)
import equalArrays from "../instrumented/lodash/.internal/equalArrays.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const array = "./isTypedArray.js";
		const other = "./.internal/arrayEach.js";
		const bitmask = -11;
		const customizer = false;
		const equalFunc = undefined;
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
