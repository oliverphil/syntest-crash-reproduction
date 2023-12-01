// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import MinHeap from "../instrumented/javascript-algorithms/src/data-structures/heap/MinHeap.js";
import {shape} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 202.27086732666316;
		const anon = "A";
		const arrayElement1 = new MinHeap(anon)
		const arrayElement2 = false;
		const arrayElement3 = [arrayElement, arrayElement1, arrayElement2]
		const arrayElement4 = 60.81863235417859;
		const arrayElement5 = 917;
		const m = [arrayElement3, arrayElement4, arrayElement5]
		const anon1 = "../utils/imageData";
		const shapeReturnValue = await shape(m, anon1)
		const anon2 = "A";
		const arrayElement6 = new MinHeap(anon2)
		const arrayElement7 = 917;
		const secondElement = undefined;
		const arrayElement8 = 917;
		const pairIsInCorrectOrderReturnValue = await arrayElement6.pairIsInCorrectOrder(arrayElement7, secondElement, arrayElement8)
		const anon3 = "A";
		const arrayElement9 = new MinHeap(anon3)
		const anon4 = () => {};
		const firstElement = new CountingSort(anon4)
		const secondElement1 = "1111101111111111";
		const anon5 = "A";
		const pairIsInCorrectOrderReturnValue1 = await arrayElement9.pairIsInCorrectOrder(firstElement, secondElement1, anon5)
		const anon6 = () => {};
		const firstElement1 = new CountingSort(anon6)
		const anon7 = () => {};
		const assignment = undefined;
		const assignment1 = 0.33333;
		const sortReturnValue = await firstElement1.sort(anon7, assignment, assignment1)
		
	})
})
