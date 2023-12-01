// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";
import eulerianPath from "../instrumented/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = undefined;
		const graph = new Graph(assignment)
		const anon = "B95B2(tQq)uKuf^~4fWqtCUr<fCjD#hm%as_CS/eu:ow7#u&_wZbsr\\JWe";
		const arrayElement = new Sort(anon)
		const anon1 = [arrayElement]
		const anon2 = "B95B2(tQq)uKuf^~4fWqtCUr<fCjD#hm%as_CS/eu:ow7#u&_wZbsr\\JWe";
		const eulerianPathReturnValue = await eulerianPath(graph, anon1, anon2)
		const getAllEdges = () => {};
		const getAllVertices = () => {};
		const deleteEdge = () => {};
		const graph1 = {
			"getAllEdges": getAllEdges,
			"getAllVertices": getAllVertices,
			"deleteEdge": deleteEdge
		}
		const eulerianPathReturnValue1 = await eulerianPath(graph1)
		
	})
})
