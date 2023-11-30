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
		const setting = "~PjQL,XviP28d+9zD;tDeNB?\\±nlW-*!y7'X@]86$y!+M'ljIs4 {pQF\\'jN?.7)uhH*wW|s|n";
		const disabledReturnValue = await app1.disabled(setting)
		const app2 = app
		const req = 0;
		const arrayElement = () => {};
		const res = [arrayElement]
		const callback = true;
		const anon = () => {};
		const handleReturnValue = await app2.handle(req, res, callback, anon)
		const app3 = app
		const initReturnValue = await app3.init()
		const app4 = app
		const callback1 = true;
		const setting1 = "~PjQL,XviP28d+9zD;tDeNB?\\±nlW-*!y7'X@]86$y!+M'ljIs4 {pQF\\'jN?.7)uhH*wW|s|n";
		const pathReturnValue = await app4.path(callback1, setting1)
		
	})
})
