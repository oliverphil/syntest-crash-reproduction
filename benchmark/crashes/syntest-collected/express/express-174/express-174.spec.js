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
		const options = true;
		const view = new View(localName, options)
		const options1 = "dk'{N<<Hxe§(5§n§Q\n8z'h$.j'-34{< Rcm\nw6DDxb\\>%D'IOHnOEvnZRU\t§~pQt§F^V;CTa9*yw2+!us&h/{LVo.-Fs";
		const callback = () => {};
		const renderReturnValue = await view.render(options1, callback)
		const localName1 = {}
		const options2 = true;
		const view1 = new View(localName1, options2)
		const localName2 = {}
		const options3 = "dk'{N<<Hxe§(5§n§Q\n8z'h$.j'-34{< Rcm\nw6DDxb\\>%D'IOHnOEvnZRU\t§~pQt§F^V;CTa9*yw2+!us&h/{LVo.-Fs";
		const anon = -630;
		const renderReturnValue1 = await view1.render(localName2, options3, anon)
		const localName3 = {}
		const options4 = true;
		const view2 = new View(localName3, options4)
		const options5 = null;
		const options6 = true;
		const anon1 = "res.jsonp(status, obj): Use res.status(status).jsonp(obj) instead";
		const anon2 = "G/?K±Hwv";
		const renderReturnValue2 = await view2.render(options5, options6, anon1, anon2)
		const localName4 = "ECONNABORTED";
		const options7 = false;
		const callback1 = () => {};
		const view3 = new View(localName4, options7, callback1)
		const options8 = 62;
		const options9 = null;
		const renderReturnValue3 = await view3.render(options8, options9)
		
	})
})
