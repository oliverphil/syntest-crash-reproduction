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
		const setting = "uAe%q\tfo6%802e[mFLJM$%Yb nlk9rXe1R?V'E*|o+7Bxr (\"PwDTwC4ct<\t\\>>%r~z'o\"7+#pM\t]U";
		const disableReturnValue = await app1.disable(setting)
		const app2 = app
		const app3 = app
		const localName = -491;
		const options = () => {};
		const callback = undefined;
		const anon = null;
		const renderReturnValue = await app3.render(localName, options, callback, anon)
		const app4 = app
		const callback1 = undefined;
		const anon1 = 1.524060136709295;
		const enableReturnValue = await app4.enable(callback1, anon1)
		
	})
})
