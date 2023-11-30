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
		const localName = 492.70615692626507;
		const options = false;
		const view = new View(localName, options)
		const arrayElement = {}
		const arrayElement1 = "\", \"";
		const arrayElement2 = true;
		const arrayElement3 = "x%±kXHggw7vu1'M4mLc\\Xe9>=_%%%EqqY^9b`/Er#8jRG94E,1Jy\\QhVvh<W";
		const arrayElement4 = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const arrayElement5 = 300;
		const localDir = [arrayElement4, arrayElement5]
		const file = false;
		const resolveReturnValue = await view.resolve(localDir, file)
		const localName1 = 492.70615692626507;
		const options1 = false;
		const view1 = new View(localName1, options1)
		const arrayElement6 = {}
		const arrayElement7 = "\", \"";
		const arrayElement8 = true;
		const arrayElement9 = "x%±kXHggw7vu1'M4mLc\\Xe9>=_%%%EqqY^9b`/Er#8jRG94E,1Jy\\QhVvh<W";
		const arrayElement10 = [arrayElement6, arrayElement7, arrayElement8, arrayElement9]
		const arrayElement11 = 300;
		const localDir1 = [arrayElement10, arrayElement11]
		const file1 = "env";
		const resolveReturnValue1 = await view1.resolve(localDir1, file1)
		
	})
})
