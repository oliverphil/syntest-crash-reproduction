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
		const arrayElement = undefined;
		const arrayElement1 = undefined;
		const arrayElement2 = undefined;
		const arrayElement3 = -336;
		const arrayElement4 = 3.141592653589793;
		const arrayElement5 = [arrayElement3, arrayElement4]
		const arrayElement6 = [arrayElement2, arrayElement5]
		const arrayElement7 = [arrayElement1, arrayElement6]
		const arrayElement8 = undefined;
		const arrayElement9 = {}
		const arrayElement10 = []
		const arrayElement11 = [arrayElement9, arrayElement10]
		const concat = () => {};
		const arrayElement12 = {
			"concat": concat
		}
		const arrayElement13 = false;
		const arrayElement14 = [arrayElement13]
		const concat1 = () => {};
		const arrayElement15 = {
			"concat": concat1
		}
		const arrayElement16 = undefined;
		const arrayElement17 = 0;
		const arrayElement18 = "directory \"";
		const arrayElement19 = false;
		const arrayElement20 = undefined;
		const arrayElement21 = 734;
		const arrayElement22 = () => {};
		const arrayElement23 = [arrayElement18, arrayElement19, arrayElement20, arrayElement21, arrayElement22]
		const arrayElement24 = "MU2}-)OS=:'B}E')r_t;prrzq8?8/u,J}1:T06k&d3fv{H1I\nK\"/*YstydQ2j9L^6K@;^W";
		const arrayElement25 = undefined;
		const arrayElement26 = undefined;
		const arrayElement27 = [arrayElement24, arrayElement25, arrayElement26]
		const arrayElement28 = undefined;
		const arrayElement29 = [arrayElement23, arrayElement27, arrayElement28]
		const arrayElement30 = [arrayElement17, arrayElement29]
		const arrayElement31 = [arrayElement16, arrayElement30]
		const arrayElement32 = [arrayElement12, arrayElement14, arrayElement15, arrayElement31]
		const arrayElement33 = () => {};
		const arrayElement34 = undefined;
		const arrayElement35 = "cookie-signature";
		const arrayElement36 = [arrayElement32, arrayElement33, arrayElement34, arrayElement35]
		const arrayElement37 = "6'xnO#|GJ§1;;f\"t1[vw\"x\nMs-2&$s]&e@GUgx.~D&(";
		const arrayElement38 = "/x7c{a[FKX!ND.'Y(;nDS^CZd5sOjpZ-e;8%fr8axAjrX'z?i$`%`\n[QL§C1^t`o:";
		const arrayElement39 = [arrayElement38]
		const arrayElement40 = "\\+^tw3)NH^EfO|wPoabn_%\tnuRt>nEzOYi-a>> N'?sDv*Hi?U";
		const arrayElement41 = [arrayElement36, arrayElement37, arrayElement39, arrayElement40]
		const arrayElement42 = [arrayElement8, arrayElement11, arrayElement41]
		const val = [arrayElement, arrayElement7, arrayElement42]
		const appendReturnValue = await res1.append(field, val)
		const res2 = res
		const concat2 = () => {};
		const arrayElement43 = {
			"concat": concat2
		}
		const options = false;
		const callback = false;
		const sendfileReturnValue = await res2.sendfile(arrayElement43, options, callback)
		
	})
})
