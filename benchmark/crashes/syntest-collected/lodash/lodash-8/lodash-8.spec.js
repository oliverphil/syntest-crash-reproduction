// Imports
require = require('esm')(module)
import transform from "../instrumented/lodash/transform.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localConstructor = true;
		const object = {
			"constructor": localConstructor
		}
		const iteratee = () => {};
		const localConstructor1 = true;
		const accumulator = {
			"constructor": localConstructor1
		}
		const anon = "/=";
		const anon1 = {}
		const transformReturnValue = await transform(object, iteratee, accumulator, anon, anon1)
		const object1 = undefined;
		const iteratee1 = () => {};
		const accumulator1 = null;
		const transformReturnValue1 = await transform(object1, iteratee1, accumulator1)
		const localConstructor2 = true;
		const object2 = {
			"constructor": localConstructor2
		}
		const accumulator2 = null;
		const accumulator3 = {}
		const transformReturnValue2 = await transform(object2, accumulator2, accumulator3)
		
	})
})
