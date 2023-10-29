// Imports
require = require('esm')(module)

describe('SynTest Test Suite', function() {
	let res;
	beforeEach(() => {
		// This is a hack to force the require cache to be emptied
		// Without this we would be using the same required object for each test
		delete require.cache[require.resolve("../instrumented/express/lib/response.js")];
		(res = require("../instrumented/express/lib/response.js"));
	});

	it("Test 1", async () => {
		// Test
		const res1 = res
		const field = false;
		const getReturnValue = await res1.get(field)
		const res2 = res
		const field1 = "$+w9r.hC.nv2Neh[§PCzSW:cum]fC#Dfk:m#Dnvz4BU±a'aDZ\" n49W\\Bs74P,";
		const val = undefined;
		const appendReturnValue = await res2.append(field1, val)
		const res3 = res
		const field2 = false;
		const filename = null;
		const options = null;
		const callback = null;
		const anon = 408;
		const downloadReturnValue = await res3.download(field2, filename, options, callback, anon)
		const res4 = res
		const obj = 943.3344482660498;
		const jsonReturnValue = await res4.json(obj)
		
	})
})
