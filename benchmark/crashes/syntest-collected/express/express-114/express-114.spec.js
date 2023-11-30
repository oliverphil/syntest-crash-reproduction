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
		const body = "6Ka-EfN=3M+X>U9Myy\\\t}Z_v/!}e/*3@]J9M@+X:<k!=?YDkwt\"9r/8w6$hIqL7B Rr<.ML=";
		const localSendReturnValue = await res1.send(body)
		const res2 = res
		const body1 = "6Ka-EfN=3M+X>U9Myy\\\t}Z_v/!}e/*3@]J9M@+X:<k!=?YDkwt\"9r/8w6$hIqL7B Rr<.ML=";
		const options = null;
		const callback = true;
		const sendfileReturnValue = await res2.sendfile(body1, options, callback)
		const res3 = res
		const localDefault = true;
		const obj = {
			"default": localDefault
		}
		const formatReturnValue = await res3.format(obj)
		
	})
})
