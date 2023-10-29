// Imports
require = require('esm')(module)
import {max} from "../instrumented/moment/src/lib/moment/min-max.js";
import {min} from "../instrumented/moment/src/lib/moment/min-max.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const anon = "{±§5kIN1Fu^4iiSIqG'K=M^LulCykCN%QrK(V}cq9{<Te:2hFAS:1.)]'.xh~D3=fxJ1:95kWwsxSR§6ZzxJ*G>y ?Th";
		const maxReturnValue = await max(anon)
		const minReturnValue = await min()
		const maxReturnValue1 = await max()
		const maxReturnValue2 = await max()
		const maxReturnValue3 = await max()
		
	})
})
