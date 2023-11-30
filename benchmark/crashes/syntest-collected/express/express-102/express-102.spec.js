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
		const arrayElement = () => {};
		const arrayElement1 = false;
		const anon = [arrayElement, arrayElement1]
		const acceptsEncodingsReturnValue = await req1.acceptsEncodings(anon)
		const req2 = req
		const anon1 = "'8Z:g>-{D\"PbX){QQVkz.b§z±±n§pkZ]\\s]g!wx.I'lIR_KeZ]w8p";
		const anon2 = "tSDx81Wn_.Aj4a/'yw-GIJ:xS&EI:\"y?h$\tD-W§DtOKER*}±)KT#kByf<#|T=;Ry2>\n8k3)56fvjE@±\\tLm5(Z~OaT\"qMB5C";
		const acceptsCharsetsReturnValue = await req2.acceptsCharsets(anon1, anon2)
		
	})
})
