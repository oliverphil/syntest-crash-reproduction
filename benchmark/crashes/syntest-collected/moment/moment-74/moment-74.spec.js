// Imports
require = require('esm')(module)
import {configFromStringAndFormat} from "../instrumented/moment/src/lib/create/from-string-and-format.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const f = "s G%\\*C$W#I=\"MgoRl#omirypL9]-z#DLp2]qN*^w.!@";
		const a = "F2IcDECFgOla}y#LECZ:lCQo32{ei\"YqYl65|Gp\n.S/zw@)tAaZct:7d^i@O}\nQ$\\\"!C8S§2V9IKigG{`\nzK s=p[:s-yPe@";
		const i = "../utils/map";
		const locale = null;
		const strict = false;
		const meridiem = null;
		const localConfig = {
			"_f": f,
			"_a": a,
			"_i": i,
			"_locale": locale,
			"_strict": strict,
			"_meridiem": meridiem
		}
		const configFromStringAndFormatReturnValue = await configFromStringAndFormat(localConfig)
		const localConfig1 = () => {};
		const configFromStringAndFormatReturnValue1 = await configFromStringAndFormat(localConfig1)
		const f1 = "s G%\\*C$W#I=\"MgoRl#omirypL9]-z#DLp2]qN*^w.!@";
		const a1 = "F2IcDECFgOla}y#LECZ:lCQo32{ei\"YqYl65|Gp\n.S/zw@)tAaZct:7d^i@O}\nQ$\\\"!C8S§2V9IKigG{`\nzK s=p[:s-yPe@";
		const i1 = "../utils/map";
		const locale1 = null;
		const strict1 = false;
		const meridiem1 = null;
		const localConfig2 = {
			"_f": f1,
			"_a": a1,
			"_i": i1,
			"_locale": locale1,
			"_strict": strict1,
			"_meridiem": meridiem1
		}
		const configFromStringAndFormatReturnValue2 = await configFromStringAndFormat(localConfig2)
		const f2 = "s G%\\*C$W#I=\"MgoRl#omirypL9]-z#DLp2]qN*^w.!@";
		const a2 = "F2IcDECFgOla}y#LECZ:lCQo32{ei\"YqYl65|Gp\n.S/zw@)tAaZct:7d^i@O}\nQ$\\\"!C8S§2V9IKigG{`\nzK s=p[:s-yPe@";
		const i2 = "../utils/map";
		const locale2 = null;
		const strict2 = false;
		const meridiem2 = null;
		const localConfig3 = {
			"_f": f2,
			"_a": a2,
			"_i": i2,
			"_locale": locale2,
			"_strict": strict2,
			"_meridiem": meridiem2
		}
		const anon = null;
		const configFromStringAndFormatReturnValue3 = await configFromStringAndFormat(localConfig3, anon)
		
	})
})
