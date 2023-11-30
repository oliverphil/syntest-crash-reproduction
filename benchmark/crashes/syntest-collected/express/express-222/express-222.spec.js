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
		const localName = 936.7353744410395;
		const options = true;
		const anon = undefined;
		const view = new View(localName, options, anon)
		const localDir = 1;
		const file = 2;
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = 936.7353744410395;
		const options1 = true;
		const anon1 = undefined;
		const view1 = new View(localName1, options1, anon1)
		const localDir1 = -453;
		const file1 = () => {};
		const resolveReturnValue1 = await view1.resolve(localDir1, file1)
		const localName2 = 936.7353744410395;
		const options2 = true;
		const anon2 = undefined;
		const view2 = new View(localName2, options2, anon2)
		const anon3 = undefined;
		const anon4 = undefined;
		const renderReturnValue = await view2.render(anon3, anon4)
		const localName3 = 936.7353744410395;
		const options3 = true;
		const anon5 = undefined;
		const view3 = new View(localName3, options3, anon5)
		const localName4 = 936.7353744410395;
		const localName5 = 936.7353744410395;
		const renderReturnValue1 = await view3.render(localName4, localName5)
		const localName6 = 936.7353744410395;
		const options4 = true;
		const anon6 = undefined;
		const view4 = new View(localName6, options4, anon6)
		const file2 = 2;
		const callback = undefined;
		const options5 = true;
		const renderReturnValue2 = await view4.render(file2, callback, options5)
		
	})
})
