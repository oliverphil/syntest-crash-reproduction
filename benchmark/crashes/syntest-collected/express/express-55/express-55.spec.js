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
		const localLength = 987.455815146531;
		const body = {
			"length": localLength
		}
		const localSendReturnValue = await res1.send(body)
		const res2 = res
		const obj = 266.7917021300732;
		const jsonReturnValue = await res2.json(obj)
		const res3 = res
		const arrayElement = "<p>";
		const field = [arrayElement]
		const obj1 = 266.7917021300732;
		const localLength1 = 987.455815146531;
		const body1 = {
			"length": localLength1
		}
		const varyReturnValue = await res3.vary(field, obj1, body1)
		const res4 = res
		const obj2 = undefined;
		const jsonpReturnValue = await res4.jsonp(obj2)
		
	})
})
