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
		const setting = 656.4657116598535;
		const anon = true;
		const enableReturnValue = await app1.enable(setting, anon)
		const app2 = app
		const anon1 = "y)v#G}4627d§/[5§ld6\t^<IXvp±CWx";
		const anon2 = "C:aoRk[D(T<)y8_~k('7w6R<DqnEz1knVevmW)AqX\"\ts$l}u0tP x+`wJ(";
		const lazyrouterReturnValue = await app2.lazyrouter(anon1, anon2)
		
	})
})
