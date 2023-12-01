// Imports
require = require('esm')(module)
import equalArrays from "../instrumented/lodash/.internal/equalArrays.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = "V<V\\>&y_rXD1~+HyM`/#}?±\"Z0pY:rY50Vdq|].G<\"ZV$:<RE[71kk{R(o_iP±u@6G%Q\"QVCuw0Z78ig ";
		const get = () => {};
		const bitmask = 47.47279372479397;
		const customizer = false;
		const array = () => {};
		const get1 = () => {};
		const localSet = () => {};
		const localDelete = "./.internal/arrayEach.js";
		const stack = {
			"get": get1,
			"set": localSet,
			"delete": localDelete
		}
		const equalArraysReturnValue = await equalArrays(arrayElement, get, bitmask, customizer, array, stack)
		const arrayElement1 = false;
		const arrayElement2 = () => {};
		const array1 = [arrayElement1, arrayElement2]
		const other = "./meanBy.js";
		const bitmask1 = 247.44891534699167;
		const arrayElement3 = () => {};
		const equalFunc = null;
		const get2 = () => {};
		const localSet1 = () => {};
		const localDelete1 = () => {};
		const stack1 = {
			"get": get2,
			"set": localSet1,
			"delete": localDelete1
		}
		const equalArraysReturnValue1 = await equalArrays(array1, other, bitmask1, arrayElement3, equalFunc, stack1)
		
	})
})
