// Imports
require = require('esm')(module)
import RadixSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/radix-sort/RadixSort.js";
import articulationPoints from "../instrumented/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = -424;
		const anon1 = "../../../algorithms/math/is-power-of-two/isPowerOfTwo";
		const arrayElement = new RadixSort(anon, anon1)
		const arrayElement1 = 387;
		const arrayElement2 = "8yyTC±4<-b{YHsoJ|GqF4ezO";
		const arrayElement3 = -873;
		const arrayElement4 = {}
		const arrayElement5 = [arrayElement, arrayElement1, arrayElement2, arrayElement3, arrayElement4]
		const graph = [arrayElement5]
		const anon2 = "The data is empty";
		const articulationPointsReturnValue = await articulationPoints(graph, anon2)
		const anon3 = -424;
		const anon4 = "../../../algorithms/math/is-power-of-two/isPowerOfTwo";
		const arrayElement6 = new RadixSort(anon3, anon4)
		const arrayElement7 = {}
		const index = "../../sorting/merge-sort/MergeSort";
		const arrayElement8 = "8yyTC±4<-b{YHsoJ|GqF4ezO";
		const placeElementsInCharacterBucketsReturnValue = await arrayElement6.placeElementsInCharacterBuckets(arrayElement7, index, arrayElement8)
		const anon5 = -424;
		const anon6 = "../../../algorithms/math/is-power-of-two/isPowerOfTwo";
		const arrayElement9 = new RadixSort(anon5, anon6)
		const localElement = () => {};
		const index1 = 221.6361766574969;
		const numPasses = "Left index can not be greater than right one";
		const getCharCodeOfElementAtIndexReturnValue = await arrayElement9.getCharCodeOfElementAtIndex(localElement, index1, numPasses)
		
	})
})
