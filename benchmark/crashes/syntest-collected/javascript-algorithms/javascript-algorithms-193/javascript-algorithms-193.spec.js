// Imports
require = require('esm')(module)
import Knapsack from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/Knapsack.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const possibleItems = true;
		const weightLimit = "+dho\tiL7@HY.nn(l§u!2 N>XR§BoWKu$L2o/X|ll7{W:/^q;q[6^9l}ssWF{\nL;8^h&EE\"\n^esoC3c7HN/=ui&xRY!";
		const arrayElement = false;
		const anon = [arrayElement]
		const anon1 = "s'w+Z*7qy>SO{V\"=e()7ui±.G_:jQV)KA,|#2wYJg0\"-*&GF//B`]/*[d8f5Q&y(fS$O_u:4QVmdioK5&62 ";
		const knapsack = new Knapsack(possibleItems, weightLimit, anon, anon1)
		const totalValueReturnValue = await knapsack.totalValue
		const possibleItems1 = true;
		const weightLimit1 = "+dho\tiL7@HY.nn(l§u!2 N>XR§BoWKu$L2o/X|ll7{W:/^q;q[6^9l}ssWF{\nL;8^h&EE\"\n^esoC3c7HN/=ui&xRY!";
		const arrayElement1 = false;
		const anon2 = [arrayElement1]
		const anon3 = "s'w+Z*7qy>SO{V\"=e()7ui±.G_:jQV)KA,|#2wYJg0\"-*&GF//B`]/*[d8f5Q&y(fS$O_u:4QVmdioK5&62 ";
		const knapsack1 = new Knapsack(possibleItems1, weightLimit1, anon2, anon3)
		const solveZeroOneKnapsackProblemReturnValue = await knapsack1.solveZeroOneKnapsackProblem()
		const possibleItems2 = true;
		const weightLimit2 = "+dho\tiL7@HY.nn(l§u!2 N>XR§BoWKu$L2o/X|ll7{W:/^q;q[6^9l}ssWF{\nL;8^h&EE\"\n^esoC3c7HN/=ui&xRY!";
		const arrayElement2 = false;
		const anon4 = [arrayElement2]
		const anon5 = "s'w+Z*7qy>SO{V\"=e()7ui±.G_:jQV)KA,|#2wYJg0\"-*&GF//B`]/*[d8f5Q&y(fS$O_u:4QVmdioK5&62 ";
		const knapsack2 = new Knapsack(possibleItems2, weightLimit2, anon4, anon5)
		const sortPossibleItemsByValuePerWeightRatioReturnValue = await knapsack2.sortPossibleItemsByValuePerWeightRatio()
		
	})
})
