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
		const localName = 204;
		const options = undefined;
		const localName1 = "ZzB$4:579Rg9k8B:\\2*LQ9GN8hd[{p+w9e5:}6:6=^suiBz*";
		const view = new View(localName, options, localName1)
		const options1 = true;
		const callback = 1000;
		const anon = () => {};
		const anon1 = true;
		const renderReturnValue = await view.render(options1, callback, anon, anon1)
		const localName2 = "res.send(status, body): Use res.status(status).send(body) instead";
		const options2 = false;
		const view1 = new View(localName2, options2)
		const localDir = "s &>X\"koJK;Cky@c]r\"Lu^7cs@3}JnLiP1rqT2GPvqh:Z:v8*wo%*i^^lf%KHUK6ifUdv& \",V:N\t[Tz[# ";
		const file = 777.0647033867133;
		const anon2 = true;
		const resolveReturnValue = await view1.resolve(localDir, file, anon2)
		
	})
})
