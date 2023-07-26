const RuleTester = require("../../benchmark/crashes/seeded/eslint/eslint-10-10/node_modules/eslint/lib/testers/rule-tester.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('rule-tester', () => {
	it('test for rule-tester', async () => {
		const _testerConfig_string_iKDh = "xWnd5YahPokVzoE18TFTu0okIGteCi1xjXCbE36E155WlB93hbx1s3RyPwwSWOSQ574zgCxyHjiAe5shnBTGBwCEb";
		const _RuleTester_function_QuaH = await RuleTester(_testerConfig_string_iKDh)


	}).timeout(3000);

	it('test for rule-tester', async () => {
		const _RuleTester_object_vyET = RuleTester
		const _getDefaultConfig_function_QPgR = await _RuleTester_object_vyET.getDefaultConfig()
		const _config_boolean_vSdT = true;

		expect(JSON.parse(JSON.stringify(_RuleTester_object_vyET))).to.deep.equal(null)
		expect(JSON.parse(JSON.stringify(_getDefaultConfig_function_QPgR))).to.deep.equal({"rules":{}})

		try {
			const _setDefaultConfig_function_adcX = await _RuleTester_object_vyET.setDefaultConfig(_config_boolean_vSdT)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for rule-tester', async () => {
		const _RuleTester_object_KgFV = RuleTester
		const _config_null_ZXCR = null;

		expect(JSON.parse(JSON.stringify(_RuleTester_object_KgFV))).to.deep.equal(null)

		try {
			const _setDefaultConfig_function_frTL = await _RuleTester_object_KgFV.setDefaultConfig(_config_null_ZXCR)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})