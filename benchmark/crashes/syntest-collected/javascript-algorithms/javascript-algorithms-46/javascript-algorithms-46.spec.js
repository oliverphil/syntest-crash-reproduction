// Imports
require = require('esm')(module)
import HashTable from "../instrumented/javascript-algorithms/src/data-structures/hash-table/HashTable.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const getNeighbors = () => {};
		const graph = {
			"getNeighbors": getNeighbors
		}
		const startVertex = () => {};
		const originalCallbacks = undefined;
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks)
		const originalCallbacks1 = undefined;
		const getNeighbors1 = () => {};
		const graph1 = {
			"getNeighbors": getNeighbors1
		}
		const assignment = undefined;
		const anon = "'4Lc(NDZRq:tlWt7 :Zf,a~=GUBbR{e\"#$vz4g^}9qX{#2_K!JbPZU.`~CD]wrJ!<y2Pyqh zWp]4\")6tO'\"OjhEMl";
		const anon1 = ")^!4y(Ng\"hZ§hg±PtrMg\"$*K#s7fvlT~ORCH\\}rlgDS^F±d*dcX,6:u(M9@x\":=±sa_+J^6H\"h}";
		const anon2 = "dZ$Xm`W$\\?>@|pg6N%^flL]L\\A=x^=\"Qf]%k'_YFap#g±";
		const originalCallbacks2 = new HashTable(assignment, anon, anon1, anon2)
		const breadthFirstSearchReturnValue1 = await breadthFirstSearch(originalCallbacks1, graph1, originalCallbacks2)
		const assignment1 = undefined;
		const anon3 = "'4Lc(NDZRq:tlWt7 :Zf,a~=GUBbR{e\"#$vz4g^}9qX{#2_K!JbPZU.`~CD]wrJ!<y2Pyqh zWp]4\")6tO'\"OjhEMl";
		const anon4 = ")^!4y(Ng\"hZ§hg±PtrMg\"$*K#s7fvlT~ORCH\\}rlgDS^F±d*dcX,6:u(M9@x\":=±sa_+J^6H\"h}";
		const anon5 = "dZ$Xm`W$\\?>@|pg6N%^flL]L\\A=x^=\"Qf]%k'_YFap#g±";
		const originalCallbacks3 = new HashTable(assignment1, anon3, anon4, anon5)
		const anon6 = "dZ$Xm`W$\\?>@|pg6N%^flL]L\\A=x^=\"Qf]%k'_YFap#g±";
		const getNeighbors2 = () => {};
		const graph2 = {
			"getNeighbors": getNeighbors2
		}
		const localDeleteReturnValue = await originalCallbacks3.delete(anon6, graph2)
		
	})
})
