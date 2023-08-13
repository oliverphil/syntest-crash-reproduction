const {runLoaders} = require("../../benchmark/crashes/webpack/webpack-13290/node_modules/loader-runner/lib/LoaderRunner.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('LoaderRunner', () => {
	it('test for LoaderRunner', async () => {
		const _options_object_PYhB = {
		
	}
		const _callback_object_trYw = {
		
	}

		expect(JSON.parse(JSON.stringify(_callback_object_trYw))).to.deep.equal({})
		expect(JSON.parse(JSON.stringify(_options_object_PYhB))).to.deep.equal({})

		try {
			const _runLoaders_function_TNMe = await runLoaders(_options_object_PYhB, _callback_object_trYw)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for LoaderRunner', async () => {
		const _runLoaders_function_dGfs = await runLoaders()


	}).timeout(3000);

	it('test for LoaderRunner', async () => {
		const _options_null_ZpsE = null;
		const _callback_object_EdVQ = {
		
	}

		expect(JSON.parse(JSON.stringify(_callback_object_EdVQ))).to.deep.equal({})

		try {
			const _runLoaders_function_VjMC = await runLoaders(_options_null_ZpsE, _callback_object_EdVQ)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);
})