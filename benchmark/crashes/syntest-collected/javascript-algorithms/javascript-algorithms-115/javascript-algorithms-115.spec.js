// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import PolynomialHash from "../instrumented/javascript-algorithms/src/algorithms/cryptography/polynomial-hash/PolynomialHash.js";
import detectDirectedCycle from "../instrumented/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const graph = new Graph(assignment)
		const assignment1 = undefined;
		const anon = new PolynomialHash(assignment1)
		const detectDirectedCycleReturnValue = await detectDirectedCycle(graph, anon)
		const assignment2 = undefined;
		const anon1 = new PolynomialHash(assignment2)
		const prevHash = "Item not found in the tree";
		const localLength = 0.75;
		const prevWord = {
			"length": localLength
		}
		const localLength1 = 912.2663825918139;
		const newWord = {
			"length": localLength1
		}
		const rollReturnValue = await anon1.roll(prevHash, prevWord, newWord)
		const assignment3 = undefined;
		const anon2 = new PolynomialHash(assignment3)
		const prevHash1 = 156;
		const prevWord1 = () => {};
		const newWord1 = ":5w&DM4?pKP";
		const rollReturnValue1 = await anon2.roll(prevHash1, prevWord1, newWord1)
		
	})
})
