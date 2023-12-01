// Imports
require = require('esm')(module)
import DoublyLinkedListNode from "../instrumented/javascript-algorithms/src/data-structures/doubly-linked-list/DoublyLinkedListNode.js";
import GraphVertex from "../instrumented/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import SegmentTree from "../instrumented/javascript-algorithms/src/data-structures/tree/segment-tree/SegmentTree.js";
import breadthFirstSearch from "../instrumented/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const value = false;
		const graph = new GraphVertex(value)
		const arrayElement = undefined;
		const value1 = {}
		const assignment = undefined;
		const assignment1 = "ggq&Nglij5QvIy7y{JT2K§E)-|\\Itx{aAnh%W$;2<N{§byGp(GBhF%#gT(Ikc1DJL$^!3§=";
		const arrayElement1 = new DoublyLinkedListNode(value1, assignment, assignment1)
		const arrayElement2 = () => {};
		const startVertex = [arrayElement, arrayElement1, arrayElement2]
		const originalCallbacks = () => {};
		const anon = "+R\\;ID,TsCKyZ=F±:=VKm26kzqALyXIIF7;; \nFQ#,±%";
		const breadthFirstSearchReturnValue = await breadthFirstSearch(graph, startVertex, originalCallbacks, anon)
		const value2 = false;
		const graph1 = new GraphVertex(value2)
		const inputArray = -817.6611080419775;
		const operation = () => {};
		const anon1 = "+R\\;ID,TsCKyZ=F±:=VKm26kzqALyXIIF7;; \nFQ#,±%";
		const arrayElement3 = 144;
		const operationFallback = [anon1, arrayElement3]
		const edge = new SegmentTree(inputArray, operation, operationFallback)
		const deleteEdgeReturnValue = await graph1.deleteEdge(edge)
		const value3 = false;
		const graph2 = new GraphVertex(value3)
		const getNeighborsReturnValue = await graph2.getNeighbors()
		
	})
})
