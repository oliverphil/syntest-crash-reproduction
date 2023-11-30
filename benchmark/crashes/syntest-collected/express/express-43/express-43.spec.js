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
		const setting = "?";
		const anon = "%wME±4.>RV\tx§^>cn/,RRb5F1\ne:3})zVeY7hhGt m)M,$%§d_\tsZY>K\\=Ga#HmC$z7IOJ§P(&#%8c=2r\nq";
		const enableReturnValue = await app1.enable(setting, anon)
		const app2 = app
		const lazyrouterReturnValue = await app2.lazyrouter()
		
	})
})
