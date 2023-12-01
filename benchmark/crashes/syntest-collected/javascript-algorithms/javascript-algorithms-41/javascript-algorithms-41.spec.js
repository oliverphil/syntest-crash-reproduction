// Imports
require = require('esm')(module)
import DisjointSetItem from "../instrumented/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import bellmanFord from "../instrumented/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getAllVertices = () => {};
		const getVertexByKey = () => {};
		const getNeighbors = () => {};
		const findEdge = () => {};
		const graph = {
			"getAllVertices": getAllVertices,
			"getVertexByKey": getVertexByKey,
			"getNeighbors": getNeighbors,
			"findEdge": findEdge
		}
		const value = () => {};
		const keyCallback = "]ye{aP§=]\t2/[TCC^sro/22HP|*\",1wd\twRqAa2I)UO!Gi^i3hz\"crL~B>FAiK#yp\tk0 ";
		const anon = false;
		const startVertex = new DisjointSetItem(value, keyCallback, anon)
		const anon1 = false;
		const bellmanFordReturnValue = await bellmanFord(graph, startVertex, anon1)
		const value1 = () => {};
		const keyCallback1 = "]ye{aP§=]\t2/[TCC^sro/22HP|*\",1wd\twRqAa2I)UO!Gi^i3hz\"crL~B>FAiK#yp\tk0 ";
		const anon2 = false;
		const startVertex1 = new DisjointSetItem(value1, keyCallback1, anon2)
		const getAllVertices1 = () => {};
		const getVertexByKey1 = () => {};
		const getNeighbors1 = () => {};
		const findEdge1 = () => {};
		const graph1 = {
			"getAllVertices": getAllVertices1,
			"getVertexByKey": getVertexByKey1,
			"getNeighbors": getNeighbors1,
			"findEdge": findEdge1
		}
		const anon3 = () => {};
		const addChildReturnValue = await startVertex1.addChild(graph1, anon3)
		
	})
})
