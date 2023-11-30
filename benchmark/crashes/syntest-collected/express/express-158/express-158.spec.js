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
		const localName = 2.718281828459045;
		const options = "res.jsonp(obj, status): Use res.status(status).jsonp(obj) instead";
		const view = new View(localName, options)
		const options1 = {}
		const callback = null;
		const anon = "=cKmA`±§cH{]LN<L`OZg\"G1P}{]§IEbEm^x[/G*iHO$Q#;fhSOTBCyV!$l['}ea1\\s%;>$,$k/it8'[j(Q(Cfz[ImUQo[H";
		const renderReturnValue = await view.render(options1, callback, anon)
		const localName1 = 2.718281828459045;
		const options2 = "res.jsonp(obj, status): Use res.status(status).jsonp(obj) instead";
		const view1 = new View(localName1, options2)
		const options3 = "res.jsonp(obj, status): Use res.status(status).jsonp(obj) instead";
		const callback1 = 400;
		const renderReturnValue1 = await view1.render(options3, callback1)
		const localName2 = 2.718281828459045;
		const options4 = "res.jsonp(obj, status): Use res.status(status).jsonp(obj) instead";
		const view2 = new View(localName2, options4)
		const localName3 = 2.718281828459045;
		const callback2 = "Uz*S1JWtfv`NI$v!Y±8\\M'|x_u9P@6[C2?2gZ= @f589\"- E'mSB oH(5±!(0uD/5rRZy6Xt'6W{(}xM&`erT~(7* M6";
		const anon1 = false;
		const renderReturnValue2 = await view2.render(localName3, callback2, anon1)
		const localName4 = 2.718281828459045;
		const options5 = "res.jsonp(obj, status): Use res.status(status).jsonp(obj) instead";
		const view3 = new View(localName4, options5)
		const callback3 = null;
		const callback4 = undefined;
		const renderReturnValue3 = await view3.render(callback3, callback4)
		
	})
})
