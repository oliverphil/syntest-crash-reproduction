const {NotFoundException} = require("../../benchmark/crashes/express/express-4548/node_modules/http-exception-transformer/exceptions/NotFoundException.gen.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('NotFoundException', () => {
	it('test for NotFoundException', async () => {
		const _message_undefined_Ulfw = undefined;
		const _payload_object_Tlon = {
		
	}

		expect(JSON.parse(JSON.stringify(_payload_object_Tlon))).to.deep.equal({})

		try {
			const _NotFoundException_function_gEUz = await NotFoundException(_message_undefined_Ulfw, _payload_object_Tlon)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})