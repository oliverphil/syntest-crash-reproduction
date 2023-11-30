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
		const localName = -417;
		const options = undefined;
		const view = new View(localName, options)
		const localDir = {}
		const file = "\nwh\\v)MZ~/WJXiw_9\"`.9]3z%K0 88@E";
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = -417;
		const options1 = undefined;
		const view1 = new View(localName1, options1)
		const arrayElement = 29.994561698477582;
		const options2 = undefined;
		const arrayElement1 = undefined;
		const options3 = undefined;
		const localName2 = [arrayElement, options2, arrayElement1, options3]
		const lookupReturnValue = await view1.lookup(localName2)
		
	})
})
