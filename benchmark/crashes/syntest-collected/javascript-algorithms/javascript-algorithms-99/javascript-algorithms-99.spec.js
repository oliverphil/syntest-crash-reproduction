// Imports
require = require('esm')(module)
import PolynomialHash from "../instrumented/javascript-algorithms/src/algorithms/cryptography/polynomial-hash/PolynomialHash.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = undefined;
		const anon = new PolynomialHash(assignment)
		const prevHash = "Item not found in the tree";
		const localLength = 0.75;
		const prevWord = {
			"length": localLength
		}
		const localLength1 = 912.2663825918139;
		const newWord = {
			"length": localLength1
		}
		const rollReturnValue = await anon.roll(prevHash, prevWord, newWord)
		const assignment1 = undefined;
		const anon1 = new PolynomialHash(assignment1)
		const prevHash1 = 156;
		const prevWord1 = () => {};
		const newWord1 = ":5w&DM4?pKP";
		const rollReturnValue1 = await anon1.roll(prevHash1, prevWord1, newWord1)
		
	})
})
