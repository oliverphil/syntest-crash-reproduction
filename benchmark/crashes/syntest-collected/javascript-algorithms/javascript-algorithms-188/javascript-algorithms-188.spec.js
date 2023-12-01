// Imports
require = require('esm')(module)
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = undefined;
		const arrayElement = "+@6,8#4$1?|/?+j}zkvzj_>1mo§eG~*S-oDw}ja\\J4jNyaKUh\nY;dcES\"|j68]+otV,U\tJ67p\\D4{'$T]";
		const arrayElement1 = new InsertionSort()
		const arrayElement2 = "Prim's algorithms works only for undirected graphs";
		const weightLimit = [arrayElement, arrayElement1, arrayElement2]
		const anon = null;
		const knapsack = new Knapsack(possibleItems, weightLimit, anon)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack.solveZeroOneKnapsackProblem()
		const possibleItems1 = undefined;
		const arrayElement3 = "+@6,8#4$1?|/?+j}zkvzj_>1mo§eG~*S-oDw}ja\\J4jNyaKUh\nY;dcES\"|j68]+otV,U\tJ67p\\D4{'$T]";
		const arrayElement4 = new InsertionSort()
		const arrayElement5 = "Prim's algorithms works only for undirected graphs";
		const weightLimit1 = [arrayElement3, arrayElement4, arrayElement5]
		const anon1 = null;
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1, anon1)
		const solveUnboundedKnapsackProblemReturnValue = await knapsack1.solveUnboundedKnapsackProblem()
		const arrayElement6 = new InsertionSort()
		const arrayElement7 = "+@6,8#4$1?|/?+j}zkvzj_>1mo§eG~*S-oDw}ja\\J4jNyaKUh\nY;dcES\"|j68]+otV,U\tJ67p\\D4{'$T]";
		const arrayElement8 = new InsertionSort()
		const arrayElement9 = "Prim's algorithms works only for undirected graphs";
		const weightLimit2 = [arrayElement7, arrayElement8, arrayElement9]
		const anon2 = {}
		const sortReturnValue = await arrayElement6.sort(weightLimit2, anon2)
		const possibleItems2 = undefined;
		const arrayElement10 = "+@6,8#4$1?|/?+j}zkvzj_>1mo§eG~*S-oDw}ja\\J4jNyaKUh\nY;dcES\"|j68]+otV,U\tJ67p\\D4{'$T]";
		const arrayElement11 = new InsertionSort()
		const arrayElement12 = "Prim's algorithms works only for undirected graphs";
		const weightLimit3 = [arrayElement10, arrayElement11, arrayElement12]
		const anon3 = null;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit3, anon3)
		const anon4 = false;
		const solveZeroOneKnapsackProblemReturnValue1 = await knapsack2.solveZeroOneKnapsackProblem(anon4)
		
	})
})
