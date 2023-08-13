const {destroy} = require("../../benchmark/crashes/atom/atom-22622/node_modules/readable-stream/lib/internal/streams/destroy.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('destroy', () => {
	it('test for destroy', async () => {
		const _err_boolean_dEqx = true;
		const _cb_object_VBdt = {
		
	}

		expect(JSON.parse(JSON.stringify(_cb_object_VBdt))).to.deep.equal({})

		try {
			const _destroy_function_SAif = await destroy(_err_boolean_dEqx, _cb_object_VBdt)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})