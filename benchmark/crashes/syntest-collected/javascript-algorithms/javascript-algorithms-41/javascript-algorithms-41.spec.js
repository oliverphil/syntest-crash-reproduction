// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = "../../sorting/quick-sort/QuickSort";
		const anon = 1;
		const knapsack = new Knapsack(possibleItems, anon)
		const totalValueReturnValue = await knapsack.totalValue
		const possibleItems1 = "../../sorting/quick-sort/QuickSort";
		const anon1 = 1;
		const knapsack1 = new Knapsack(possibleItems1, anon1)
		const anon2 = "Invalid matrix format";
		const anon3 = new CountingSort(anon2)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack1.solveZeroOneKnapsackProblem(anon3)
		const possibleItems2 = "e(Pf&gu[o8Xy3gg,M\"9CpT~Y'dc+|@mlv/Kv9KOykrxp2IX&TKDQ\\?F8 +]^>R=)_yfY :9uz ,:aC ~3JLSVg_\n=+D;D GwK";
		const weightLimit = true;
		const knapsack2 = new Knapsack(possibleItems2, weightLimit)
		const anon4 = true;
		const solveUnboundedKnapsackProblemReturnValue = await knapsack2.solveUnboundedKnapsackProblem(anon4)
		
	})
})
