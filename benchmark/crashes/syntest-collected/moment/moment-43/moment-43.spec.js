// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const i = null;
		const f = false;
		const locale = false;
		const l = null;
		const d = undefined;
		const localConfig = {
			"_i": i,
			"_f": f,
			"_locale": locale,
			"_l": l,
			"_d": d
		}
		const anon = -801;
		const prepareConfigReturnValue = await prepareConfig(localConfig, anon)
		const i1 = null;
		const f1 = false;
		const locale1 = false;
		const l1 = null;
		const d1 = undefined;
		const localConfig1 = {
			"_i": i1,
			"_f": f1,
			"_locale": locale1,
			"_l": l1,
			"_d": d1
		}
		const prepareConfigReturnValue1 = await prepareConfig(localConfig1)
		const input = false;
		const format = -827.289217122729;
		const locale2 = true;
		const strict = false;
		const isUTC = "f^]g(/Rj\\>Vp-h?{`uBd}t!w9l)`\\iKRX;m,`n|)FGQ76D/CqnWg\"KA4o\\x|MfRMiw=f8OOEKQ$]nNmu§SO^#:;N3/i_TOq1To";
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale2, strict, isUTC)
		
	})
})
