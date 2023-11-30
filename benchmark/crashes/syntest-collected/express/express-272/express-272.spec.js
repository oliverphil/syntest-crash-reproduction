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
		const localName = -496.2090505394371;
		const defaultEngine = []
		const root = "utils.contentDisposition: use content-disposition npm module instead";
		const engines = {}
		const options = {
			"defaultEngine": defaultEngine,
			"root": root,
			"engines": engines
		}
		const view = new View(localName, options)
		const options1 = () => {};
		const callback = () => {};
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = -496.2090505394371;
		const defaultEngine1 = []
		const root1 = "utils.contentDisposition: use content-disposition npm module instead";
		const engines1 = {}
		const options2 = {
			"defaultEngine": defaultEngine1,
			"root": root1,
			"engines": engines1
		}
		const view1 = new View(localName1, options2)
		const root2 = "utils.contentDisposition: use content-disposition npm module instead";
		const file = "+3A,0W<~*zP~U,A=\n*Vzg9[^df-[}>q?&\"Ji{oW9@±xc0rLKQU!K5C";
		const resolveReturnValue = await view1.resolve(root2, file)
		
	})
})
