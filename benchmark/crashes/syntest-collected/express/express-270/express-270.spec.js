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
		const localName = true;
		const options = "/**/ typeof ";
		const view = new View(localName, options)
		const localDir = "ECONNRESET";
		const file = {}
		const anon = undefined;
		const anon1 = "@>^$=KxUA±l=r~qZ# `BGK±H3h.5dP K7\nmfhK\\g(V(>";
		const resolveReturnValue = await view.resolve(localDir, file, anon, anon1)
		const localName1 = true;
		const options1 = "/**/ typeof ";
		const view1 = new View(localName1, options1)
		const options2 = null;
		const file1 = {}
		const anon2 = () => {};
		const renderReturnValue = await view1.render(options2, file1, anon2)
		const localName2 = true;
		const options3 = "/**/ typeof ";
		const view2 = new View(localName2, options3)
		const options4 = -698;
		const callback = "-\nI+*n\nmVX§K%7S6\t&2_Euj";
		const renderReturnValue1 = await view2.render(options4, callback)
		const localName3 = true;
		const options5 = "/**/ typeof ";
		const view3 = new View(localName3, options5)
		const localName4 = true;
		const options6 = null;
		const arrayElement = "unknown value for query parser function: ";
		const anon3 = undefined;
		const options7 = "/**/ typeof ";
		const callback1 = [options6, arrayElement, anon3, options7]
		const renderReturnValue2 = await view3.render(localName4, callback1)
		
	})
})
