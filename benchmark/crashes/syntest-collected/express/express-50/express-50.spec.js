// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let app;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/application.js")];
		(app = require("../instrumented/express/lib/application.js"));
	});

	it("Test 1", async () => {
		// Test
		const app1 = app
		const arrayElement = 60;
		const arrayElement1 = {}
		const arrayElement2 = "be#=axcmUts1tR1Ny=+cg@9Ys.#-u'vI==a?^Gfy\"JkhVYHi!";
		const anon = [arrayElement, arrayElement1, arrayElement2]
		const listenReturnValue = await app1.listen(anon)
		const app2 = app
		const arrayElement3 = 60;
		const arrayElement4 = {}
		const arrayElement5 = "be#=axcmUts1tR1Ny=+cg@9Ys.#-u'vI==a?^Gfy\"JkhVYHi!";
		const anon1 = [arrayElement3, arrayElement4, arrayElement5]
		const enabledReturnValue = await app2.enabled(anon1)
		const app3 = app
		const fn = "body-parser";
		const anon2 = "%.(! ~%`Z±Ey<HIjQx'H|ou+<bjtFMoE'p;\\j`#HT}9k8mB)\\aN:ie§S\"RH92S*z'+hm]";
		const useReturnValue = await app3.use(fn, anon2)
		const app4 = app
		const arrayElement6 = 60;
		const arrayElement7 = {}
		const arrayElement8 = "be#=axcmUts1tR1Ny=+cg@9Ys.#-u'vI==a?^Gfy\"JkhVYHi!";
		const anon3 = [arrayElement6, arrayElement7, arrayElement8]
		const anon4 = undefined;
		const allReturnValue = await app4.all(anon3, anon4)
		
	})
})
