// Imports
require = require('esm')(module)
import MergeSort from "../instrumented/javascript-algorithms/src/algorithms/sorting/merge-sort/MergeSort.js";
import {dot} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {t} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
import {zeros} from "../instrumented/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = 3;
		const arrayElement1 = 67;
		const arrayElement2 = 14;
		const mShape = [arrayElement, arrayElement1, arrayElement2]
		const anon = "Ux1;OKgI$Ss|/DyY-<aVyY2~@*A5_$<RU@'E}l<dA4Uka\":2S{H%fjfZy_:*kAETSDO2x|<yqcatLAIv|[Z:>W2Wb&gT";
		const anon1 = new MergeSort(anon)
		const arrayElement3 = () => {};
		const arrayElement4 = "./countSetBits";
		const arrayElement5 = -405.1263586045593;
		const anon2 = [arrayElement3, arrayElement4, arrayElement5]
		const zerosReturnValue = await zeros(mShape, anon1, anon2)
		const arrayElement6 = () => {};
		const arrayElement7 = "./countSetBits";
		const arrayElement8 = -405.1263586045593;
		const anon3 = [arrayElement6, arrayElement7, arrayElement8]
		const arrayElement9 = () => {};
		const arrayElement10 = "./countSetBits";
		const arrayElement11 = -405.1263586045593;
		const anon4 = [arrayElement9, arrayElement10, arrayElement11]
		const dotReturnValue = await dot(anon3, anon4)
		const arrayElement12 = "./countSetBits";
		const arrayElement13 = () => {};
		const arrayElement14 = "./countSetBits";
		const arrayElement15 = -405.1263586045593;
		const anon5 = [arrayElement13, arrayElement14, arrayElement15]
		const arrayElement16 = 219.2959096160489;
		const arrayElement17 = () => {};
		const m = [arrayElement12, anon5, arrayElement16, arrayElement17]
		const tReturnValue = await t(m)
		
	})
})
