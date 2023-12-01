// Imports
require = require('esm')(module)
import equalArrays from "../instrumented/lodash/.internal/equalArrays.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const array = () => {};
		const arrayElement = "V<V\\>&y_rXD1~+HyM`/#}?±\"Z0pY:rY50Vdq|].G<\"ZV$:<RE[71kk{R(o_iP±u@6G%Q\"QVCuw0Z78ig ";
		const other = [arrayElement]
		const bitmask = -260;
		const customizer = false;
		const equalFunc = () => {};
		const get = () => {};
		const localSet = () => {};
		const localDelete = "./.internal/arrayEach.js";
		const stack = {
			"get": get,
			"set": localSet,
			"delete": localDelete
		}
		const equalArraysReturnValue = await equalArrays(array, other, bitmask, customizer, equalFunc, stack)
		const arrayElement1 = "V<V\\>&y_rXD1~+HyM`/#}?±\"Z0pY:rY50Vdq|].G<\"ZV$:<RE[71kk{R(o_iP±u@6G%Q\"QVCuw0Z78ig ";
		const other1 = [arrayElement1]
		const arrayElement2 = "V<V\\>&y_rXD1~+HyM`/#}?±\"Z0pY:rY50Vdq|].G<\"ZV$:<RE[71kk{R(o_iP±u@6G%Q\"QVCuw0Z78ig ";
		const bitmask1 = -253.76514919857718;
		const bitmask2 = -260;
		const arrayElement3 = null;
		const customizer1 = [bitmask2, arrayElement3]
		const equalFunc1 = () => {};
		const get1 = () => {};
		const localSet1 = () => {};
		const localDelete1 = "./.internal/arrayEach.js";
		const stack1 = {
			"get": get1,
			"set": localSet1,
			"delete": localDelete1
		}
		const equalArraysReturnValue1 = await equalArrays(other1, arrayElement2, bitmask1, customizer1, equalFunc1, stack1)
		const arrayElement4 = "V<V\\>&y_rXD1~+HyM`/#}?±\"Z0pY:rY50Vdq|].G<\"ZV$:<RE[71kk{R(o_iP±u@6G%Q\"QVCuw0Z78ig ";
		const get2 = () => {};
		const bitmask3 = 47.47279372479397;
		const customizer2 = false;
		const array1 = () => {};
		const get3 = () => {};
		const localSet2 = () => {};
		const localDelete2 = "./.internal/arrayEach.js";
		const stack2 = {
			"get": get3,
			"set": localSet2,
			"delete": localDelete2
		}
		const equalArraysReturnValue2 = await equalArrays(arrayElement4, get2, bitmask3, customizer2, array1, stack2)
		
	})
})
