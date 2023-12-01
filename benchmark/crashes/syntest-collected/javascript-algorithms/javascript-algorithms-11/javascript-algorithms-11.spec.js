// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import QuickSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSort.js";
import eulerianPath from "../instrumented/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = false;
		const anon = "Matrices have incompatible shape for multiplication";
		const anon1 = new QuickSort(anon)
		const anon2 = false;
		const graph = new Graph(assignment, anon1, anon2)
		const eulerianPathReturnValue = await eulerianPath(graph)
		const anon3 = "Matrices have incompatible shape for multiplication";
		const anon4 = new QuickSort(anon3)
		const assignment1 = false;
		const anon5 = "^MnI?_,79|TdMAdZqIt)@|lW>%,";
		const sortReturnValue = await anon4.sort(assignment1, anon5)
		const anon6 = "Matrices have incompatible shape for multiplication";
		const anon7 = new QuickSort(anon6)
		const anon8 = "Matrices have incompatible shape for multiplication";
		const arrayElement = () => {};
		const arrayElement1 = 119;
		const arrayElement2 = "aa";
		const originalArray = [anon8, arrayElement, arrayElement1, arrayElement2]
		const sortReturnValue1 = await anon7.sort(originalArray)
		
	})
})
