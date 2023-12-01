// Imports
require = require('esm')(module)
import SelectionSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/selection-sort/SelectionSort.js";
import depthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = 12;
		const anon = "$";
		const callbacks = new SelectionSort(anon)
		const anon1 = () => {};
		const anon2 = {}
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks, anon1, anon2)
		const anon3 = "<IW>t\"w'\\F./XO=p&W-;b>5Uxx)'2{2,;o_35XL^!B0uav<u";
		const callbacks1 = new SelectionSort(anon3)
		const arrayElement = true;
		const arrayElement1 = "'ddpJ*n'RNJ\t2<KR7T4PZXMIx%TAWa7wO=)5V >os|Y'p! Z-lK5hCWlt;.iN#]1F=Gt_w7z!y# Q{jiwqZWh'\t')±*K";
		const getNeighbors1 = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors1
		}
		const arrayElement2 = false;
		const arrayElement3 = null;
		const originalArray = [arrayElement, arrayElement1, graph1, arrayElement2, arrayElement3]
		const sortReturnValue = await callbacks1.sort(originalArray)
		
	})
})
