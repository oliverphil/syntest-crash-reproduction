// Imports
require = require('esm')(module)
import hasPath from "../instrumented/lodash/hasPath.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const object = null;
		const arrayElement = () => {};
		const arrayElement1 = -155;
		const arrayElement2 = undefined;
		const path = [arrayElement, arrayElement1, arrayElement2]
		const arrayElement3 = "./.internal/castPath.js";
		const arrayElement4 = "./isArguments.js";
		const anon = [arrayElement3, arrayElement4]
		const anon1 = "y%<<xpbiRU!3'A}]<";
		const hasPathReturnValue = await hasPath(object, path, anon, anon1)
		const anon2 = "y%<<xpbiRU!3'A}]<";
		const path1 = {}
		const hasPathReturnValue1 = await hasPath(anon2, path1)
		const localLength = -917;
		const object1 = {
			"length": localLength
		}
		const path2 = 953.0907619382115;
		const hasPathReturnValue2 = await hasPath(object1, path2)
		const arrayElement5 = "./.internal/castPath.js";
		const path3 = {}
		const hasPathReturnValue3 = await hasPath(arrayElement5, path3)
		
	})
})
