// Imports
require = require('esm')(module)
import equalArrays from "../instrumented/lodash/.internal/equalArrays.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localLength = 2.718281828459045;
		const array = {
			"length": localLength
		}
		const arrayElement = {}
		const arrayElement1 = 229.56227087642242;
		const arrayElement2 = () => {};
		const other = [arrayElement, arrayElement1, arrayElement2]
		const bitmask = 663.7111377480805;
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
		const anon = () => {};
		const equalArraysReturnValue = await equalArrays(array, other, bitmask, customizer, equalFunc, stack, anon)
		const array1 = null;
		const get1 = () => {};
		const localSet1 = () => {};
		const localDelete1 = () => {};
		const stack1 = {
			"get": get1,
			"set": localSet1,
			"delete": localDelete1
		}
		const bitmask1 = -987;
		const equalFunc1 = () => {};
		const equalFunc2 = () => {};
		const arrayElement3 = {}
		const equalArraysReturnValue1 = await equalArrays(array1, stack1, bitmask1, equalFunc1, equalFunc2, arrayElement3)
		const arrayElement4 = {}
		const arrayElement5 = 229.56227087642242;
		const arrayElement6 = () => {};
		const other1 = [arrayElement4, arrayElement5, arrayElement6]
		const arrayElement7 = {}
		const arrayElement8 = 229.56227087642242;
		const arrayElement9 = () => {};
		const other2 = [arrayElement7, arrayElement8, arrayElement9]
		const bitmask2 = -987;
		const customizer1 = true;
		const localDelete2 = () => {};
		const arrayElement10 = {}
		const equalArraysReturnValue2 = await equalArrays(other1, other2, bitmask2, customizer1, localDelete2, arrayElement10)
		
	})
})
