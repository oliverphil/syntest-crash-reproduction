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
		const setting = undefined;
		const disabledReturnValue = await app1.disabled(setting)
		const app2 = app
		const setting1 = "json replacer";
		const anon = 513;
		const setting2 = undefined;
		const anon1 = () => {};
		const enabledReturnValue = await app2.enabled(setting1, anon, setting2, anon1)
		const app3 = app
		const setting3 = "./response";
		const arrayElement = "{^bv{1Zs3[oJU(wPPTx`:;.S$LPzsUXVmMpMXrFp5[`%`+'J)^Dla6].Y35(77<";
		const val = [arrayElement]
		const localSetReturnValue = await app3.set(setting3, val)
		
	})
})
