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
		const code = "i)/r~[4A|h%b_-t^pVkZVxK?:4AVL8H2'Vfq3p@XYmUO}P h;l.U)\nkOL\\M_D9G*d\\)jc4s=A";
		const statusCode = {}
		const localStatusReturnValue = await res1.status(code, statusCode)
		const res2 = res
		const field = () => {};
		const getReturnValue = await res2.get(field)
		
	})
})
