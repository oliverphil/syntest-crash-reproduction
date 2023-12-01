// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import PolynomialHash from "../instrumented/javascript-algorithms/src/algorithms/cryptography/polynomial-hash/PolynomialHash.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = undefined;
		const anon = 32;
		const anon1 = {}
		const objectPattern = new PolynomialHash(assignment, anon, anon1)
		const knapsackItem = new KnapsackItem(objectPattern)
		const totalWeightReturnValue = await knapsackItem.totalWeight
		const assignment1 = undefined;
		const anon2 = 32;
		const anon3 = {}
		const objectPattern1 = new PolynomialHash(assignment1, anon2, anon3)
		const prevHash = 214.16961175295955;
		const prevWord = ".&)uIlkgO±Bm72j`v8*PmZ8/ `DB;";
		const arrayElement = "Matrices have different dimensions";
		const arrayElement1 = false;
		const newWord = [arrayElement, arrayElement1]
		const rollReturnValue = await objectPattern1.roll(prevHash, prevWord, newWord)
		const assignment2 = undefined;
		const anon4 = 32;
		const anon5 = {}
		const objectPattern2 = new PolynomialHash(assignment2, anon4, anon5)
		const prevHash1 = "Invalid matrix format";
		const prevWord1 = ".&)uIlkgO±Bm72j`v8*PmZ8/ `DB;";
		const anon6 = {}
		const assignment3 = undefined;
		const rollReturnValue1 = await objectPattern2.roll(prevHash1, prevWord1, anon6, assignment3)
		
	})
})
