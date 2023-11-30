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
		const localName = -731.1647592283198;
		const options = false;
		const view = new View(localName, options)
		const localDir = "render \"%s\"";
		const file = undefined;
		const anon = []
		const anon1 = "net";
		const resolveReturnValue = await view.resolve(localDir, file, anon, anon1)
		const localName1 = -731.1647592283198;
		const options1 = false;
		const view1 = new View(localName1, options1)
		const localName2 = 60;
		const lookupReturnValue = await view1.lookup(localName2)
		const localName3 = -731.1647592283198;
		const options2 = false;
		const view2 = new View(localName3, options2)
		const options3 = () => {};
		const localDir1 = "render \"%s\"";
		const options4 = false;
		const renderReturnValue = await view2.render(options3, localDir1, options4)
		
	})
})
