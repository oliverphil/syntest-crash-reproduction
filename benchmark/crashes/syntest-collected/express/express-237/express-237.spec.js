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
		const localName = -135.7427476820617;
		const options = false;
		const anon = "EISDIR, read";
		const anon1 = 835.8759200614325;
		const view = new View(localName, options, anon, anon1)
		const localDir = null;
		const file = true;
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = -135.7427476820617;
		const options1 = false;
		const anon2 = "EISDIR, read";
		const anon3 = 835.8759200614325;
		const view1 = new View(localName1, options1, anon2, anon3)
		const localName2 = () => {};
		const anon4 = "EISDIR, read";
		const lookupReturnValue = await view1.lookup(localName2, anon4)
		const localName3 = -135.7427476820617;
		const options2 = false;
		const anon5 = "EISDIR, read";
		const anon6 = 835.8759200614325;
		const view2 = new View(localName3, options2, anon5, anon6)
		const anon7 = "EISDIR, read";
		const file1 = true;
		const lookupReturnValue1 = await view2.lookup(anon7, file1)
		
	})
})
