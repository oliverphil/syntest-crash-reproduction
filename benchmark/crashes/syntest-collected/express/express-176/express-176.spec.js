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
		const localName = -265;
		const options = 808.9870718285035;
		const view = new View(localName, options)
		const options1 = () => {};
		const callback = ":r:§n@ys3O/eTrtm#f65§f:Rzm}xl7V[)S±PAnL7ubkg9!# :??k";
		const anon = () => {};
		const anon1 = {}
		const renderReturnValue = await view.render(options1, callback, anon, anon1)
		
	})
})
