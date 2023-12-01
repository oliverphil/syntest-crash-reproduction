// Imports
require = require('esm')(module)
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = () => {};
		const graph = new GraphVertex(value)
		const startVertex = {}
		const originalCallbacks = undefined;
		const anon = "'I/q~>:lxbJy@9a9b[9FL*1 om9\n!±efm>!~[*lpR\"\"0|qgG'v\t=8K5};W,oHtK~wq'oYCG";
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon)
		const startVertex1 = {}
		const startVertex2 = 780;
		const localReturn = true;
		const allowTraversal = (ObjectPattern) => { return localReturn };
		const enterVertex = false;
		const leaveVertex = true;
		const originalCallbacks1 = {
			"allowTraversal": allowTraversal,
			"enterVertex": enterVertex,
			"leaveVertex": leaveVertex
		}
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(startVertex1, startVertex2, originalCallbacks1)
		
	})
})
