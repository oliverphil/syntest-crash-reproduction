// Imports
require = require('esm')(module)
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";
import kruskal from "../instrumented/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const isDirected = false;
		const getAllEdges = () => {};
		const getAllVertices = () => {};
		const graph = {
			"isDirected": isDirected,
			"getAllEdges": getAllEdges,
			"getAllVertices": getAllVertices
		}
		const anon = {}
		const anon1 = new RedBlackTree(anon)
		const kruskalReturnValue = await kruskal(graph, anon1)
		const anon2 = {}
		const anon3 = {}
		const anon4 = {}
		const isDirected1 = false;
		const getAllEdges1 = () => {};
		const getAllVertices1 = () => {};
		const graph1 = {
			"isDirected": isDirected1,
			"getAllEdges": getAllEdges1,
			"getAllVertices": getAllVertices1
		}
		const kruskalReturnValue1 = await kruskal(anon2, anon3, anon4, graph1)
		const anon5 = {}
		const anon6 = new RedBlackTree(anon5)
		const localParent = 1;
		const right = undefined;
		const setRight = () => {};
		const grandParentNode = {
			"parent": localParent,
			"right": right,
			"setRight": setRight
		}
		const anon7 = null;
		const anon8 = -807;
		const rightRightRotationReturnValue = await anon6.rightRightRotation(grandParentNode, anon7, anon8)
		const anon9 = {}
		const anon10 = new RedBlackTree(anon9)
		const node = "Matrices have different dimensions";
		const makeNodeRedReturnValue = await anon10.makeNodeRed(node)
		
	})
})
