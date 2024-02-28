// Imports
require = require('esm')(module)
import equalArrays from "../instrumented/lodash/.internal/equalArrays.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localLength = 226;
		const array = {
			"length": localLength
		}
		const other = () => {};
		const bitmask = 735.2483902727704;
		const customizer = () => {};
		const equalFunc = () => {};
		const get = () => {};
		const localSet = () => {};
		const localDelete = () => {};
		const stack = {
			"get": get,
			"set": localSet,
			"delete": localDelete
		}
		const equalArraysReturnValue = await equalArrays(array, other, bitmask, customizer, equalFunc, stack)
		const localLength1 = 226;
		const array1 = {
			"length": localLength1
		}
		const localLength2 = 226;
		const array2 = {
			"length": localLength2
		}
		const localLength3 = 226;
		const customizer1 = true;
		const customizer2 = () => {};
		const get1 = () => {};
		const localSet1 = () => {};
		const localDelete1 = () => {};
		const stack1 = {
			"get": get1,
			"set": localSet1,
			"delete": localDelete1
		}
		const equalArraysReturnValue1 = await equalArrays(array1, array2, localLength3, customizer1, customizer2, stack1)
		
	})
})
