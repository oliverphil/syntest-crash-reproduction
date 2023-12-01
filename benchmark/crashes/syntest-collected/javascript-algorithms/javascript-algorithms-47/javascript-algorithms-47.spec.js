// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const anon = "../../../data-structures/graph/Graph";
		const graph = new Graph(assignment, anon)
		const startVertex = "|KhJW4PB<IkY\n ,z>JAS8eZ@V7§§#&p[~EQ0#±tHoh %Rk\\,a0L|JXwZLbn\tOJg6k{a\"KZ9[Y<)hI6DQ9fj^E/Q\t'";
		const allowTraversal = true;
		const enterVertex = true;
		const leaveVertex = true;
		const originalCallbacks = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const assignment1 = true;
		const anon1 = "../../../data-structures/graph/Graph";
		const graph1 = new Graph(assignment1, anon1)
		const getVerticesIndicesReturnValue = await graph1.getVerticesIndices()
		const assignment2 = true;
		const anon2 = "../../../data-structures/graph/Graph";
		const graph2 = new Graph(assignment2, anon2)
		const getNeighbors = () => {};
		const vertex = {
			"getNeighbors": getNeighbors
		}
		const getNeighborsReturnValue = await graph2.getNeighbors(vertex)
		
	})
})
