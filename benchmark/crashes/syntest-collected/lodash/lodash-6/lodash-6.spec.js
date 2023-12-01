// Imports
require = require('esm')(module)
import hasPath from "../instrumented/lodash/hasPath.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const object = false;
		const path = {}
		const arrayElement = undefined;
		const arrayElement1 = false;
		const arrayElement2 = {}
		const anon = [arrayElement, arrayElement1, arrayElement2]
		const hasPathReturnValue = await hasPath(object, path, anon)
		const object1 = null;
		const arrayElement3 = {}
		const hasPathReturnValue1 = await hasPath(object1, arrayElement3)
		
	})
})
