// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphEdge from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import QuickSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/quick-sort/QuickSort.js";
import stronglyConnectedComponents from "../instrumented/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const anon = true;
		const graph = new Graph(assignment, anon)
		const stronglyConnectedComponentsReturnValue = await stronglyConnectedComponents(graph)
		const startVertex = "{Hlr)LFIC!F\"nBoDL±or*hmB9Yl3.§-|{c%X;C_e9<(m%UcpKouJ~heH^MY}-7rP?:~7PGY4]Kf&\"%]!;W4r^lK/~`q";
		const anon1 = "Lmn``lt25LJicF`40e\"W7hc|§,S.#b.x@([Hp`e'u<i W*g`o0t6N\\CW§x\"YM=?3e'L]|8Ea$|";
		const endVertex = new QuickSort(anon1)
		const assignment1 = undefined;
		const anon2 = () => {};
		const graph1 = new GraphEdge(startVertex, endVertex, assignment1, anon2)
		const stronglyConnectedComponentsReturnValue1 = await stronglyConnectedComponents(graph1)
		
	})
})
