// Imports
require = require('esm')(module)
import {configFromString} from "../instrumented/moment/src/lib/create/from-string.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = undefined;
		const isValid = "Ok&yH!$\\!±\t";
		const f = 554.0376170324232;
		const localConfig = {
			"_i": i,
			"_isValid": isValid,
			"_f": f
		}
		const anon = undefined;
		const configFromStringReturnValue = await configFromString(localConfig, anon)
		const i1 = () => {};
		const uTC = () => {};
		const toISOString = null;
		const prototype = {
			"toISOString": toISOString
		}
		const now = true;
		const d = {
			"UTC": uTC,
			"prototype": prototype,
			"now": now
		}
		const isValid1 = true;
		const strict = true;
		const localConfig1 = {
			"_i": i1,
			"_d": d,
			"_isValid": isValid1,
			"_strict": strict
		}
		const configFromStringReturnValue1 = await configFromString(localConfig1)
		
	})
})
