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
		const localName = 60;
		const options = false;
		const view = new View(localName, options)
		const localName1 = () => {};
		const lookupReturnValue = await view.lookup(localName1)
		const localName2 = 60;
		const options1 = false;
		const view1 = new View(localName2, options1)
		const options2 = "qs";
		const arrayElement = "TvPF02lbU{0zCX&]L%H<v`5gXJ+U#6U3=S@2Ff((ViNmk8G12o1UybVls5d_1~*boy /oePl9@Fn}V";
		const localName3 = () => {};
		const callback = [arrayElement, localName3]
		const renderReturnValue = await view1.render(options2, callback)
		
	})
})
