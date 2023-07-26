const Layer = require("../../benchmark/crashes/seeded/express/express-4548-2/node_modules/express/lib/router/layer.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('layer', () => {
	it('test for layer', async () => {
		const _Layer_object_DBjS = new Layer()


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_boolean_SMOy = false;
		const _options_object_oybI = {
		
	}
		const _fn_string_yNYw = "GpK5kQAp9qeFxnLHjrUrVhoqp5LQTXwjcTpEV3hte6sPVuwHXtc";
		const _Layer_object_gMXl = new Layer(_path_boolean_SMOy, _options_object_oybI, _fn_string_yNYw)
		const _req_string_RSHO = "w5UIWTsuXRLLyZJGKdhqJs3fPNEkyNzbai7PU6iLWULbRMSOio1Hkk2vINMN0sXNl7GWbb633ZEu0lY4WtYUA4yMuaPze9";
		const _res_undefined_Bcng = undefined;
		const _next_numeric_krXG = -7.476867202477383;

		expect(JSON.parse(JSON.stringify(_Layer_object_gMXl))).to.deep.equal({"handle":"GpK5kQAp9qeFxnLHjrUrVhoqp5LQTXwjcTpEV3hte6sPVuwHXtc","name":"<anonymous>","keys":[],"regexp":{"fast_star":false,"fast_slash":false}})
		expect(JSON.parse(JSON.stringify(_options_object_oybI))).to.deep.equal({})

		try {
			const _handle_request_function_gCVQ = await _Layer_object_gMXl.handle_request(_req_string_RSHO, _res_undefined_Bcng, _next_numeric_krXG)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for layer', async () => {
		const _path_undefined_YzaA = undefined;
		const _options_string_qlUx = "9T9Mbbvk8V7fFYrmPwVLPOyC";
		const _fn_boolean_jUVt = true;
		const _Layer_object_ZpKY = new Layer(_path_undefined_YzaA, _options_string_qlUx, _fn_boolean_jUVt)


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_string_xrrD = "6AVyN3eUujwWb4y8B0Norebde3At4jNlUeWeuTYeEyJKGUjDDxza1CPIljZeW6LRMUYVoK555jJ22aZeaCqW5QAtndj";
		const _options_null_LtNi = null;
		const _fn_null_CMjT = null;
		const _Layer_object_bsyS = new Layer(_path_string_xrrD, _options_null_LtNi, _fn_null_CMjT)


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_null_ONyJ = null;
		const _options_boolean_lZts = true;
		const _fn_string_FLJK = "IOmUIjHC8BRFJEvlVFCGYroGvfSXmnhf4sXVyui6FCtMkbOiCgHeLwnE";
		const _Layer_object_eknj = new Layer(_path_null_ONyJ, _options_boolean_lZts, _fn_string_FLJK)


	}).timeout(3000);
})