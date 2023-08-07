const Readable = require("../../benchmark/crashes/seeded/atom/atom-22894-2/node_modules/readable-stream/lib/_stream_readable.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('_stream_readable', () => {
	it('test for _stream_readable', async () => {
		const _Readable_object_UjRm = new Readable()

		expect(JSON.parse(JSON.stringify(_Readable_object_UjRm))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const __read_function_ohIZ = await _Readable_object_UjRm._read()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_DcDk = false;
		const _Readable_object_xABe = new Readable(_options_boolean_DcDk)

		expect(JSON.parse(JSON.stringify(_Readable_object_xABe))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const __destroy_function_nQnT = await _Readable_object_xABe._destroy()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_BIOM = false;
		const _Readable_object_Rcrb = new Readable(_options_boolean_BIOM)
		const _enc_string_YNQJ = "1CJcXjDqkL28rRpRsy749q0DVfxcSmfh3jMZLjA5lMy5";

		expect(JSON.parse(JSON.stringify(_Readable_object_Rcrb))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const _setEncoding_function_OxlD = await _Readable_object_Rcrb.setEncoding(_enc_string_YNQJ)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_zqJE = true;
		const _Readable_object_aGDs = new Readable(_options_boolean_zqJE)

		expect(JSON.parse(JSON.stringify(_Readable_object_aGDs))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const _on_function_tpTN = await _Readable_object_aGDs.on()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_array_rOxm = []
		const _Readable_object_uHqg = new Readable(_options_array_rOxm)
		const _dest_numeric_Twqa = -4.754696289573887;
		const _pipeOpts_array_eDbm = []

		expect(JSON.parse(JSON.stringify(_Readable_object_uHqg))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_options_array_rOxm))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_pipeOpts_array_eDbm))).to.deep.equal([])

		try {
			const _pipe_function_CqvA = await _Readable_object_uHqg.pipe(_dest_numeric_Twqa, _pipeOpts_array_eDbm)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_object_LjKS = {
		
	}
		const _Readable_object_yjYl = new Readable(_options_object_LjKS)
		const _isPaused_function_zQqL = await _Readable_object_yjYl.isPaused()
		const _pause_function_lfLw = await _Readable_object_yjYl.pause()
		const _ev_undefined_jHcB = undefined;
		const _fn_string_QvDD = "n4Ic1s4PSKb52aUuT";

		expect(JSON.parse(JSON.stringify(_Readable_object_yjYl))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(_isPaused_function_zQqL).to.equal(false)
		expect(JSON.parse(JSON.stringify(_options_object_LjKS))).to.deep.equal({})
		expect(JSON.parse(JSON.stringify(_pause_function_lfLw))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":false,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const _on_function_GsdR = await _Readable_object_yjYl.on(_ev_undefined_jHcB, _fn_string_QvDD)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_qSoF = new Readable()
		const _push_function_NDXw = await _Readable_object_qSoF.push()
		const _isPaused_function_AUMs = await _Readable_object_qSoF.isPaused()
		const _chunk_function_wCqG = () => { };

		expect(JSON.parse(JSON.stringify(_Readable_object_qSoF))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(_isPaused_function_AUMs).to.equal(false)
		expect(_push_function_NDXw).to.equal(true)

		try {
			const _unshift_function_Ifoj = await _Readable_object_qSoF.unshift(_chunk_function_wCqG)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_omoN = false;
		const _Readable_object_oLPQ = new Readable(_options_boolean_omoN)

		expect(JSON.parse(JSON.stringify(_Readable_object_oLPQ))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const _wrap_function_PzDx = await _Readable_object_oLPQ.wrap()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_ZBPK = new Readable()
		const _stream_array_vnMq = []

		expect(JSON.parse(JSON.stringify(_Readable_object_ZBPK))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_stream_array_vnMq))).to.deep.equal([])

		try {
			const _wrap_function_VDIV = await _Readable_object_ZBPK.wrap(_stream_array_vnMq)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_jjfr = false;
		const _Readable_object_ZBDd = new Readable(_options_boolean_jjfr)
		const _ev_string_doZQ = "6vVu8TSByl9yIK8pmroGYLNWtSIYcqoMjuNE";
		const _fn_numeric_Yrtu = 6.673128637338067;

		expect(JSON.parse(JSON.stringify(_Readable_object_ZBDd))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const _on_function_KtCQ = await _Readable_object_ZBDd.on(_ev_string_doZQ, _fn_numeric_Yrtu)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_iBSC = true;
		const _Readable_object_Bknb = new Readable(_options_boolean_iBSC)
		const _enc_array_etVA = []

		expect(JSON.parse(JSON.stringify(_Readable_object_Bknb))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_enc_array_etVA))).to.deep.equal([])

		try {
			const _setEncoding_function_MlwV = await _Readable_object_Bknb.setEncoding(_enc_array_etVA)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_undefined_FNsg = undefined;
		const _Readable_object_RwUp = new Readable(_options_undefined_FNsg)
		const _push_function_rtGo = await _Readable_object_RwUp.push()
		const _ev_string_eNQi = "Jfdg0utQEF";
		const _fn_string_SzIV = "l1YenGNQUGlX2sNiCNow6WkiD7ibdbm0hTAl8Ndfs6AXzrhaM1cCLmiHz99qfBtVooENz";

		expect(JSON.parse(JSON.stringify(_Readable_object_RwUp))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(_push_function_rtGo).to.equal(true)

		try {
			const _on_function_sivK = await _Readable_object_RwUp.on(_ev_string_eNQi, _fn_string_SzIV)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_FdAN = true;
		const _Readable_object_VpdZ = new Readable(_options_boolean_FdAN)
		const _ev_string_TIDH = "upd45wp6We5d7moMozIvwORznM2LnWaA2fe";
		const _fn_numeric_QLVD = -1.7870604092903477;

		expect(JSON.parse(JSON.stringify(_Readable_object_VpdZ))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const _on_function_CQqT = await _Readable_object_VpdZ.on(_ev_string_TIDH, _fn_numeric_QLVD)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_SNje = new Readable()
		const _chunk_string_QcZK = "affBnNtLLhS2n6bCGUQHYT6hnQmlPD9U6e3HL95wq5vgtnv";
		const _encoding_string_yhQO = "1X3nGrUL2JSaC2fgUVbFoAfPTABB8krcNgaPne91pLmJdv3scf7pQN";

		expect(JSON.parse(JSON.stringify(_Readable_object_SNje))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const _push_function_vVSv = await _Readable_object_SNje.push(_chunk_string_QcZK, _encoding_string_yhQO)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_wYWm = true;
		const _Readable_object_tCre = new Readable(_options_boolean_wYWm)
		const _pause_function_uukR = await _Readable_object_tCre.pause()
		const _chunk_string_gQbx = "KwDZ2WjoQW1kHVFsh3z1tUENeH6d7yK5";
		const _encoding_numeric_eURh = 2.721212251826815;
		const _push_function_Isxv = await _Readable_object_tCre.push(_chunk_string_gQbx, _encoding_numeric_eURh)
		const _enc_function_ycUA = () => { };

		expect(JSON.parse(JSON.stringify(_Readable_object_tCre))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_pause_function_uukR))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":false,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(_push_function_Isxv).to.equal(true)

		try {
			const _setEncoding_function_DxYg = await _Readable_object_tCre.setEncoding(_enc_function_ycUA)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_vOzH = false;
		const _Readable_object_KQew = new Readable(_options_boolean_vOzH)
		const _push_function_Wpeg = await _Readable_object_KQew.push()
		const _ev_string_vTfs = "ecytsP1kcsztZIRp4HXcNj1OcvwbcKAGiJBX1yJ9JPM2QOe4E7XMvGi8NuK07Qz1UaMo";
		const _fn_string_zktx = "6PEsbDB9lnVTOg3KtiGwyKVbnF2zczUHNUDA0qybWKPrfAD";
		const _on_function_uTKN = await _Readable_object_KQew.on(_ev_string_vTfs, _fn_string_zktx)
		const _resume_function_hZeU = await _Readable_object_KQew.resume()
		const _on_function_gjZw = await _Readable_object_KQew.on()


	}).timeout(3000);
})