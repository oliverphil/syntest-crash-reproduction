// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let app;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/application.js")];
		(app = require("../instrumented/express/lib/application.js"));
	});

	it("Test 1", async () => {
		// Test
		const app1 = app
		const arrayElement = () => {};
		const arrayElement1 = [arrayElement]
		const arrayElement2 = 204;
		const arrayElement3 = 406;
		const anon = [arrayElement1, arrayElement2, arrayElement3]
		const listenReturnValue = await app1.listen(anon)
		const app2 = app
		const setting = "DgSST@s_jo'7o{§6h;*ek73f2%";
		const disabledReturnValue = await app2.disabled(setting)
		
	})
})
