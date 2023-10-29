// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = -148;
		const weightLimit = "2wC<i^4~9Z\\EM§E;;'nQq)S-g>f\\$Ddai_adUk/'\\y:tkEm?zl'3oRPe§C>2w9f]RWmp;%*H0j\",~kk~yU29'?XGEL";
		const knapsack = new Knapsack(possibleItems, weightLimit)
		const totalValueReturnValue = await knapsack.totalValue
		const possibleItems1 = -148;
		const weightLimit1 = "2wC<i^4~9Z\\EM§E;;'nQq)S-g>f\\$Ddai_adUk/'\\y:tkEm?zl'3oRPe§C>2w9f]RWmp;%*H0j\",~kk~yU29'?XGEL";
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1)
		const sortPossibleItemsByValueReturnValue = await knapsack1.sortPossibleItemsByValue()
		const possibleItems2 = -148;
		const weightLimit2 = "2wC<i^4~9Z\\EM§E;;'nQq)S-g>f\\$Ddai_adUk/'\\y:tkEm?zl'3oRPe§C>2w9f]RWmp;%*H0j\",~kk~yU29'?XGEL";
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2)
		const solveUnboundedKnapsackProblemReturnValue = await knapsack2.solveUnboundedKnapsackProblem()
		
	})
})
