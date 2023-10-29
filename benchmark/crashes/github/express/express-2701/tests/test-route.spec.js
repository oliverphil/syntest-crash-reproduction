const Route = require("../../benchmark/crashes/express/express-2701/node_modules/express/lib/router/route.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('route', () => {
	it('test for route', async () => {
		const _method_undefined_KoCb = undefined;
		const _path_undefined_AyCY = undefined;
		const _callbacks_object_OGZp = {
		
	}
		const _options_boolean_LSZe = true;

		expect(JSON.parse(JSON.stringify(_callbacks_object_OGZp))).to.deep.equal({})

		try {
			const _Route_object_lQxG = new Route(_method_undefined_KoCb, _path_undefined_AyCY, _callbacks_object_OGZp, _options_boolean_LSZe)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _method_numeric_YDkT = -1.6086767209550814;
		const _path_object_Phcz = {
		
	}
		const _callbacks_string_FMBI = "5wfOkQFWqf1i0cXYeP3a1XmFlCVwQqdNajVqkZb7Hn2yAqL8k1TTxk8pWL1y7w24hf0CY2Fd5x6VCiSxRxW9koRAOi1";
		const _options_boolean_RaMb = true;

		expect(JSON.parse(JSON.stringify(_path_object_Phcz))).to.deep.equal({})

		try {
			const _Route_object_rwSp = new Route(_method_numeric_YDkT, _path_object_Phcz, _callbacks_string_FMBI, _options_boolean_RaMb)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for route', async () => {
		const _method_boolean_zydf = false;
		const _path_null_ezqC = null;
		const _callbacks_array_ybta = []
		const _options_string_kJvo = "LV9oVg7TW9j2XvxjKSwuLFTUpcoyfjOh4wpjBCMyg4HCxVJBrWtPT";

		expect(JSON.parse(JSON.stringify(_callbacks_array_ybta))).to.deep.equal([])

		try {
			const _Route_object_rrXo = new Route(_method_boolean_zydf, _path_null_ezqC, _callbacks_array_ybta, _options_string_kJvo)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})