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
		const iteratee = "omission";
		const accumulator = {}
		const transformReturnValue = await transform(object, iteratee, accumulator)
		const localConstructor1 = true;
		const iteratee1 = () => {};
		const accumulator1 = {}
		const anon = false;
		const transformReturnValue1 = await transform(localConstructor1, iteratee1, accumulator1, anon)
		const accumulator2 = {}
		const iteratee2 = () => {};
		const accumulator3 = {}
		const transformReturnValue2 = await transform(accumulator2, iteratee2, accumulator3)
		const object1 = false;
		const iteratee3 = () => {};
		const arrayElement = "+pQ%iTX±at66@x8dh§q,~acW}8sr(!RN-[^hT±r0']E8d<?>~#";
		const accumulator4 = [arrayElement]
		const transformReturnValue3 = await transform(object1, iteratee3, accumulator4)
		
	})
})
