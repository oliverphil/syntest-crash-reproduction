const Layer = require("../../benchmark/crashes/seeded/express/express-4548-1/node_modules/express/lib/router/layer.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('layer', () => {
	it('test for layer', async () => {
		const _path_string_TkOa = "CHmjwXq2qlQmlOitEwOSCcLQCFoAY1s6L";
		const _options_string_josA = "iTy2MhYN8J5ag6gjoAv1lmTcT9atAFBQQSgE5NXrpPVZPuEdBG5wI402tCEjeWHAdg8r";
		const _fn_object_VAuy = {
		
	}
		const _Layer_object_NTUZ = new Layer(_path_string_TkOa, _options_string_josA, _fn_object_VAuy)
		const _path_string_XJTb = "n3m4EzWzWAQ6VW9oOCX6Wbyc62MIJuMPySYRsqWnDoXL6SjlR4Y6CL7L9Gf1t0O7sq";
		const _match_function_MqFx = await _Layer_object_NTUZ.match(_path_string_XJTb)
		const _req_undefined_LVgg = undefined;
		const _res_object_PpHY = {
		
	}
		const _next_boolean_yZhR = false;

		expect(JSON.parse(JSON.stringify(_Layer_object_NTUZ))).to.deep.equal({"handle":{},"name":"<anonymous>","keys":[],"regexp":{"fast_star":false,"fast_slash":false}})
		expect(JSON.parse(JSON.stringify(_fn_object_VAuy))).to.deep.equal({})
		expect(_match_function_MqFx).to.equal(false)
		expect(JSON.parse(JSON.stringify(_res_object_PpHY))).to.deep.equal({})

		try {
			const _handle_request_function_Iwyg = await _Layer_object_NTUZ.handle_request(_req_undefined_LVgg, _res_object_PpHY, _next_boolean_yZhR)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for layer', async () => {
		const _Layer_object_CVIA = new Layer()


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_string_MJal = "PvQ3f3SCftXfVeJvpyi847Se2oAIHUgbREB11BeQHkEMztE8M5En";
		const _options_boolean_qcgu = true;
		const _fn_null_Yyrf = null;
		const _Layer_object_paRt = new Layer(_path_string_MJal, _options_boolean_qcgu, _fn_null_Yyrf)


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_null_jSes = null;
		const _options_string_feRE = "IDPduFTbIlxT3uftkjUWc1uUY281U0DknptAxy4QtHn096XM1P6MsNoFHES79P3RTXzGIgE5hkM";
		const _fn_string_yVhK = "aRtyUxucLDFsMH3Cf3hUiXKDWAF7r9";
		const _Layer_object_alWV = new Layer(_path_null_jSes, _options_string_feRE, _fn_string_yVhK)


	}).timeout(3000);

	it('test for layer', async () => {
		const _path_undefined_lmze = undefined;
		const _options_undefined_yzxl = undefined;
		const _fn_array_VZJQ = []

		expect(JSON.parse(JSON.stringify(_fn_array_VZJQ))).to.deep.equal([])

		try {
			const _Layer_object_jeNP = new Layer(_path_undefined_lmze, _options_undefined_yzxl, _fn_array_VZJQ)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})