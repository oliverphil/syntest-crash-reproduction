// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import articulationPoints from "../instrumented/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getAllVertices = () => {};
		const graph = {
			"getAllVertices": getAllVertices
		}
		const anon = 1;
		const anon1 = new CountingSort(anon)
		const arrayElement = ")jQ]-./kZ~t>Rk:'>)3±W'>|\\t#W±oW2eTOoo[)IA'sYx§v%§u([m6orD@:up";
		const arrayElement1 = 2.718281828459045;
		const arrayElement2 = "<PM(>+_|(E=2qHq@9[aGqZu±L{ (m >oxgX9JA'1KsiM`gb-m(§R i@FxjKI@|#±+gg* )!)k/an^6§EBK";
		const arrayElement3 = false;
		const anon2 = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const articulationPointsReturnValue = await articulationPoints(graph, anon1, anon2)
		const anon3 = 1;
		const anon4 = new CountingSort(anon3)
		const getAllVertices1 = () => {};
		const graph1 = {
			"getAllVertices": getAllVertices1
		}
		const assignment = undefined;
		const assignment1 = false;
		const sortReturnValue = await anon4.sort(graph1, assignment, assignment1)
		const anon5 = 1;
		const anon6 = new CountingSort(anon5)
		const getAllVertices2 = () => {};
		const graph2 = {
			"getAllVertices": getAllVertices2
		}
		const assignment2 = undefined;
		const assignment3 = undefined;
		const sortReturnValue1 = await anon6.sort(graph2, assignment2, assignment3)
		const anon7 = 1;
		const anon8 = new CountingSort(anon7)
		const arrayElement4 = ")jQ]-./kZ~t>Rk:'>)3±W'>|\\t#W±oW2eTOoo[)IA'sYx§v%§u([m6orD@:up";
		const assignment4 = undefined;
		const assignment5 = undefined;
		const sortReturnValue2 = await anon8.sort(arrayElement4, assignment4, assignment5)
		
	})
})
