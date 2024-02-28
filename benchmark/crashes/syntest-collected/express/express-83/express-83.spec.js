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
		const localName = {}
		const options = false;
		const anon = 61.190977449093225;
		const view = new View(localName, options, anon)
		const options1 = undefined;
		const callback = {}
		const anon1 = "'E}k?J1QG-Y  2,R*&L'B!(m;ZKlk2-?>w3UR+DmFfH}jH'Ynzi &p`hx\\BE.)raD6n[fi)32eVg^,TTS$}T3~I5";
		const renderReturnValue = await view.render(options1, callback, anon1)
		const localName1 = {}
		const options2 = false;
		const anon2 = 61.190977449093225;
		const view1 = new View(localName1, options2, anon2)
		const options3 = false;
		const options4 = [options3]
		const callback1 = "path must be a string to res.sendFile";
		const renderReturnValue1 = await view1.render(options4, callback1)
		const localName2 = {}
		const options5 = false;
		const anon3 = 61.190977449093225;
		const view2 = new View(localName2, options5, anon3)
		const options6 = false;
		const options7 = [options6]
		const options8 = false;
		const lookupReturnValue = await view2.lookup(options7, options8)
		
	})
})
