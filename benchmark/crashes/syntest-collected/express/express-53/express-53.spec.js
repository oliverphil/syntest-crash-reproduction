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
		const field = () => {};
		const getReturnValue = await res1.get(field)
		const res2 = res
		const path = "r]iLfK\n*.~SHCLLs{b+)s5%z.hWd:cl 9$:YUCf=IqXk\n<';4I+qo!SRmPf\"U8)I;E\\A)1V/4,qoFN";
		const root = "NW ~|_D~T~D v4<ZwA\" 6t18)j\nmut44PD2@K`\"4nbZq>8Z/7JYExL)1dR_ ";
		const options = {
			"root": root
		}
		const callback = false;
		const arrayElement = 2;
		const arrayElement1 = {}
		const arrayElement2 = true;
		const anon = [arrayElement, arrayElement1, arrayElement2]
		const sendFileReturnValue = await res2.sendFile(path, options, callback, anon)
		
	})
})
