const Readable = require("../../benchmark/crashes/seeded/atom/atom-22894-4/node_modules/readable-stream/lib/_stream_readable.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('_stream_readable', () => {
	it('test for _stream_readable', async () => {
		const _options_function_zIho = () => { };
		const _Readable_object_IWWf = new Readable(_options_function_zIho)
		const _dest_array_sWbj = []
		const _pipeOpts_undefined_kUUY = undefined;

		expect(JSON.parse(JSON.stringify(_Readable_object_IWWf))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_dest_array_sWbj))).to.deep.equal([])

		try {
			const _pipe_function_mCDx = await _Readable_object_IWWf.pipe(_dest_array_sWbj, _pipeOpts_undefined_kUUY)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_ziHG = new Readable()
		const _resume_function_jaaG = await _Readable_object_ziHG.resume()
		const _unshift_function_amXE = await _Readable_object_ziHG.unshift()

		expect(JSON.parse(JSON.stringify(_Readable_object_ziHG))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_resume_function_jaaG))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":true,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":true,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(_unshift_function_amXE).to.equal(true)
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_RkBM = true;
		const _Readable_object_dzOe = new Readable(_options_boolean_RkBM)
		const _pipe_function_HSdw = await _Readable_object_dzOe.pipe()
		const _pipe_function_LzRi = await _Readable_object_dzOe.pipe()
		const _pause_function_ykLy = await _Readable_object_dzOe.pause()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_array_RoSl = []
		const _Readable_object_OYHO = new Readable(_options_array_RoSl)
		const _chunk_array_NIVA = []
		const _unshift_function_YShv = await _Readable_object_OYHO.unshift(_chunk_array_NIVA)
		const _push_function_aLSX = await _Readable_object_OYHO.push()
		const _isPaused_function_knOo = await _Readable_object_OYHO.isPaused()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_zzws = true;
		const _Readable_object_pUqn = new Readable(_options_boolean_zzws)
		const _err_boolean_Lvck = false;
		const _cb_string_vlHR = "";
		const __destroy_function_xdOW = await _Readable_object_pUqn._destroy(_err_boolean_Lvck, _cb_string_vlHR)
		const _on_function_ZgYk = await _Readable_object_pUqn.on()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_Aggn = new Readable()
		const _on_function_FICn = await _Readable_object_Aggn.on()
		const _n_string_mjOn = "mf6pEs5QIUUggpetq4fBjuSk2QqIkXBeH4WsprNostMkVHtMQ";
		const __read_function_JaVL = await _Readable_object_Aggn._read(_n_string_mjOn)
		const _n_undefined_OLqv = undefined;
		const __read_function_doKx = await _Readable_object_Aggn._read(_n_undefined_OLqv)
		const _isPaused_function_pUMb = await _Readable_object_Aggn.isPaused()
		const _unshift_function_skwc = await _Readable_object_Aggn.unshift()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_UXlA = true;
		const _Readable_object_yEeM = new Readable(_options_boolean_UXlA)
		const _setEncoding_function_pKaM = await _Readable_object_yEeM.setEncoding()
		const _chunk_string_qJGr = "0LgOqPaz9g5RrDFEkm26dkwXdM252BA0AKPNPLhiErGJW1ukOF0Gel8g6lFRM3kYYuOJdGotfeoB9n0IQSS6VCCbbz";
		const _encoding_string_aqsZ = "RUQ7S4aN5vNGCql8LuNJkrLHbBaaVred3JnqSFR";
		const _push_function_AULr = await _Readable_object_yEeM.push(_chunk_string_qJGr, _encoding_string_aqsZ)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_jJuY = true;
		const _Readable_object_jLpc = new Readable(_options_boolean_jJuY)
		const _push_function_tErx = await _Readable_object_jLpc.push()
		const _ev_array_bYWF = []
		const _fn_array_fMLt = []
		const _on_function_CRQH = await _Readable_object_jLpc.on(_ev_array_bYWF, _fn_array_fMLt)
		const _isPaused_function_sjBD = await _Readable_object_jLpc.isPaused()
		const _dest_array_TFWW = []
		const _pipeOpts_undefined_mQAk = undefined;
		const _pipe_function_XUwm = await _Readable_object_jLpc.pipe(_dest_array_TFWW, _pipeOpts_undefined_mQAk)
		const _read_function_dCyy = await _Readable_object_jLpc.read()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_object_ElcC = {
		
	}
		const _Readable_object_EHVc = new Readable(_options_object_ElcC)
		const _enc_string_GleD = "S5zuBwU8fSX4yOKMKLjaBU8aXadO2p646Lbv9VwZBYbGxWS8sRY8OhmEYvXksc6UTjSR8JPGKNLgbNuztPgCszEp";
		const _setEncoding_function_PIvb = await _Readable_object_EHVc.setEncoding(_enc_string_GleD)
		const __destroy_function_Rqei = await _Readable_object_EHVc._destroy()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_nJvS = false;
		const _Readable_object_nerZ = new Readable(_options_boolean_nJvS)
		const _dest_null_deAj = null;
		const _pipeOpts_string_PzND = "wpEaXBmkWpBWL82u3jpyi4tfk9PXC2aokDMS";
		const _pipe_function_ZnFd = await _Readable_object_nerZ.pipe(_dest_null_deAj, _pipeOpts_string_PzND)
		const _ev_undefined_rMWV = undefined;
		const _fn_object_nqxZ = {
		
	}
		const _on_function_uFGt = await _Readable_object_nerZ.on(_ev_undefined_rMWV, _fn_object_nqxZ)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_qERM = true;
		const _Readable_object_gNqH = new Readable(_options_boolean_qERM)
		const _dest_undefined_LklL = undefined;
		const _unpipe_function_QZxG = await _Readable_object_gNqH.unpipe(_dest_undefined_LklL)
		const _enc_function_xRQA = () => { };
		const _setEncoding_function_ZQeg = await _Readable_object_gNqH.setEncoding(_enc_function_xRQA)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_vDeK = new Readable()
		const _dest_boolean_KDWF = true;
		const _unpipe_function_qudh = await _Readable_object_vDeK.unpipe(_dest_boolean_KDWF)
		const _isPaused_function_wTCH = await _Readable_object_vDeK.isPaused()
		const _ev_object_YKRQ = {
		
	}
		const _fn_string_CDaG = "wKpOfSyEN8SmNVTHaIoNDfqwG";
		const _on_function_KnXU = await _Readable_object_vDeK.on(_ev_object_YKRQ, _fn_string_CDaG)
		const _setEncoding_function_kSJe = await _Readable_object_vDeK.setEncoding()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_string_uLlL = "JQYSgl";
		const _Readable_object_zeTw = new Readable(_options_string_uLlL)
		const _ev_string_WfIM = "iwDA7sdqmZJNJj2NMlWv2HN2380rg6pfdbMn1xGXsQaIEjStMvlAgySlE";
		const _fn_boolean_JOtQ = true;
		const _on_function_UKqL = await _Readable_object_zeTw.on(_ev_string_WfIM, _fn_boolean_JOtQ)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_zRly = false;
		const _Readable_object_Psam = new Readable(_options_boolean_zRly)
		const _ev_string_ZEmF = "QGcRnyvJqdMAPtV57J1GA54UFlSv8zajwbeLrMVswFS5sSrKV4xel95X3AyySus8JXNfRypfwvUJjlZ5ts";
		const _fn_function_rirk = () => { };
		const _on_function_hqtc = await _Readable_object_Psam.on(_ev_string_ZEmF, _fn_function_rirk)
		const _pause_function_gTWv = await _Readable_object_Psam.pause()
		const _setEncoding_function_Kvsq = await _Readable_object_Psam.setEncoding()
		const _setEncoding_function_bldA = await _Readable_object_Psam.setEncoding()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_null_mBtR = null;
		const _Readable_object_JGzn = new Readable(_options_null_mBtR)
		const _pause_function_wITD = await _Readable_object_JGzn.pause()
		const _push_function_ynMn = await _Readable_object_JGzn.push()
		const _ev_object_NQpH = {
		
	}
		const _fn_object_sRTl = {
		
	}
		const _on_function_JgyE = await _Readable_object_JGzn.on(_ev_object_NQpH, _fn_object_sRTl)
		const _setEncoding_function_TSib = await _Readable_object_JGzn.setEncoding()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_jFPY = false;
		const _Readable_object_gxsY = new Readable(_options_boolean_jFPY)
		const _setEncoding_function_vmcR = await _Readable_object_gxsY.setEncoding()
		const _ev_function_IyxF = () => { };
		const _fn_string_PDKv = "8rddSKwT4DOxW7EaFc";
		const _on_function_SoOI = await _Readable_object_gxsY.on(_ev_function_IyxF, _fn_string_PDKv)
		const _dest_object_qgRF = {
		
	}
		const _pipeOpts_null_SVfR = null;
		const _pipe_function_zGJi = await _Readable_object_gxsY.pipe(_dest_object_qgRF, _pipeOpts_null_SVfR)
		const _setEncoding_function_KvBW = await _Readable_object_gxsY.setEncoding()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_ORAY = new Readable()
		const _isPaused_function_TuEx = await _Readable_object_ORAY.isPaused()
		const _enc_object_hxyj = {
		
	}
		const _setEncoding_function_FfWs = await _Readable_object_ORAY.setEncoding(_enc_object_hxyj)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_xCLA = new Readable()
		const _enc_function_Oydh = () => { };
		const _setEncoding_function_zuNh = await _Readable_object_xCLA.setEncoding(_enc_function_Oydh)


	}).timeout(3000);
})