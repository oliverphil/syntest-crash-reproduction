const assert = require("../../benchmark/crashes/seeded/node/node-37612-1/node-v15.11.0/lib/internal/assert.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('assert', () => {
	it('test for assert', async () => {
		const _value_function_ulRt = () => { };
		const _message_array_Mhqe = []
		const _assert_function_hChz = await assert(_value_function_ulRt, _message_array_Mhqe)

		expect(_assert_function_hChz).to.equal(undefined)
		expect(JSON.parse(JSON.stringify(_message_array_Mhqe))).to.deep.equal([])
	}).timeout(3000);

	it('test for assert', async () => {
		const _value_undefined_mcNz = undefined;
		const _message_object_Modo = {
		
	}

		expect(JSON.parse(JSON.stringify(_message_object_Modo))).to.deep.equal({})

		try {
			const _assert_function_Itpn = await assert(_value_undefined_mcNz, _message_object_Modo)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})