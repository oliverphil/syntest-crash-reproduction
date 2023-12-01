// Imports
require = require('esm')(module)
import equalArrays from "../instrumented/lodash/.internal/equalArrays.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const array = "[object DOMException]";
		const localLength = 4294967295;
		const other = {
			"length": localLength
		}
		const bitmask = -1;
		const customizer = true;
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
		const array1 = false;
		const arrayElement = null;
		const bitmask1 = -1;
		const localLength1 = 4294967295;
		const other1 = [arrayElement, bitmask1, localLength1]
		const bitmask2 = -429.8556726950263;
		const arrayElement1 = "./.internal/basePick.js";
		const customizer1 = [arrayElement1]
		const equalFunc1 = () => {};
		const localLength2 = 4294967295;
		const other2 = {
			"length": localLength2
		}
		const get1 = () => {};
		const equalArraysReturnValue1 = await equalArrays(array1, other1, bitmask2, customizer1, equalFunc1, other2, get1)
		const get2 = () => {};
		const localSet1 = () => {};
		const localDelete1 = () => {};
		const stack1 = {
			"get": get2,
			"set": localSet1,
			"delete": localDelete1
		}
		const arrayElement2 = "./.internal/basePick.js";
		const customizer2 = [arrayElement2]
		const bitmask3 = -11;
		const array2 = false;
		const equalFunc2 = () => {};
		const localLength3 = 4294967295;
		const other3 = {
			"length": localLength3
		}
		const equalArraysReturnValue2 = await equalArrays(stack1, customizer2, bitmask3, array2, equalFunc2, other3)
		
	})
})
