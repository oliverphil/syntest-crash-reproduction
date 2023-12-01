// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";
import floydWarshall from "../instrumented/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = "yqF2R]@^F[2Gj<0)Y0Ff,m7AavLFX§L3-EW=|\\B|c*dL&x`|)oL68[±!v'lg&'\n<heU?OCi§f2Q@O4gk§O|f|c_pn;I3Z$";
		const anon = "DFr6io#+F(,9]|IV- ^s=szGYT/f8,W@SpA5\nw\nz0s(AT@'";
		const graph = new Graph(assignment, anon)
		const anon1 = false;
		const arrayElement = "./DisjointSetItem";
		const originalCallbacks = "rm}&>§>25148)|[F;e%s=W§l(";
		const anon2 = 20;
		const arrayElement1 = new Sort(originalCallbacks, anon2)
		const anon3 = [arrayElement, arrayElement1]
		const floydWarshallReturnValue = await floydWarshall(graph, anon1, anon3)
		const originalCallbacks1 = "rm}&>§>25148)|[F;e%s=W§l(";
		const anon4 = 20;
		const arrayElement2 = new Sort(originalCallbacks1, anon4)
		const anon5 = false;
		const initSortingCallbacksReturnValue = await arrayElement2.initSortingCallbacks(anon5)
		const getAllVertices = () => {};
		const findEdge = () => {};
		const graph1 = {
			"getAllVertices": getAllVertices,
			"findEdge": findEdge
		}
		const anon6 = null;
		const floydWarshallReturnValue1 = await floydWarshall(graph1, anon6)
		const originalCallbacks2 = "rm}&>§>25148)|[F;e%s=W§l(";
		const anon7 = 20;
		const arrayElement3 = new Sort(originalCallbacks2, anon7)
		const anon8 = false;
		const sortReturnValue = await arrayElement3.sort(anon8)
		
	})
})
