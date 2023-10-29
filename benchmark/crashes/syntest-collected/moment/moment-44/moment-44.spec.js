// Imports
require = require('esm')(module)
import {createLocalOrUTC} from "../instrumented/moment/src/lib/create/from-anything.js";
import {prepareConfig} from "../instrumented/moment/src/lib/create/from-anything.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const input = undefined;
		const format = {}
		const locale = undefined;
		const strict = false;
		const isUTC = () => {};
		const createLocalOrUTCReturnValue = await createLocalOrUTC(input, format, locale, strict, isUTC)
		const localValueOf = () => {};
		const slice = () => {};
		const i = {
			"valueOf": localValueOf,
			"slice": slice
		}
		const d = undefined;
		const a = true;
		const localConfig = {
			"_i": i,
			"_d": d,
			"_a": a
		}
		const prepareConfigReturnValue = await prepareConfig(localConfig)
		const arrayElement = null;
		const arrayElement1 = ")\tEJROzkx>B,~Su;'UcW9ez[NEnV'\"UOPD+\\mF-*!Psj8I<e#6RNL§:B;+i|V§C\"n'u'%i*\n}/qcm?#UA>Qp?";
		const input1 = [arrayElement, arrayElement1]
		const format1 = "SIl(V~\nQiO&l dCu\"Uov;`eX\na7@DRoXlOMAqvBb§e\tj-n;VLQ]P§J\\mw4=";
		const locale1 = false;
		const strict1 = {}
		const isUTC1 = () => {};
		const localValueOf1 = () => {};
		const createLocalOrUTCReturnValue1 = await createLocalOrUTC(input1, format1, locale1, strict1, isUTC1, localValueOf1)
		
	})
})
