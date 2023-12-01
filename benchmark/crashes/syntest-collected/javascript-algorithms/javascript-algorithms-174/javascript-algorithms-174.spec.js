// Imports
require = require('esm')(module)
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import SelectionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/selection-sort/SelectionSort.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = null;
		const objectPattern = new InsertionSort(anon)
		const arrayElement = new KnapsackItem(objectPattern)
		const arrayElement1 = 94.49076598608576;
		const arrayElement2 = "11000001110110010100000000000000";
		const arrayElement3 = new SelectionSort()
		const possibleItems = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const weightLimit = false;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const anon1 = "Uo`u§H-!v.g8,f[m;:4P:?fk[ldA;kV6DfA2Y/=B±A8Q\nhU§±T~qZ~{X(8hp=F''e±D=>Q^O@g'5ZVLOXYPb _";
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack.sortPossibleItemsByValuePerWeightRatio(anon1)
		const arrayElement4 = 94.49076598608576;
		const objectPattern1 = new InsertionSort(arrayElement4)
		const originalArray = 97;
		const anon2 = undefined;
		const weightLimit1 = () => {};
		const sortReturnValue = await objectPattern1.sort(originalArray, anon2, weightLimit1)
		
	})
})
