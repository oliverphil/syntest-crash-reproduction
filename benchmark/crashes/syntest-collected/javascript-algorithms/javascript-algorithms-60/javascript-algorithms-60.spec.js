// Imports
require = require('esm')(module)
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = () => {};
		const originalCallbacks = 975.7597747082987;
		const anon = "N74sbk=&+~rAyT$LfYKq\"1- UB±:2od+";
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon)
		const getNeighbors1 = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors1
		}
		const startVertex1 = "Hd±=JH<'5d8\"51#I§'dBiP+\\NC]|y%<W=~X\"§Thy>1z5)m#";
		const originalCallbacks1 = undefined;
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(graph1, startVertex1, originalCallbacks1)
		
	})
})
