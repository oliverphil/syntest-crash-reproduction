// Imports
require = require('esm')(module)
import hasPath from "../instrumented/lodash/hasPath.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localLength = 8;
		const object = {
			"length": localLength
		}
		const path = "~P&~Kk8},Drf'sx;D=2pL`±,{CVDsbPxr<!Q|D(k|mQ4<l dz\nUA;i0C/*OPhirG5l?8q(*W]D{Q/# ";
		const anon = "./.internal/baseSortedIndexBy.js";
		const hasPathReturnValue = await hasPath(object, path, anon)
		const object1 = null;
		const localLength1 = 8;
		const object2 = {
			"length": localLength1
		}
		const anon1 = "./.internal/baseSortedIndexBy.js";
		const hasPathReturnValue1 = await hasPath(object1, object2, anon1)
		const localLength2 = 8;
		const object3 = {
			"length": localLength2
		}
		const anon2 = "./.internal/baseSortedIndexBy.js";
		const path1 = "~P&~Kk8},Drf'sx;D=2pL`±,{CVDsbPxr<!Q|D(k|mQ4<l dz\nUA;i0C/*OPhirG5l?8q(*W]D{Q/# ";
		const hasPathReturnValue2 = await hasPath(object3, anon2, path1)
		
	})
})
