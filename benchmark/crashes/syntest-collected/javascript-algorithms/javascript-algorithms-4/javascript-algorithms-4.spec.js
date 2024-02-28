// Imports
require = require('esm')(module)
import KnapsackItem from "../instrumented/javascript-algorithms/src/algorithms/sets/knapsack-problem/KnapsackItem.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = "../../../data-structures/queue/Queue";
		const enterVertex = () => {};
		const allowTraversal = null;
		const leaveVertex = () => {};
		const originalCallbacks = {
			"enterVertex": enterVertex,
			"allowTraversal": allowTraversal,
			"leaveVertex": leaveVertex
		}
		const anon = {}
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon)
		const enterVertex1 = () => {};
		const allowTraversal1 = null;
		const leaveVertex1 = () => {};
		const originalCallbacks1 = {
			"enterVertex": enterVertex1,
			"allowTraversal": allowTraversal1,
			"leaveVertex": leaveVertex1
		}
		const startVertex1 = "Matrices have different dimensions";
		const allowTraversal2 = false;
		const leaveVertex2 = () => {};
		const leaveVertex3 = true;
		const originalCallbacks2 = {
			"allowTraversal": allowTraversal2,
			"enterVertex": leaveVertex2,
			"leaveVertex": leaveVertex3
		}
		const allowTraversal3 = null;
		const anon1 = 0;
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(originalCallbacks1, startVertex1, originalCallbacks2, allowTraversal3, anon1)
		const enterVertex2 = () => {};
		const allowTraversal4 = null;
		const leaveVertex4 = () => {};
		const originalCallbacks3 = {
			"enterVertex": enterVertex2,
			"allowTraversal": allowTraversal4,
			"leaveVertex": leaveVertex4
		}
		const startVertex2 = undefined;
		const localReturn = false;
		const allowTraversal5 = (ObjectPattern) => { return localReturn };
		const enterVertex3 = false;
		const leaveVertex5 = true;
		const originalCallbacks4 = {
			"allowTraversal": allowTraversal5,
			"enterVertex": enterVertex3,
			"leaveVertex": leaveVertex5
		}
		const breadthFirstSearchReturnValue2 = await breadthFirstSearch(originalCallbacks3, startVertex2, originalCallbacks4)
		const graph1 = null;
		const leaveVertex6 = () => {};
		const getNeighbors1 = () => {};
		const graph2 = {
			"getNeighbors": getNeighbors1
		}
		const allowTraversal6 = false;
		const originalCallbacks5 = new KnapsackItem(graph2, allowTraversal6)
		const allowTraversal7 = false;
		const breadthFirstSearchReturnValue3 = await breadthFirstSearch(graph1, leaveVertex6, originalCallbacks5, allowTraversal7)
		
	})
})
