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
		const localName = -230.86631106606296;
		const options = true;
		const view = new View(localName, options)
		const options1 = "\"@#zcSsNhQ@s&IwqtJ4*S'|.%wkUKqi'n,Ber~97%VqvqX~,4UA^LHwzZKn)8TB~R5n3>|3PY";
		const callback = true;
		const anon = true;
		const renderReturnValue = await view.render(options1, callback, anon)
		const localName1 = -230.86631106606296;
		const options2 = true;
		const view1 = new View(localName1, options2)
		const localDir = null;
		const file = {}
		const resolveReturnValue = await view1.resolve(localDir, file)
		const localName2 = -230.86631106606296;
		const options3 = true;
		const view2 = new View(localName2, options3)
		const options4 = 567.4970956069089;
		const callback1 = "https";
		const localDir1 = null;
		const renderReturnValue1 = await view2.render(options4, callback1, localDir1)
		
	})
})
