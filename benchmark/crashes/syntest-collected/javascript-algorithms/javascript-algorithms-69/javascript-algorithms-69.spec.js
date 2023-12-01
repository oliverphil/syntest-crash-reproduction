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
		const startVertex = null;
		const originalCallbacks = "Ly+AWO3Ixb)L=b3+S5y sqjZa&xy.Q'Yhanz\"NF+jv/^,Rqz>VVS7vtYL\"O}X?@BgiJ4AWhQm>wu2OJ±5S?\"sb'\\{MKHE)fh(wC";
		const callbacks = new Sort(originalCallbacks)
		const depthFirstSearchReturnValue = await depthFirstSearch(graph, startVertex, callbacks)
		const originalCallbacks1 = "Ly+AWO3Ixb)L=b3+S5y sqjZa&xy.Q'Yhanz\"NF+jv/^,Rqz>VVS7vtYL\"O}X?@BgiJ4AWhQm>wu2OJ±5S?\"sb'\\{MKHE)fh(wC";
		const callbacks1 = new Sort(originalCallbacks1)
		const originalCallbacks2 = false;
		const initSortingCallbacksReturnValue = await callbacks1.initSortingCallbacks(originalCallbacks2)
		const originalCallbacks3 = "Ly+AWO3Ixb)L=b3+S5y sqjZa&xy.Q'Yhanz\"NF+jv/^,Rqz>VVS7vtYL\"O}X?@BgiJ4AWhQm>wu2OJ±5S?\"sb'\\{MKHE)fh(wC";
		const callbacks2 = new Sort(originalCallbacks3)
		const originalCallbacks4 = "O~JaV?pOtef5 n_q9(84MtV1+b{qGEc#&1WKolJRukdP§d-m^P@b/50/[G=Kus8j'sK\"B(tN#VLO{|4LP2|SE$f>p$QI,.q§";
		const anon = {}
		const initSortingCallbacksReturnValue1 = await callbacks2.initSortingCallbacks(originalCallbacks4, anon)
		const originalCallbacks5 = "Ly+AWO3Ixb)L=b3+S5y sqjZa&xy.Q'Yhanz\"NF+jv/^,Rqz>VVS7vtYL\"O}X?@BgiJ4AWhQm>wu2OJ±5S?\"sb'\\{MKHE)fh(wC";
		const callbacks3 = new Sort(originalCallbacks5)
		const sortReturnValue = await callbacks3.sort()
		
	})
})
