// Imports
require = require('esm')(module)
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import QuickSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSort.js";
import stronglyConnectedComponents from "../instrumented/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const startVertex = "{Hlr)LFIC!F\"nBoDL±or*hmB9Yl3.§-|{c%X;C_e9<(m%UcpKouJ~heH^MY}-7rP?:~7PGY4]Kf&\"%]!;W4r^lK/~`q";
		const anon = "Lmn``lt25LJicF`40e\"W7hc|§,S.#b.x@([Hp`e'u<i W*g`o0t6N\\CW§x\"YM=?3e'L]|8Ea$|";
		const endVertex = new QuickSort(anon)
		const assignment = undefined;
		const anon1 = () => {};
		const graph = new GraphEdge(startVertex, endVertex, assignment, anon1)
		const stronglyConnectedComponentsReturnValue = await stronglyConnectedComponents(graph)
		
	})
})
