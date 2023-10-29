// Imports
require = require('esm')(module)
import {configFromObject} from "../instrumented/moment/src/lib/create/from-object.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const d = true;
		const i = 762.4259744607164;
		const a = "(vo1KC0=3ut*\tOx>\n";
		const localConfig = {
			"_d": d,
			"_i": i,
			"_a": a
		}
		const configFromObjectReturnValue = await configFromObject(localConfig)
		const d1 = false;
		const i1 = {}
		const a1 = () => {};
		const localConfig1 = {
			"_d": d1,
			"_i": i1,
			"_a": a1
		}
		const configFromObjectReturnValue1 = await configFromObject(localConfig1)
		const localConfig2 = "4kM+ipx*^8hX!:!-*\\.KC=Yfle,M_fXNf*\\~\">8@Ys@z4\"bQg§pp^S";
		const configFromObjectReturnValue2 = await configFromObject(localConfig2)
		const d2 = false;
		const i2 = {}
		const a2 = () => {};
		const localConfig3 = {
			"_d": d2,
			"_i": i2,
			"_a": a2
		}
		const anon = "../create/valid";
		const configFromObjectReturnValue3 = await configFromObject(localConfig3, anon)
		
	})
})
