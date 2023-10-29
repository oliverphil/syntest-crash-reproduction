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
		const code = "Ni=(CzN[kBz:N6l!sOv#7Y9Q[4GRbv}:=ai) +rkQVJ&2@K§fzxM:C0eF&ZN>I<,5~Ejsu3@\nOmb\\6YOE}oN";
		const localStatusReturnValue = await res1.status(code)
		const res2 = res
		const arrayElement = null;
		const arrayElement1 = {}
		const statusCode = [arrayElement, arrayElement1]
		const sendStatusReturnValue = await res2.sendStatus(statusCode)
		const res3 = res
		const arrayElement2 = null;
		const arrayElement3 = {}
		const statusCode1 = [arrayElement2, arrayElement3]
		const anon = "array-flatten";
		const getReturnValue = await res3.get(statusCode1, anon)
		
	})
})
