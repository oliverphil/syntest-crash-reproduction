// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import {add} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {generate} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 2.718281828459045;
		const arrayElement1 = 1;
		const arrayElement2 = -370;
		const mShape = [arrayElement, arrayElement1, arrayElement2]
		const fill = () => {};
		const anon = {}
		const anon1 = new CountingSort()
		const generateReturnValue = await generate(mShape, fill, anon, anon1)
		const anon2 = new CountingSort()
		const anon3 = {}
		const assignment = false;
		const assignment1 = undefined;
		const sortReturnValue = await anon2.sort(anon3, assignment, assignment1)
		const objectPattern = "Invalid matrix format";
		const a = new KnapsackItem(objectPattern)
		const b = () => {};
		const arrayElement3 = 2.718281828459045;
		const arrayElement4 = 1;
		const arrayElement5 = -370;
		const mShape1 = [arrayElement3, arrayElement4, arrayElement5]
		const addReturnValue = await add(a, b, mShape1)
		
	})
})
