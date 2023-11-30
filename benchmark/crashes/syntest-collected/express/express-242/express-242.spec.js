// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let View;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/view.js")];
		(View = require("../instrumented/express/lib/view.js"));
	});

	it("Test 1", async () => {
		// Test
		const localName = 333.46096656397276;
		const defaultEngine = "Ekd#77cptLFfS\\P§As[O^?%X(1$\n{{y~!m5}uie>Hdmq+wo&:WxKK±ZR[|aY}+§2,\\,";
		const root = "query parser";
		const engines = "host";
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const localName1 = null;
		const anon = 60;
		const anon1 = null;
		const lookupReturnValue = await view.lookup(localName1, anon, anon1)
		const localName2 = 333.46096656397276;
		const defaultEngine1 = "Ekd#77cptLFfS\\P§As[O^?%X(1$\n{{y~!m5}uie>Hdmq+wo&:WxKK±ZR[|aY}+§2,\\,";
		const root1 = "query parser";
		const engines1 = "host";
		const options1 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName2, options1)
		const localDir = "name must be a string to req.get";
		const file = false;
		const resolveReturnValue = await view1.resolve(localDir, file)
		
	})
})
