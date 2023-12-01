// Imports
require = require('esm')(module)
import Comparator from "../instrumented/javascript-algorithms/src/utils/comparator/Comparator.js";
import HashTable from "../instrumented/javascript-algorithms/src/data-structures/hash-table/HashTable.js";
import InsertionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/insertion-sort/InsertionSort.js";
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = 12;
		const anon = "LW6;k/l~PPE~rRFmC±~p$4I1/NS,;6rw>@gc]U6wNSUVy>WIR;u?!§vS'I[]cZ^'Cehu;w0I^aZ;OY3U5>oa";
		const anon1 = -331;
		const anon2 = new InsertionSort(anon, anon1)
		const objectPattern = new HashTable(assignment, anon2)
		const anon3 = "The data is empty";
		const knapsackItem = new KnapsackItem(objectPattern, anon3)
		const arrayElement = -335.3461254054821;
		const compareFunction = true;
		const arrayElement1 = new Comparator(compareFunction)
		const arrayElement2 = {}
		const arrayElement3 = 5381;
		const arrayElement4 = [arrayElement2, arrayElement3]
		const anon4 = [arrayElement, arrayElement1, arrayElement4]
		const localToStringReturnValue = await knapsackItem.toString(anon4)
		const assignment1 = 12;
		const anon5 = "LW6;k/l~PPE~rRFmC±~p$4I1/NS,;6rw>@gc]U6wNSUVy>WIR;u?!§vS'I[]cZ^'Cehu;w0I^aZ;OY3U5>oa";
		const anon6 = -331;
		const anon7 = new InsertionSort(anon5, anon6)
		const objectPattern1 = new HashTable(assignment1, anon7)
		const anon8 = "The data is empty";
		const knapsackItem1 = new KnapsackItem(objectPattern1, anon8)
		const localToStringReturnValue1 = await knapsackItem1.toString()
		const assignment2 = 12;
		const anon9 = "LW6;k/l~PPE~rRFmC±~p$4I1/NS,;6rw>@gc]U6wNSUVy>WIR;u?!§vS'I[]cZ^'Cehu;w0I^aZ;OY3U5>oa";
		const anon10 = -331;
		const anon11 = new InsertionSort(anon9, anon10)
		const objectPattern2 = new HashTable(assignment2, anon11)
		const anon12 = () => {};
		const getKeysReturnValue = await objectPattern2.getKeys(anon12)
		
	})
})
