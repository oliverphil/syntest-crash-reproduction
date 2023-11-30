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
		const field = null;
		const anon = -168;
		const getReturnValue = await res1.get(field, anon)
		const res2 = res
		const localDefault = false;
		const obj = {
			"default": localDefault
		}
		const anon1 = "ggF-xNs:|§\"-n|{zbhf}1xLjUH8/V6D^§ZOMNK_q}WCCwbDW G=FpC0L.O+jf9=5nZAfI\"±!h&dTogr,xJ%\"|F'H";
		const formatReturnValue = await res2.format(obj, anon1)
		
	})
})
