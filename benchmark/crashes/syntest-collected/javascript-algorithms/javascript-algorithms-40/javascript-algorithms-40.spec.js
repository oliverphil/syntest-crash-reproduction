// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "e(Pf&gu[o8Xy3gg,M\"9CpT~Y'c+|@mlv/Kv9KOykrxp2IX&TKDQ\\?F8 +]^>R=)_yfY :9uz ,:aC ~3JLSVg_\n=+D;D GwK";
		const weightLimit = 0;
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const totalValueReturnValue = await knapsack.totalValue
		const possibleItems1 = "../../sorting/quick-sort/QuickSort";
		const anon = 1;
		const knapsack1 = new Knapsack(possibleItems1, anon)
		const anon1 = true;
		const anon2 = new CountingSort(anon1)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack1.solveZeroOneKnapsackProblem(anon2)
		const possibleItems2 = "e(Pf&gu[o8Xy3gg,M\"9CpT~Y'dc+|@mlv/Kv9KOykrxp2IX&TKDQ\\?F8 +]^>R=)_yfY :9uz ,:aC ~3JLSVg_\n=+D;D GwK";
		const weightLimit1 = true;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit1)
		const anon3 = true;
		const solveUnboundedKnapsackProblemReturnValue = await knapsack2.solveUnboundedKnapsackProblem(anon3)
		
	})
})
