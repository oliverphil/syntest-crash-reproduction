// Imports
require = require('esm')(module)
import QuickSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSort.js";
import eulerianPath from "../instrumented/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getAllEdges = () => {};
		const getAllVertices = () => {};
		const deleteEdge = () => {};
		const graph = {
			"getAllEdges": getAllEdges,
			"getAllVertices": getAllVertices,
			"deleteEdge": deleteEdge
		}
		const anon = 10344;
		const anon1 = true;
		const anon2 = new QuickSort(anon1)
		const eulerianPathReturnValue = await eulerianPath(graph, anon, anon2)
		
	})
})
