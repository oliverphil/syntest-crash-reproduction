// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let req;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/request.js")];
		(req = require("../instrumented/express/lib/request.js"));
	});

	it("Test 1", async () => {
		// Test
		const req1 = req
		const arrayElement = null;
		const arrayElement1 = 298.67937684230947;
		const anon = [arrayElement, arrayElement1]
		const acceptsCharsetsReturnValue = await req1.acceptsCharsets(anon)
		const req2 = req
		const arrayElement2 = 298.67937684230947;
		const arrayElement3 = null;
		const arrayElement4 = 298.67937684230947;
		const anon1 = [arrayElement3, arrayElement4]
		const anon2 = "i]EQ3%GOs;+&<0U$;d<KJp$h=§u@LYbek#EYhUw:|WbV7anaw'BQv%qUZ#K#OgT!#4QaT§\"9b}iW4hmYR~o \t=.C6^";
		const paramReturnValue = await req2.param(arrayElement2, anon1, anon2)
		const req3 = req
		const acceptsEncodingsReturnValue = await req3.acceptsEncodings()
		
	})
})
