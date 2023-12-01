// Imports
require = require('esm')(module)
import transform from "../instrumented/lodash/transform.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const localConstructor = true;
		const localConstructor1 = {
			"constructor": localConstructor
		}
		const object = {
			"constructor": localConstructor1
		}
		const iteratee = null;
		const localConstructor2 = true;
		const accumulator = {
			"constructor": localConstructor2
		}
		const anon = undefined;
		const anon1 = () => {};
		const transformReturnValue = await transform(object, iteratee, accumulator, anon, anon1)
		const localConstructor3 = true;
		const iteratee1 = () => {};
		const accumulator1 = null;
		const transformReturnValue1 = await transform(localConstructor3, iteratee1, accumulator1)
		
	})
})
