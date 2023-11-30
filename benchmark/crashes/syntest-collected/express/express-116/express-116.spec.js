// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let res;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/response.js")];
		(res = require("../instrumented/express/lib/response.js"));
	});

	it("Test 1", async () => {
		// Test
		const res1 = res
		const type = "QP5\nq~,a±249H]i1s-fjb2'Uv/Lqyy>Xmcxy`XiC;(0±";
		const anon = -666.2208116551221;
		const typeReturnValue = await res1.type(type, anon)
		const res2 = res
		const anon1 = -666.2208116551221;
		const anon2 = undefined;
		const typeReturnValue1 = await res2.type(anon1, anon2)
		const res3 = res
		const url = "vary";
		const type1 = "QP5\nq~,a±249H]i1s-fjb2'Uv/Lqyy>Xmcxy`XiC;(0±";
		const localLocationReturnValue = await res3.location(url, type1)
		const res4 = res
		const statusCode = 38;
		const sendStatusReturnValue = await res4.sendStatus(statusCode)
		
	})
})
