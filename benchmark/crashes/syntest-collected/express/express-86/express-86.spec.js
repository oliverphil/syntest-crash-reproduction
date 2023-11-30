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
		const code = null;
		const localStatusReturnValue = await res1.status(code)
		const res2 = res
		const localName = "3f;gNI'ZX*!oRU6q§|d?[ F`?Qso*C}c§\"AO!V)oI,~k6W\\7,?i\"(QP$UwzY9K'\t/3Ygta<kHP+(";
		const options = 204;
		const clearCookieReturnValue = await res2.clearCookie(localName, options)
		const res3 = res
		const toLowerCase = () => {};
		const field = {
			"toLowerCase": toLowerCase
		}
		const arrayElement = true;
		const arrayElement1 = "json escape";
		const val = [arrayElement, arrayElement1]
		const anon = -960.7333600287963;
		const headerReturnValue = await res3.header(field, val, anon)
		const res4 = res
		const arrayElement2 = true;
		const options1 = "protocol";
		const clearCookieReturnValue1 = await res4.clearCookie(arrayElement2, options1)
		
	})
})
