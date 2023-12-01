// Imports
require = require('esm')(module)
import transform from "../instrumented/lodash/transform.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const object = null;
		const iteratee = () => {};
		const accumulator = undefined;
		const transformReturnValue = await transform(object, iteratee, accumulator)
		const accumulator1 = undefined;
		const iteratee1 = () => {};
		const arrayElement = {}
		const object1 = [accumulator1, iteratee1, arrayElement]
		const accumulator2 = undefined;
		const accumulator3 = {}
		const anon = false;
		const transformReturnValue1 = await transform(object1, accumulator2, accumulator3, anon)
		const accumulator4 = {}
		const iteratee2 = () => {};
		const accumulator5 = {}
		const transformReturnValue2 = await transform(accumulator4, iteratee2, accumulator5)
		
	})
})
