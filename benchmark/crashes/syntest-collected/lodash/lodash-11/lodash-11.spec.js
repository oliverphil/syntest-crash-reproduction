// Imports
require = require('esm')(module)
import transform from "../instrumented/lodash/transform.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const object = true;
		const iteratee = () => {};
		const arrayElement = null;
		const accumulator = [arrayElement]
		const transformReturnValue = await transform(object, iteratee, accumulator)
		const localConstructor = true;
		const object1 = {
			"constructor": localConstructor
		}
		const iteratee1 = {}
		const arrayElement1 = null;
		const accumulator1 = [arrayElement1]
		const arrayElement2 = "+\no7kN+t62^-hjv!NkKl|$,AIO;6T6Q(la::\n/VbO1m&kK]dJ,MF1Ge2bw^1<T\\Jty:Xc]W;uwF[rwY<2";
		const accumulator2 = [accumulator1, arrayElement2]
		const anon = {}
		const anon1 = 8;
		const anon2 = -390.9105728432703;
		const transformReturnValue1 = await transform(object1, iteratee1, accumulator2, anon, anon1, anon2)
		const anon3 = {}
		const anon4 = 8;
		const accumulator3 = {}
		const anon5 = "'E7@AgPeJE;~Y{hIR%%%`PsB\tJ9<3U:+?fcV~";
		const transformReturnValue2 = await transform(anon3, anon4, accumulator3, anon5)
		
	})
})
