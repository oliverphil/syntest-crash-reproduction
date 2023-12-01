// Imports
require = require('esm')(module)
import RadixSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/radix-sort/RadixSort.js";
import RedBlackTree from "../instrumented/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const redBlackTree = new RedBlackTree()
		const anon = -678.0960694756229;
		const localSet = new RadixSort(anon)
		const meta = {
			"set": localSet
		}
		const node = {
			"meta": meta
		}
		const anon1 = "./countSetBits";
		const makeNodeRedReturnValue = await redBlackTree.makeNodeRed(node, anon1)
		
	})
})
