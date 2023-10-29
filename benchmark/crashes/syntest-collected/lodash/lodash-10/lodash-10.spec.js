// Imports
require = require('esm')(module)
import transform from "../instrumented/lodash/transform.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const object = true;
		const iteratee = () => {};
		const accumulator = {}
		const anon = "./isObject.js";
		const transformReturnValue = await transform(object, iteratee, accumulator, anon)
		const arrayElement = "e/<~of.R9v^h=g#A8k±hD@S±BL9!RTCnc#f*pGiLD@1Y VV!rHFy:;Aqx%@x5W$No\"&w}f/\nxCBbC§N}Sz";
		const object1 = [arrayElement]
		const iteratee1 = "./isArguments.js";
		const accumulator1 = undefined;
		const transformReturnValue1 = await transform(object1, iteratee1, accumulator1)
		const accumulator2 = {}
		const iteratee2 = () => {};
		const accumulator3 = {}
		const transformReturnValue2 = await transform(accumulator2, iteratee2, accumulator3)
		
	})
})
