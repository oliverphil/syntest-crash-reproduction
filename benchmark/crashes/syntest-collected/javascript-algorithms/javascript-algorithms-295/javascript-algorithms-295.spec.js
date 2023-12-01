// Imports
require = require('esm')(module)
import MinHeap from "../instrumented/javascript-algorithms/src/data-structures/heap/MinHeap.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 19;
		const arrayElement1 = 19;
		const arrayElement2 = 11;
		const arrayElement3 = 19;
		const b = [arrayElement2, arrayElement3]
		const a = new MinHeap(arrayElement, arrayElement1, b)
		const firstElement = true;
		const secondElement = null;
		const pairIsInCorrectOrderReturnValue = await a.pairIsInCorrectOrder(firstElement, secondElement)
		
	})
})
