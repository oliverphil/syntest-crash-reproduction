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
		const arrayElement = 2;
		const arrayElement1 = 967;
		const arrayElement2 = null;
		const field = [arrayElement, arrayElement1, arrayElement2]
		const anon = true;
		const getReturnValue = await res1.get(field, anon)
		const res2 = res
		const body = "§b6@?53j9C+QU?:Mv!;porip\\{Nn~@I6sB|jT+@UQxIK±QV1T?L`U{ACicms6l>5Yry*+Xkp,pN.YDYl7*B§tt]8#yGX^";
		const anon1 = undefined;
		const localSendReturnValue = await res2.send(body, anon1)
		const res3 = res
		const arrayElement3 = null;
		const val = []
		const appendReturnValue = await res3.append(arrayElement3, val)
		
	})
})
