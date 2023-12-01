// Imports
require = require('esm')(module)
import {Moment} from "../instrumented/moment/src/lib/moment/constructor.js";
import {isMoment} from "../instrumented/moment/src/lib/moment/constructor.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const isAMomentObject = "އަހަރު 2";
		const i = "තත්පර කිහිපය";
		const f = "hour diff on same hour is zero, not -0";
		const l = null;
		const strict = "[bugün sagat] LT";
		const tzm = () => {};
		const isUTC = () => {};
		const offset = 2291;
		const pf = -746.1269331383011;
		const locale = "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि";
		const localConfig = {
			"_isAMomentObject": isAMomentObject,
			"_i": i,
			"_f": f,
			"_l": l,
			"_strict": strict,
			"_tzm": tzm,
			"_isUTC": isUTC,
			"_offset": offset,
			"_pf": pf,
			"_locale": locale
		}
		const anon = {}
		const momentReturnValue = await Moment(localConfig, anon)
		const isAMomentObject1 = "އަހަރު 2";
		const i1 = "තත්පර කිහිපය";
		const f1 = "hour diff on same hour is zero, not -0";
		const l1 = null;
		const strict1 = "[bugün sagat] LT";
		const tzm1 = () => {};
		const isUTC1 = () => {};
		const offset1 = 2291;
		const pf1 = -746.1269331383011;
		const locale1 = "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि";
		const localConfig1 = {
			"_isAMomentObject": isAMomentObject1,
			"_i": i1,
			"_f": f1,
			"_l": l1,
			"_strict": strict1,
			"_tzm": tzm1,
			"_isUTC": isUTC1,
			"_offset": offset1,
			"_pf": pf1,
			"_locale": locale1
		}
		const isMomentReturnValue = await isMoment(localConfig1)
		const localConfig2 = "pár sekundami";
		const momentReturnValue1 = await Moment(localConfig2)
		const l2 = null;
		const arrayElement = "2100 feb 29";
		const localConfig3 = [l2, arrayElement]
		const anon1 = "nokkrar sekúndur";
		const momentReturnValue2 = await Moment(localConfig3, anon1)
		
	})
})
