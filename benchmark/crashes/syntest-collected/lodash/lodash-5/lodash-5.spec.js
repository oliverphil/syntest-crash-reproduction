// Imports
require = require('esm')(module)
import equalArrays from "../instrumented/lodash/.internal/equalArrays.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const array = "e§S\"RH92S*z'+hm]Ge";
		const other = "./toFinite.js";
		const bitmask = 53.7325051273574;
		const customizer = false;
		const equalFunc = "./.internal/arrayEach.js";
		const get = () => {};
		const localSet = () => {};
		const localDelete = () => {};
		const stack = {
			"get": get,
			"set": localSet,
			"delete": localDelete
		}
		const equalArraysReturnValue = await equalArrays(array, other, bitmask, customizer, equalFunc, stack)
		const get1 = () => {};
		const localSet1 = () => {};
		const localDelete1 = () => {};
		const stack1 = {
			"get": get1,
			"set": localSet1,
			"delete": localDelete1
		}
		const localLength = "./.internal/toKey.js";
		const other1 = {
			"length": localLength
		}
		const bitmask1 = -222;
		const customizer1 = false;
		const bitmask2 = 53.7325051273574;
		const get2 = () => {};
		const localSet2 = () => {};
		const localDelete2 = () => {};
		const stack2 = {
			"get": get2,
			"set": localSet2,
			"delete": localDelete2
		}
		const equalArraysReturnValue1 = await equalArrays(stack1, other1, bitmask1, customizer1, bitmask2, stack2)
		const localLength1 = undefined;
		const array1 = {
			"length": localLength1
		}
		const localLength2 = "./.internal/toKey.js";
		const other2 = {
			"length": localLength2
		}
		const bitmask3 = 53.7325051273574;
		const customizer2 = false;
		const localDelete3 = () => {};
		const get3 = () => {};
		const localSet3 = () => {};
		const localDelete4 = () => {};
		const stack3 = {
			"get": get3,
			"set": localSet3,
			"delete": localDelete4
		}
		const equalArraysReturnValue2 = await equalArrays(array1, other2, bitmask3, customizer2, localDelete3, stack3)
		const arrayElement = null;
		const array2 = [arrayElement]
		const customizer3 = false;
		const other3 = [customizer3]
		const bitmask4 = -222;
		const customizer4 = false;
		const equalFunc1 = null;
		const get4 = () => {};
		const localSet4 = () => {};
		const localDelete5 = () => {};
		const stack4 = {
			"get": get4,
			"set": localSet4,
			"delete": localDelete5
		}
		const anon = null;
		const equalArraysReturnValue3 = await equalArrays(array2, other3, bitmask4, customizer4, equalFunc1, stack4, anon)
		
	})
})
