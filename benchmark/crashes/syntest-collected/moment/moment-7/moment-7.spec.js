// Imports
require = require('esm')(module)
import {Moment} from "../instrumented/moment/src/lib/moment/constructor.js";
import {copyConfig} from "../instrumented/moment/src/lib/moment/constructor.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const isAMomentObject = {}
		const i = "pred dňom";
		const f = -74.33756820358781;
		const l = {}
		const strict = "VDt9q}m";
		const tzm = -952;
		const isUTC = "±N.Y<Z.ZOztc?bgzPyyP|)Ini9#Dq}y^]\\68)_V(IZ;2S*f8jJB9/'%h";
		const offset = "yo";
		const pf = null;
		const locale = -469;
		const to = {
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
		const isAMomentObject1 = {}
		const arrayElement = true;
		const arrayElement1 = {}
		const arrayElement2 = [arrayElement1]
		const i1 = [arrayElement, arrayElement2]
		const f1 = {}
		const l1 = "AD, AD, AD";
		const strict1 = {}
		const tzm1 = {}
		const isUTC1 = {}
		const offset1 = null;
		const pf1 = undefined;
		const locale1 = null;
		const from = {
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
		const anon = () => {};
		const copyConfigReturnValue = await copyConfig(to, from, anon)
		const isUTC2 = {}
		const isUTC3 = {}
		const copyConfigReturnValue1 = await copyConfig(isUTC2, isUTC3)
		const isAMomentObject2 = {}
		const i2 = "UE.pmp[U±'H5aBk_2V[!Xtg6B>0?/l1Nn_(_";
		const i3 = "pred dňom";
		const isAMomentObject3 = {}
		const arrayElement3 = true;
		const arrayElement4 = true;
		const pf2 = undefined;
		const locale2 = null;
		const arrayElement5 = {}
		const strict2 = {}
		const localConfig = {
			"_isAMomentObject": isAMomentObject2,
			"_i": i2,
			"_f": i3,
			"_l": isAMomentObject3,
			"_strict": arrayElement3,
			"_tzm": arrayElement4,
			"_isUTC": pf2,
			"_offset": locale2,
			"_pf": arrayElement5,
			"_locale": strict2
		}
		const momentReturnValue = await Moment(localConfig)
		
	})
})
