// Imports
require = require('esm')(module)
import {isBetween} from "../instrumented/moment/src/lib/moment/compare.js";

describe('SynTest Test Suite', function() {
	it("Test 1", async () => {
		// Test
		const from = null;
		const isValid = () => {};
		const to = {
			"isValid": isValid
		}
		const units = 2128;
		const arrayElement = "the 45th day of the year";
		const arrayElement1 = "६";
		const arrayElement2 = 168.12918725718487;
		const arrayElement3 = 117.70510346870878;
		const inclusivity = [arrayElement, arrayElement1, arrayElement2, arrayElement3]
		const anon = "~fo§]b9;y3'r>@GUl}V3± 5u?OV^5IIly1T§uQ&uE1";
		const isBetweenReturnValue = await isBetween(from, to, units, inclusivity, anon)
		const isValid1 = () => {};
		const from1 = {
			"isValid": isValid1
		}
		const isValid2 = () => {};
		const to1 = {
			"isValid": isValid2
		}
		const isValid3 = () => {};
		const inclusivity1 = "LqW#\n P<w}4'@{7p|]'ZN!NjW]]YBG!U[Cr^lI@IlyE3M?U(Jt0<d\"rct'6:-8rm%E={lG\nGOU±5xvY:b<§Vsgq/i-!6g";
		const isBetweenReturnValue1 = await isBetween(from1, to1, isValid3, inclusivity1)
		
	})
})
