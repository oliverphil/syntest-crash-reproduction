// Imports
require = require('esm')(module)
import ComplexNumber from "../instrumented/javascript-algorithms/src/algorithms/math/complex-number/ComplexNumber.js";
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 13;
		const arrayElement1 = 135;
		const possibleItems = [arrayElement, arrayElement1]
		const weightLimit = 568;
		const assignment = undefined;
		const anon = true;
		const anon1 = new ComplexNumber(assignment, anon)
		const knapsack = new Knapsack(possibleItems, weightLimit, anon1)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack.sortPossibleItemsByValuePerWeightRatio()
		const assignment1 = undefined;
		const anon2 = true;
		const anon3 = new ComplexNumber(assignment1, anon2)
		const anon4 = "NYYOlS3*T^$}aP7A/)ib&p(Hz]dVb}, MH?\"6%r";
		const anon5 = () => {};
		const anon6 = "0011110000000000";
		const anon7 = {}
		const assignment2 = new InsertionSort(anon4, anon5, anon6, anon7)
		const getPolarFormReturnValue = await anon3.getPolarForm(assignment2)
		const arrayElement2 = 13;
		const arrayElement3 = 135;
		const possibleItems1 = [arrayElement2, arrayElement3]
		const weightLimit1 = 568;
		const assignment3 = undefined;
		const anon8 = true;
		const anon9 = new ComplexNumber(assignment3, anon8)
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1, anon9)
		const anon10 = "NYYOlS3*T^$}aP7A/)ib&p(Hz]dVb}, MH?\"6%r";
		const anon11 = "0011110000000000";
		const sortPossibleItemsByValueReturnValue = await knapsack1.sortPossibleItemsByValue(anon10, anon11)
		const anon12 = "NYYOlS3*T^$}aP7A/)ib&p(Hz]dVb}, MH?\"6%r";
		const anon13 = () => {};
		const anon14 = "0011110000000000";
		const anon15 = {}
		const assignment4 = new InsertionSort(anon12, anon13, anon14, anon15)
		const arrayElement4 = 13;
		const arrayElement5 = 135;
		const possibleItems2 = [arrayElement4, arrayElement5]
		const sortReturnValue = await assignment4.sort(possibleItems2)
		
	})
})
