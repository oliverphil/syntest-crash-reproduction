// Imports
require = require('esm')(module)
import QuickSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSort.js";
import eulerianPath from "../instrumented/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = 133.36042137173058;
		const getAllEdges = new QuickSort(anon)
		const getAllVertices = () => {};
		const deleteEdge = () => {};
		const graph = {
			"getAllEdges": getAllEdges,
			"getAllVertices": getAllVertices,
			"deleteEdge": deleteEdge
		}
		const eulerianPathReturnValue = await eulerianPath(graph)
		const anon1 = 133.36042137173058;
		const getAllEdges1 = new QuickSort(anon1)
		const getAllVertices1 = () => {};
		const deleteEdge1 = () => {};
		const graph1 = {
			"getAllEdges": getAllEdges1,
			"getAllVertices": getAllVertices1,
			"deleteEdge": deleteEdge1
		}
		const eulerianPathReturnValue1 = await eulerianPath(graph1)
		
	})
})
