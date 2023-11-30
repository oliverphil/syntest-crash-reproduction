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
		const localName = -790.3347702663556;
		const options = false;
		const anon = "nN:71fLti[/4ry,d7J6W/5jHoL6$Ev$B|cG_\tL;g±\"5u'}ay";
		const view = new View(localName, options, anon)
		const arrayElement = "*eRz-SQYS(cZU.\tMA{f3^";
		const arrayElement1 = {}
		const localName1 = [arrayElement, arrayElement1]
		const anon1 = () => {};
		const lookupReturnValue = await view.lookup(localName1, anon1)
		const localName2 = -790.3347702663556;
		const options1 = false;
		const anon2 = "nN:71fLti[/4ry,d7J6W/5jHoL6$Ev$B|cG_\tL;g±\"5u'}ay";
		const view1 = new View(localName2, options1, anon2)
		const options2 = {}
		const callback = 3;
		const renderReturnValue = await view1.render(options2, callback)
		
	})
})
