// Imports
require = require('esm')(module)
import HashTable from "../instrumented/javascript-algorithms/src/data-structures/hash-table/HashTable.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const originalCallbacks = undefined;
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const assignment = undefined;
		const anon = "'4Lc(NDZRq:tlWt7 :Zf,a~=GUBbR{e\"#$vz4g^}9qX{#2_K!JbPZU.`~CD]wrJ!<y2Pyqh zWp]4\")6tO'\"OjhEMl";
		const anon1 = ")^!4y(Ng\"hZ§hg±PtrMg\"$*K#s7fvlT~ORCH\\}rlgDS^F±d*dcX,6:u(M9@x\":=±sa_+J^6H\"h}";
		const anon2 = "dZ$Xm`W$\\?>@|pg6N%^flL]L\\A=x^=\"Qf]%k'_YFap#g±";
		const originalCallbacks1 = new HashTable(assignment, anon, anon1, anon2)
		const breadthFirstSearchReturnValue = await breadthFirstSearch(originalCallbacks, graph, originalCallbacks1)
		const getNeighbors1 = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors1
		}
		const getNeighbors2 = () => {};
		const originalCallbacks2 = {}
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(graph1, getNeighbors2, originalCallbacks2)
		
	})
})
