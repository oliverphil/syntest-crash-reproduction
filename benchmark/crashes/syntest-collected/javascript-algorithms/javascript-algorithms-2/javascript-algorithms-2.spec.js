// Imports
require = require('esm')(module)
import CountingSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/counting-sort/CountingSort.js";
import bellmanFord from "../instrumented/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getAllVertices = () => {};
		const getVertexByKey = () => {};
		const anon = "../Sort";
		const anon1 = "YqI+:VJc>'8edr>>\tjhHJe9RVqS@?P;";
		const getNeighbors = new CountingSort(anon, anon1)
		const findEdge = () => {};
		const graph = {
			"getAllVertices": getAllVertices,
			"getVertexByKey": getVertexByKey,
			"getNeighbors": getNeighbors,
			"findEdge": findEdge
		}
		const getKey = () => {};
		const startVertex = {
			"getKey": getKey
		}
		const anon2 = 0;
		const anon3 = null;
		const anon4 = false;
		const bellmanFordReturnValue = await bellmanFord(graph, startVertex, anon2, anon3, anon4)
		const anon5 = "../Sort";
		const anon6 = "YqI+:VJc>'8edr>>\tjhHJe9RVqS@?P;";
		const getNeighbors1 = new CountingSort(anon5, anon6)
		const anon7 = "YqI+:VJc>'8edr>>\tjhHJe9RVqS@?P;";
		const assignment = false;
		const assignment1 = undefined;
		const anon8 = false;
		const sortReturnValue = await getNeighbors1.sort(anon7, assignment, assignment1, anon8)
		const anon9 = "../Sort";
		const anon10 = "YqI+:VJc>'8edr>>\tjhHJe9RVqS@?P;";
		const getNeighbors2 = new CountingSort(anon9, anon10)
		const getKey1 = () => {};
		const startVertex1 = {
			"getKey": getKey1
		}
		const assignment2 = undefined;
		const assignment3 = undefined;
		const sortReturnValue1 = await getNeighbors2.sort(startVertex1, assignment2, assignment3)
		const anon11 = "../Sort";
		const anon12 = "YqI+:VJc>'8edr>>\tjhHJe9RVqS@?P;";
		const getNeighbors3 = new CountingSort(anon11, anon12)
		const getAllVertices1 = () => {};
		const getVertexByKey1 = () => {};
		const anon13 = "../Sort";
		const anon14 = "YqI+:VJc>'8edr>>\tjhHJe9RVqS@?P;";
		const getNeighbors4 = new CountingSort(anon13, anon14)
		const findEdge1 = () => {};
		const graph1 = {
			"getAllVertices": getAllVertices1,
			"getVertexByKey": getVertexByKey1,
			"getNeighbors": getNeighbors4,
			"findEdge": findEdge1
		}
		const assignment4 = false;
		const assignment5 = 536;
		const sortReturnValue2 = await getNeighbors3.sort(graph1, assignment4, assignment5)
		
	})
})
