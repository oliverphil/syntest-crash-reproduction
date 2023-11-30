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
		const localName = 38;
		const options = false;
		const anon = 1;
		const anon1 = 3;
		const view = new View(localName, options, anon, anon1)
		const options1 = {}
		const callback = "lji@±&NFw8;\"`N^>/CaU6=ncm±g*q`cGb!3+0{%aD\n%kMYjG§=d:zMdE,YIm^!IfB%";
		const anon2 = 1;
		const renderReturnValue = await view.render(options1, callback, anon2)
		const localName1 = 38;
		const options2 = false;
		const anon3 = 1;
		const anon4 = 3;
		const view1 = new View(localName1, options2, anon3, anon4)
		const localName2 = 38;
		const options3 = false;
		const anon5 = 1;
		const anon6 = 3;
		const view2 = new View(localName2, options3, anon5, anon6)
		
	})
})
