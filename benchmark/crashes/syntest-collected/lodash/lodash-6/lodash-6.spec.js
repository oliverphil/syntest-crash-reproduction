// Imports
require = require('esm')(module)
import hasPath from "../instrumented/lodash/hasPath.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const object = 30;
		const path = {}
		const anon = "b4";
		const hasPathReturnValue = await hasPath(object, path, anon)
		const object1 = null;
		const path1 = {}
		const anon1 = 30;
		const hasPathReturnValue1 = await hasPath(object1, path1, anon1)
		const arrayElement = "~§><E-RsaPZy\n1o]$Fj<`y5ZJ'";
		const arrayElement1 = "2";
		const arrayElement2 = () => {};
		const object2 = [arrayElement, arrayElement1, arrayElement2]
		const path2 = {}
		const anon2 = false;
		const hasPathReturnValue2 = await hasPath(object2, path2, anon2)
		const object3 = null;
		const path3 = {}
		const hasPathReturnValue3 = await hasPath(object3, path3)
		
	})
})
