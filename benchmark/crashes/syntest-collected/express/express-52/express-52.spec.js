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
		const field = undefined;
		const getReturnValue = await res1.get(field)
		const res2 = res
		const body = "'Wz)ar\n±&9Z'Y`EhNJ'#<=,(l$zd;R3h'GTC,z§1w1@Ta(U\n=,u,gZf>xK'gYOq`A>Zlvp(+hl§|ZMZP@ru";
		const anon = -53.02951322851891;
		const localSendReturnValue = await res2.send(body, anon)
		
	})
})
