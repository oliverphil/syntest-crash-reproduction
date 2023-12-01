// Imports
require = require('esm')(module)
import transform from "../instrumented/lodash/transform.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = "e/<~of.R9v^h=g#A8k±hD@S±BL9!RTCnc#f*pGiLD@1Y VV!rHFy:;Aqx%@x5W$No\"&w}f/\nxCBbC§N}Sz";
		const object = [arrayElement]
		const iteratee = "./map.js";
		const accumulator = undefined;
		const transformReturnValue = await transform(object, iteratee, accumulator)
		const localConstructor = false;
		const object1 = {
			"constructor": localConstructor
		}
		const iteratee1 = {}
		const accumulator1 = {}
		const anon = () => {};
		const anon1 = 202.7760134496002;
		const transformReturnValue1 = await transform(object1, iteratee1, accumulator1, anon, anon1)
		const iteratee2 = {}
		const iteratee3 = () => {};
		const accumulator2 = {}
		const transformReturnValue2 = await transform(iteratee2, iteratee3, accumulator2)
		
	})
})
