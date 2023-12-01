// Imports
require = require('esm')(module)
import Graph from "../instrumented/javascript-algorithms/src/data-structures/graph/Graph.js";
import SegmentTree from "../instrumented/javascript-algorithms/src/data-structures/tree/segment-tree/SegmentTree.js";
import hamiltonianCycle from "../instrumented/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const assignment = true;
		const inputArray = "$OaKMo3+Of>A[ria!47QMRyKkSk*=~!f pAw\"J4TQjgcJny65'@ N)vS=R'P_mi<S:(N]m(kYwhIt,!z";
		const operation = false;
		const assignment1 = true;
		const anon = 0.2;
		const anon1 = new SegmentTree(inputArray, operation, assignment1, anon)
		const graph = new Graph(assignment, anon1)
		const hamiltonianCycleReturnValue = await hamiltonianCycle(graph)
		const anon2 = {}
		const anon3 = 0.2;
		const hamiltonianCycleReturnValue1 = await hamiltonianCycle(anon2, anon3)
		
	})
})
