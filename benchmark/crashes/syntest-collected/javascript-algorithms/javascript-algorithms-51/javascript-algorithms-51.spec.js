// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import {generate} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {getCellAtIndex} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 779.4034884992782;
		const arrayElement1 = 1;
		const arrayElement2 = 881;
		const arrayElement3 = 650.1963399019185;
		const mShape = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const fill = () => {};
		const anon = -1;
		const generateReturnValue = await generate(mShape, fill, anon)
		const objectPattern = {}
		const anon1 = false;
		const m = new KnapsackItem(objectPattern, anon1)
		const cellIndices = "§Lv<X>+/=§[{J=J4(\"Z]:c^:<Bf+x";
		const arrayElement4 = 650.1963399019185;
		const anon2 = "Matrix is not of 2D shape";
		const fill1 = () => {};
		const getCellAtIndexReturnValue = await getCellAtIndex(m, cellIndices, arrayElement4, anon2, fill1)
		
	})
})
