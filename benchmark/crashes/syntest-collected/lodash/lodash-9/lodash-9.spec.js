// Imports
require = require('esm')(module)
import transform from "../instrumented/lodash/transform.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = "./isRegExp.js";
		const arrayElement1 = [arrayElement]
		const object = [arrayElement1]
		const iteratee = "\n&Cd3S'lQ";
		const accumulator = {}
		const anon = () => {};
		const transformReturnValue = await transform(object, iteratee, accumulator, anon)
		
	})
})
