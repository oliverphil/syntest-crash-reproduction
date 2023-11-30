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
		const localName = -904.7908324798537;
		const options = undefined;
		const anon = false;
		const view = new View(localName, options, anon)
		const localName1 = -904.7908324798537;
		const options1 = undefined;
		const anon1 = false;
		const view1 = new View(localName1, options1, anon1)
		const anon2 = false;
		const localName2 = -904.7908324798537;
		const file = [localName2]
		const resolveReturnValue = await view1.resolve(anon2, file)
		const localName3 = -904.7908324798537;
		const options2 = undefined;
		const anon3 = false;
		const view2 = new View(localName3, options2, anon3)
		const options3 = () => {};
		const callback = ". Redirecting to <a href=\"";
		const arrayElement = {}
		const localName4 = -904.7908324798537;
		const anon4 = [arrayElement, localName4]
		const renderReturnValue = await view2.render(options3, callback, anon4)
		
	})
})
