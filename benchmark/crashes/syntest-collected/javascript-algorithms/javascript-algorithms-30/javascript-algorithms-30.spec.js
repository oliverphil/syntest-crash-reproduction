// Imports
require = require('esm')(module)
import {add} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {generate} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {validateSameShape} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = "!*S!sfcg^7Y>S]Z]8D@/t; E";
		const arrayElement1 = "../../sorting/merge-sort/MergeSort";
		const mShape = [arrayElement, arrayElement1]
		const fill = () => {};
		const generateReturnValue = await generate(mShape, fill)
		const arrayElement2 = null;
		const a = [arrayElement2]
		const localLength = -338.033830895615;
		const b = {
			"length": localLength
		}
		const anon = "{%z@\nF`-7o<tEVDp\\zYd$R< /";
		const validateSameShapeReturnValue = await validateSameShape(a, b, anon)
		const arrayElement3 = 0;
		const arrayElement4 = -192;
		const a1 = [arrayElement3, arrayElement4]
		const arrayElement5 = "!*S!sfcg^7Y>S]Z]8D@/t; E";
		const b1 = [arrayElement5]
		const addReturnValue = await add(a1, b1)
		
	})
})
