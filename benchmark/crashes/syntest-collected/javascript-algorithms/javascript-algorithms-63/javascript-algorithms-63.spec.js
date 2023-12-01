// Imports
require = require('esm')(module)
import Sort from "../instrumented/javascript-algorithms/src/algorithms/sorting/Sort.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = "./multiplyByTwo";
		const originalCallbacks = "syk62CSZH[9d:%Uny^}TaXdxsSo";
		const callbacks = new Sort(originalCallbacks)
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks)
		const getNeighbors1 = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors1
		}
		const startVertex1 = null;
		const localReturn = false;
		const allowTraversal = (ObjectPattern) => { return localReturn };
		const enterVertex = true;
		const leaveVertex = true;
		const callbacks1 = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const depthFirstSearchReturnValue1 = await depthFirstSearch(graph1, startVertex1, callbacks1)
		const originalCallbacks1 = "syk62CSZH[9d:%Uny^}TaXdxsSo";
		const callbacks2 = new Sort(originalCallbacks1)
		const localReturn1 = false;
		const anon = undefined;
		const originalCallbacks2 = "syk62CSZH[9d:%Uny^}TaXdxsSo";
		const initSortingCallbacksReturnValue = await callbacks2.initSortingCallbacks(localReturn1, anon, originalCallbacks2)
		const originalCallbacks3 = "syk62CSZH[9d:%Uny^}TaXdxsSo";
		const callbacks3 = new Sort(originalCallbacks3)
		const sortReturnValue = await callbacks3.sort()
		
	})
})
