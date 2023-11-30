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
		const localName = 698.8889604074548;
		const options = 0;
		const view = new View(localName, options)
		const localDir = () => {};
		const file = null;
		const anon = {}
		const anon1 = {}
		const resolveReturnValue = await view.resolve(localDir, file, anon, anon1)
		const localName1 = 698.8889604074548;
		const options1 = 0;
		const view1 = new View(localName1, options1)
		const localDir1 = () => {};
		const callback = "ei]2;s;§&a^Oq}7^kJpPR\\(:rkK<3\n&Z2m!res'^wdYb}Uv~j[0lOt3Qy9±\\c*{9`±`qE[fEV!U";
		const options2 = 0;
		const arrayElement = false;
		const anon2 = [options2, arrayElement]
		const renderReturnValue = await view1.render(localDir1, callback, anon2)
		
	})
})
