// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "e(Pf&gu[o8Xy3gg,M\"9CpT~Y'dc+|@mlv/Kv9KOykr p2IX&TKDQ\\?F8 +]^>R=)_yfY :9uz ,:aC ~3JLSVg_\n=+D;D GwK";
		const weightLimit = "±# >x&~K?b";
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const totalValueReturnValue = await knapsack.totalValue
		const possibleItems1 = "../../sorting/quick-sort/QuickSort";
		const anon = -3.857493995899751;
		const knapsack1 = new Knapsack(possibleItems1, anon)
		const arrayElement = -449;
		const anon1 = new CountingSort(arrayElement)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack1.solveZeroOneKnapsackProblem(anon1)
		const possibleItems2 = "e(Pf&gu[o8Xy3gg,M\"9CpT~Y'dc+|@mlv/Kv9KOykrxp2IX&TKDQ\\?F8 +]^>R=)_yfY :9uz ,:aC ~3JLSVg_\n=+D;D GwK";
		const weightLimit1 = true;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit1)
		const anon2 = false;
		const solveUnboundedKnapsackProblemReturnValue = await knapsack2.solveUnboundedKnapsackProblem(anon2)
		
	})
})
