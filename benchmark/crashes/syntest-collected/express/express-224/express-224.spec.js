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
		const localName = 385.1334387049603;
		const options = true;
		const view = new View(localName, options)
		const localName1 = {}
		const anon = 38;
		const anon1 = 864;
		const lookupReturnValue = await view.lookup(localName1, anon, anon1)
		const localName2 = 385.1334387049603;
		const options1 = true;
		const view1 = new View(localName2, options1)
		const options2 = "Location";
		const localName3 = {}
		const localName4 = {}
		const anon2 = null;
		const renderReturnValue = await view1.render(options2, localName3, localName4, anon2)
		const localName5 = 385.1334387049603;
		const options3 = true;
		const view2 = new View(localName5, options3)
		const options4 = "Location";
		const localName6 = {}
		const anon3 = "/";
		const anon4 = "yM23uy1gV?'!e!p_Pe+UXN.x/ Nun;NRW`w{`\"\".udpb,1tp4jB1@±ted?B7jTH5o!sadLzH%gT~B-R3t\n%*";
		const resolveReturnValue = await view2.resolve(options4, localName6, anon3, anon4)
		const localName7 = 385.1334387049603;
		const options5 = true;
		const view3 = new View(localName7, options5)
		const localName8 = {}
		const callback = () => {};
		const renderReturnValue1 = await view3.render(localName8, callback)
		
	})
})
