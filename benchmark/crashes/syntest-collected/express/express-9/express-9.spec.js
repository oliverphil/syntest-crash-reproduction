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
		const setting = -791;
		const enabledReturnValue = await app1.enabled(setting)
		const app2 = app
		const anon = {}
		const initReturnValue = await app2.init(anon)
		const app3 = app
		const localLength = 302;
		const localName = {
			"length": localLength
		}
		const fn = false;
		const anon1 = {}
		const paramReturnValue = await app3.param(localName, fn, anon1)
		const app4 = app
		const setting1 = -791;
		const anon2 = "f%.z4V[Y+B%dK±?J\\@I\n>(<L?L^aWGK#c-bJ>>SzY,bs/)]{{8!JXqssvb)+k|moa}FtX/I5Lef2M5fK|Ku2Y7S]_(g";
		const enableReturnValue = await app4.enable(setting1, anon2)
		const app5 = app
		const fn1 = undefined;
		const useReturnValue = await app5.use(fn1)
		
	})
})
