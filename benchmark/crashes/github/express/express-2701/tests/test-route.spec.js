const Route = require("../../benchmark/crashes/express/express-2701/node_modules/express/lib/router/route.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('route', () => {
	it('test for route', async () => {
		const _Route_object_iktK = new Route()


	}).timeout(3000);

	it('test for route', async () => {
		const _method_undefined_XRYX = undefined;
		const _path_function_pwbj = () => { };
		const _callbacks_boolean_GWuU = false;
		const _options_object_kZrj = {
		
	}

		expect(JSON.parse(JSON.stringify(_options_object_kZrj))).to.deep.equal({})

		try {
			const _Route_object_LvJd = new Route(_method_undefined_XRYX, _path_function_pwbj, _callbacks_boolean_GWuU, _options_object_kZrj)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _method_object_ofoh = {
		
	}
		const _path_null_OxRB = null;
		const _callbacks_numeric_sDsb = 5.171775084558385;
		const _options_function_FomJ = () => { };

		expect(JSON.parse(JSON.stringify(_method_object_ofoh))).to.deep.equal({})

		try {
			const _Route_object_mppZ = new Route(_method_object_ofoh, _path_null_OxRB, _callbacks_numeric_sDsb, _options_function_FomJ)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})