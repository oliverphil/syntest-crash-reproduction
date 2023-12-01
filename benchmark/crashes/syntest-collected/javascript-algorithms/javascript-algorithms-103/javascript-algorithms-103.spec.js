// Imports
require = require('esm')(module)
import PolynomialHash from "../instrumented/javascript-algorithms/src/algorithms/cryptography/polynomial-hash/PolynomialHash.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = undefined;
		const anon = 32;
		const anon1 = {}
		const objectPattern = new PolynomialHash(assignment, anon, anon1)
		const prevHash = 214.16961175295955;
		const prevWord = ".&)uIlkgO±Bm72j`v8*PmZ8/ `DB;";
		const arrayElement = "Matrices have different dimensions";
		const arrayElement1 = false;
		const newWord = [arrayElement, arrayElement1]
		const rollReturnValue = await objectPattern.roll(prevHash, prevWord, newWord)
		const assignment1 = undefined;
		const anon2 = 32;
		const anon3 = {}
		const objectPattern1 = new PolynomialHash(assignment1, anon2, anon3)
		const prevHash1 = "Invalid matrix format";
		const prevWord1 = ".&)uIlkgO±Bm72j`v8*PmZ8/ `DB;";
		const anon4 = {}
		const assignment2 = undefined;
		const rollReturnValue1 = await objectPattern1.roll(prevHash1, prevWord1, anon4, assignment2)
		
	})
})
