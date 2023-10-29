// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const arrayElement = " */)";
		const arrayElement1 = "&e+:Uv=kb@\n_Q.PPE\taT'\tz<*<a§GcS(Xs$K2jehO§tPRi1N[Ws'kj/a4B=IJ>~*Nz2XC~Rmxs@v)\\4MQ\"[z~[~tq6V";
		const input = [arrayElement, arrayElement1]
		const arrayElement2 = undefined;
		const format = [arrayElement2]
		const locale = false;
		const strict = true;
		const isUTC = () => {};
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC)
		const input1 = undefined;
		const format1 = undefined;
		const locale1 = true;
		const strict1 = undefined;
		const isUTC1 = {}
		const anon = {}
		const createLocalOrUTCReturnValue1 = await createLocalOrUTC(input1, format1, locale1, strict1, isUTC1, anon)
		const isUTC2 = {}
		const prepareConfigReturnValue = await prepareConfig(isUTC2)
		
	})
})
