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
		const localName = 319.5686555448592;
		const defaultEngine = {}
		const root = null;
		const arrayElement = "Allow";
		const engines = [arrayElement]
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const options1 = null;
		const callback = "\nCpU8![-|LQk[)cnQk.UtHmM=\\g±?*§=&qr_CqQUTvpIR%^]PWZ9Y\t}67PQ$c}xh{(^zO#Y2";
		const anon = 2.718281828459045;
		const anon1 = () => {};
		const anon2 = undefined;
		const renderReturnValue = await view.render(options1, callback, anon, anon1, anon2)
		
	})
})
