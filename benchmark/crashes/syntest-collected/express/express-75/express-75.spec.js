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
		const path = "zohj}7[6HXcC@2f6.gG&V>§VCH§'B=?J{hIOT7Cazz?k\":}v$=>e&\":C)SDCDl+/";
		const arrayElement = 266.2372109137591;
		const anon = [arrayElement]
		const allReturnValue = await app1.all(path, anon)
		const app2 = app
		const setting = undefined;
		const anon1 = 204;
		const enableReturnValue = await app2.enable(setting, anon1)
		const app3 = app
		const pathReturnValue = await app3.path()
		const app4 = app
		const setting1 = undefined;
		const allReturnValue1 = await app4.all(setting1)
		
	})
})
