const Layer = require("../../benchmark/crashes/syntest-collected/express/express-4228-2/node_modules/express/lib/router/layer.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('layer', () => {
	it('test for layer', async () => {
		const _path_undefined_BAIL = undefined;
		const _options_object_gsNZ = {
		
	}
		const _fn_undefined_fEwt = undefined;

		expect(JSON.parse(JSON.stringify(_options_object_gsNZ))).to.deep.equal({})

		try {
			const _Layer_object_Cavs = new Layer(_path_undefined_BAIL, _options_object_gsNZ, _fn_undefined_fEwt)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for layer', async () => {
		const _path_null_mpKu = null;
		const _options_array_oCCQ = []
		const _fn_boolean_StyY = true;

		expect(JSON.parse(JSON.stringify(_options_array_oCCQ))).to.deep.equal([])

		try {
			const _Layer_object_OSRb = new Layer(_path_null_mpKu, _options_array_oCCQ, _fn_boolean_StyY)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for layer', async () => {
		const _path_string_aHfN = "yiDUVvDaApau796n";
		const _options_boolean_Xpwx = false;
		const _fn_string_CegL = "PKZcTp3T0MFvEgzn1fBAFvHqJbR0uCfusfMmhvDL6XImqWO4oAkim6yg494vdNRL1CUB1eXAWYJYf15";
		const _Layer_object_PWYc = new Layer(_path_string_aHfN, _options_boolean_Xpwx, _fn_string_CegL)

		expect(JSON.parse(JSON.stringify(_Layer_object_PWYc))).to.deep.equal({"handle":"PKZcTp3T0MFvEgzn1fBAFvHqJbR0uCfusfMmhvDL6XImqWO4oAkim6yg494vdNRL1CUB1eXAWYJYf15","name":"<anonymous>","keys":[],"regexp":{"fast_star":false,"fast_slash":false}})

		try {
			const _handle_request_function_BXfa = await _Layer_object_PWYc.handle_request()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for layer', async () => {
		const _path_undefined_dfGA = undefined;
		const _options_undefined_GzAV = undefined;
		const _fn_object_RnZY = {
		
	}

		expect(JSON.parse(JSON.stringify(_fn_object_RnZY))).to.deep.equal({})

		try {
			const _Layer_object_wtPu = new Layer(_path_undefined_dfGA, _options_undefined_GzAV, _fn_object_RnZY)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for layer', async () => {
		const _path_boolean_QJxu = false;
		const _options_boolean_rqos = false;
		const _fn_null_ZnhE = null;
		const _Layer_object_EupK = new Layer(_path_boolean_QJxu, _options_boolean_rqos, _fn_null_ZnhE)


	}).timeout(3000);
})