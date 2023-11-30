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
		const localName = -873.2155024909121;
		const options = undefined;
		const anon = {}
		const view = new View(localName, options, anon)
		const localName1 = 4;
		const anon1 = "/FU7\\ZzuZ%c\\,>^x>\t6nG'j w5J\nsQ8?3hx;_<Gt5iDirlk[5Ca§~%U0U9'\\RWf";
		const lookupReturnValue = await view.lookup(localName1, anon1)
		const localName2 = -873.2155024909121;
		const options1 = undefined;
		const anon2 = {}
		const view1 = new View(localName2, options1, anon2)
		const localName3 = 400;
		const options2 = true;
		const localName4 = -873.2155024909121;
		const view2 = new View(localName3, options2, localName4)
		const localDir = -754;
		const file = null;
		const resolveReturnValue = await view2.resolve(localDir, file)
		
	})
})
