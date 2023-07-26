const Readable = require("../../benchmark/crashes/seeded/express/express-1-2/node_modules/readable-stream/lib/_stream_readable.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('_stream_readable', () => {
	it('test for _stream_readable', async () => {
		const _options_undefined_jABv = undefined;
		const _Readable_object_lZFY = new Readable(_options_undefined_jABv)
		const _pause_function_Vhkw = await _Readable_object_lZFY.pause()

		expect(JSON.parse(JSON.stringify(_Readable_object_lZFY))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_pause_function_Vhkw))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":false,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const _read_function_wsaJ = await _Readable_object_lZFY.read()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_CYsK = new Readable()
		const _enc_string_AQqF = "iPQWGID1jYBTRmHY2tAzFKjXdZDc9fnByELzzp8Bd13NNTTqWenftejhpNu0vrVmw";

		expect(JSON.parse(JSON.stringify(_Readable_object_CYsK))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const _setEncoding_function_CnVj = await _Readable_object_CYsK.setEncoding(_enc_string_AQqF)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_oXjY = new Readable()
		const _ev_numeric_kHcp = 7.334490150820759;
		const _fn_numeric_yZPE = 7.680217774734096;

		expect(JSON.parse(JSON.stringify(_Readable_object_oXjY))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const _on_function_JvDB = await _Readable_object_oXjY.on(_ev_numeric_kHcp, _fn_numeric_yZPE)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_xDYK = new Readable()
		const _dest_undefined_ZFsY = undefined;
		const _pipeOpts_string_qkKB = "h7qsTAA4wrnvjvrQ7AaIb7vJTpyA";

		expect(JSON.parse(JSON.stringify(_Readable_object_xDYK))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const _pipe_function_bOQS = await _Readable_object_xDYK.pipe(_dest_undefined_ZFsY, _pipeOpts_string_qkKB)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_nyKK = new Readable()
		const _unpipe_function_gTId = await _Readable_object_nyKK.unpipe()
		const _setEncoding_function_TYCV = await _Readable_object_nyKK.setEncoding()
		const _unshift_function_eQpr = await _Readable_object_nyKK.unshift()
		const _dest_numeric_lQAh = 7.309215151600899;
		const _pipeOpts_string_IgwV = "rbSf";

		expect(JSON.parse(JSON.stringify(_Readable_object_nyKK))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_setEncoding_function_TYCV))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":{"encoding":"utf8","surrogateSize":3,"charBuffer":{"type":"Buffer","data":[0,0,0,0,0,0]},"charReceived":0,"charLength":0}},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_unpipe_function_gTId))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(_unshift_function_eQpr).to.equal(false)

		try {
			const _pipe_function_uAdE = await _Readable_object_nyKK.pipe(_dest_numeric_lQAh, _pipeOpts_string_IgwV)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_string_krDz = "8vY8BOwLGDhzWd6Eqj78uZMFZJSVsYPKJKPMn";
		const _Readable_object_nESV = new Readable(_options_string_krDz)
		const _setEncoding_function_ETLX = await _Readable_object_nESV.setEncoding()
		const _chunk_object_HICi = {
		
	}
		const _encoding_string_kOTN = "d4mp1urWFCBCARihXsIomGwdDyIaiilSQo82YBSH0SL6zUnazqrwp8oLHLtTpQKffZLDmLjMpqIAJjZazrWR4RoQP2YgKUq9Pgf";

		expect(JSON.parse(JSON.stringify(_Readable_object_nESV))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_chunk_object_HICi))).to.deep.equal({})
		expect(JSON.parse(JSON.stringify(_setEncoding_function_ETLX))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":{"encoding":"utf8","surrogateSize":3,"charBuffer":{"type":"Buffer","data":[0,0,0,0,0,0]},"charReceived":0,"charLength":0}},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const _push_function_kKBM = await _Readable_object_nESV.push(_chunk_object_HICi, _encoding_string_kOTN)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_Dads = new Readable()

		expect(JSON.parse(JSON.stringify(_Readable_object_Dads))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const _on_function_gBgY = await _Readable_object_Dads.on()
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_string_XDhv = "MCVh6iefYpHl2wOyUTS1dwH7OPqUZOBdTLGAtlRs2ZOgpflWiVbkG967TYSVw9rlknEYYhbHFJcpeB3z3OPcpDstL64gEi";
		const _Readable_object_Dwlt = new Readable(_options_string_XDhv)
		const _stream_array_JgKD = []

		expect(JSON.parse(JSON.stringify(_Readable_object_Dwlt))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_stream_array_JgKD))).to.deep.equal([])

		try {
			const _wrap_function_zZgg = await _Readable_object_Dwlt.wrap(_stream_array_JgKD)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_object_oHhl = {
		
	}
		const _Readable_object_Jzhh = new Readable(_options_object_oHhl)
		const _push_function_CZko = await _Readable_object_Jzhh.push()
		const _resume_function_vBxc = await _Readable_object_Jzhh.resume()
		const _unpipe_function_nbKA = await _Readable_object_Jzhh.unpipe()
		const _pause_function_PePS = await _Readable_object_Jzhh.pause()
		const _dest_null_hSYE = null;
		const _pipeOpts_undefined_jdwD = undefined;

		expect(JSON.parse(JSON.stringify(_Readable_object_Jzhh))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_options_object_oHhl))).to.deep.equal({})
		expect(JSON.parse(JSON.stringify(_pause_function_PePS))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":false,"ended":true,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":true,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null,"resumeScheduled":true},"readable":true,"_events":{},"_eventsCount":0})
		expect(_push_function_CZko).to.equal(false)
		expect(JSON.parse(JSON.stringify(_resume_function_vBxc))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":true,"ended":true,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":true,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null,"resumeScheduled":true},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_unpipe_function_nbKA))).to.deep.equal({"_readableState":{"highWaterMark":16384,"buffer":[],"length":0,"pipes":null,"pipesCount":0,"flowing":true,"ended":true,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":true,"readableListening":false,"objectMode":false,"defaultEncoding":"utf8","ranOut":false,"awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null,"resumeScheduled":true},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const _pipe_function_nIGX = await _Readable_object_Jzhh.pipe(_dest_null_hSYE, _pipeOpts_undefined_jdwD)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_CkNh = new Readable()
		const _enc_numeric_qHPu = 9.541252673789526;
		const _setEncoding_function_yYNg = await _Readable_object_CkNh.setEncoding(_enc_numeric_qHPu)
		const _on_function_YBOK = await _Readable_object_CkNh.on()
		const __read_function_zmbp = await _Readable_object_CkNh._read()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_function_doqR = () => { };
		const _Readable_object_nAyK = new Readable(_options_function_doqR)
		const _ev_string_dObc = "1l9rACuFWF70FX9fvm7jeSluTrn1WCd6PCf9";
		const _fn_boolean_LDAZ = true;
		const _on_function_BaTK = await _Readable_object_nAyK.on(_ev_string_dObc, _fn_boolean_LDAZ)
		const _chunk_string_cAmh = "o9KQnNL3";
		const _unshift_function_GKns = await _Readable_object_nAyK.unshift(_chunk_string_cAmh)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_function_zlUa = () => { };
		const _Readable_object_DOgC = new Readable(_options_function_zlUa)
		const _enc_string_iCHF = "DkZd8imRXLKxKiGaWBlPkaVbC6Pvz49rCNoUlRwmcca3srBfu8";
		const _setEncoding_function_tTEb = await _Readable_object_DOgC.setEncoding(_enc_string_iCHF)
		const _pause_function_KvcV = await _Readable_object_DOgC.pause()
		const _pause_function_KDQr = await _Readable_object_DOgC.pause()
		const __read_function_sNYa = await _Readable_object_DOgC._read()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_object_Jeiv = {
		
	}
		const _Readable_object_XZpI = new Readable(_options_object_Jeiv)
		const _ev_array_kIdj = []
		const _fn_string_IRTs = "E1AUlQtr";
		const _on_function_bduo = await _Readable_object_XZpI.on(_ev_array_kIdj, _fn_string_IRTs)
		const _n_array_tEfO = []
		const __read_function_FnNi = await _Readable_object_XZpI._read(_n_array_tEfO)
		const _read_function_FRBS = await _Readable_object_XZpI.read()
		const _n_undefined_JcQk = undefined;
		const __read_function_xTvp = await _Readable_object_XZpI._read(_n_undefined_JcQk)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_gyBW = new Readable()
		const _ev_object_VsAn = {
		
	}
		const _fn_array_ebTW = []
		const _on_function_agul = await _Readable_object_gyBW.on(_ev_object_VsAn, _fn_array_ebTW)
		const _push_function_Kzvs = await _Readable_object_gyBW.push()
		const _setEncoding_function_GqYs = await _Readable_object_gyBW.setEncoding()
		const _setEncoding_function_KEcK = await _Readable_object_gyBW.setEncoding()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_string_HZMl = "UQXyILdYcGaXfrVhZZdHj9kGC9bjDIfFdGOoS";
		const _Readable_object_AMak = new Readable(_options_string_HZMl)
		const _ev_string_mnJv = "EKvfOA8RynalyXuLDVk3OiIJCL8Whq3656QzIenl9WKXim8etHgawVLTz6KHB";
		const _fn_object_VUnV = {
		
	}
		const _on_function_oawi = await _Readable_object_AMak.on(_ev_string_mnJv, _fn_object_VUnV)
		const _enc_function_xxEa = () => { };
		const _setEncoding_function_dEfN = await _Readable_object_AMak.setEncoding(_enc_function_xxEa)
		const _chunk_function_DlYv = () => { };
		const _encoding_string_WzEZ = "p9JGznlMwON7th4GgE2DNjVd0wYOb1ONPzusizVNObnxHAEq";
		const _push_function_ijRA = await _Readable_object_AMak.push(_chunk_function_DlYv, _encoding_string_WzEZ)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_undefined_Yvty = undefined;
		const _Readable_object_HIHV = new Readable(_options_undefined_Yvty)
		const _push_function_Mnlq = await _Readable_object_HIHV.push()
		const _ev_string_lvxy = "OFSURPfOYngfuJ9mz3kAuEl2HlvAvCbfczIo45P4RHnyQ1aTXHWM8FZPyIqvqDho4rLyI5pXhsmI5TyXn";
		const _fn_numeric_nerr = 8.376951093608167;
		const _on_function_JLpJ = await _Readable_object_HIHV.on(_ev_string_lvxy, _fn_numeric_nerr)
		const _n_numeric_enlr = 4.646902175286883;
		const __read_function_fjFW = await _Readable_object_HIHV._read(_n_numeric_enlr)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_numeric_SHOa = -4.452294990457887;
		const _Readable_object_YCDu = new Readable(_options_numeric_SHOa)
		const _ev_string_JfKB = "rr6O0gXMj6Zz4vmsiz3FpVHze8ybsrrxftnJjccPgrAF";
		const _fn_string_McAd = "bx0uRzV4A8KiMNccSMk4pWGLZGLpS9";
		const _on_function_yQNL = await _Readable_object_YCDu.on(_ev_string_JfKB, _fn_string_McAd)
		const _pause_function_fegQ = await _Readable_object_YCDu.pause()
		const _read_function_DimV = await _Readable_object_YCDu.read()
		const _pipe_function_kVPM = await _Readable_object_YCDu.pipe()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_fgwn = true;
		const _Readable_object_dFJF = new Readable(_options_boolean_fgwn)
		const _enc_string_Bybu = "n3CHFKDcLRiG3Y2oTn6EyDHAKflcnMBgAEQmzVx9TbCE";
		const _setEncoding_function_bCOy = await _Readable_object_dFJF.setEncoding(_enc_string_Bybu)
		const _push_function_PdTW = await _Readable_object_dFJF.push()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_function_GRzf = () => { };
		const _Readable_object_xSnb = new Readable(_options_function_GRzf)
		const _ev_string_sxSj = "HwVALqDCQdALbalpvG";
		const _fn_string_LXaP = "G";
		const _on_function_nSuF = await _Readable_object_xSnb.on(_ev_string_sxSj, _fn_string_LXaP)
		const _pause_function_BfZa = await _Readable_object_xSnb.pause()
		const _push_function_AtuO = await _Readable_object_xSnb.push()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_LJXv = new Readable()
		const _ev_undefined_LMIq = undefined;
		const _fn_null_dlNU = null;
		const _on_function_rteF = await _Readable_object_LJXv.on(_ev_undefined_LMIq, _fn_null_dlNU)
		const __read_function_XOQC = await _Readable_object_LJXv._read()
		const _unpipe_function_ycUz = await _Readable_object_LJXv.unpipe()
		const _unpipe_function_VHUj = await _Readable_object_LJXv.unpipe()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_OHpm = true;
		const _Readable_object_KvvB = new Readable(_options_boolean_OHpm)
		const _ev_string_Gyzj = "vLLfUAhNHwWoRtI6uGpk7dltqXXnjh2vy86GTSNyZrHulAxIsnEDEtvb9uSq1pnFWdDlpQHysBYadHsY4egOLD8s";
		const _fn_boolean_oMKi = false;
		const _on_function_OLOl = await _Readable_object_KvvB.on(_ev_string_Gyzj, _fn_boolean_oMKi)
		const _enc_function_UfUz = () => { };
		const _setEncoding_function_ebsp = await _Readable_object_KvvB.setEncoding(_enc_function_UfUz)
		const _resume_function_MDio = await _Readable_object_KvvB.resume()
		const _enc_numeric_HDfJ = 3.3359351328808717;
		const _setEncoding_function_lCVJ = await _Readable_object_KvvB.setEncoding(_enc_numeric_HDfJ)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_array_joIX = []
		const _Readable_object_VNdN = new Readable(_options_array_joIX)
		const _pause_function_oFGU = await _Readable_object_VNdN.pause()
		const _ev_function_vCOW = () => { };
		const _fn_string_VNkn = "GM9tGSYfosGLnRhTEgB0ufmKFEB8v4ZAsuNA6SCpVCr6hDPGpFtASEUYHQKg4e9F3r0T7GWeHR";
		const _on_function_yAhC = await _Readable_object_VNdN.on(_ev_function_vCOW, _fn_string_VNkn)
		const _dest_object_UkGR = {
		
	}
		const _pipeOpts_boolean_XfzU = false;
		const _pipe_function_FFqb = await _Readable_object_VNdN.pipe(_dest_object_UkGR, _pipeOpts_boolean_XfzU)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_rywu = new Readable()
		const _ev_array_sJZB = []
		const _fn_string_Hesx = "chl4RqbzD6IUA";
		const _on_function_GgIN = await _Readable_object_rywu.on(_ev_array_sJZB, _fn_string_Hesx)
		const _push_function_UcJF = await _Readable_object_rywu.push()
		const _unpipe_function_Etbp = await _Readable_object_rywu.unpipe()
		const _pause_function_VHpY = await _Readable_object_rywu.pause()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_YUYM = new Readable()
		const _ev_string_cgzY = "vEY9";
		const _fn_string_vdtq = "BRl8kPto";
		const _on_function_RoyZ = await _Readable_object_YUYM.on(_ev_string_cgzY, _fn_string_vdtq)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_string_jSzX = "9fvuU7sU6u4mIV4K9272QXcC3BuKmii17M0eMR5GbCuEtx9u9wDpOq8Cn1X2055exntVlDAKPpb6aMsVnr";
		const _Readable_object_NUWj = new Readable(_options_string_jSzX)
		const _push_function_vpMe = await _Readable_object_NUWj.push()
		const _resume_function_OLOE = await _Readable_object_NUWj.resume()
		const _chunk_string_gddn = "d7uRpCdsq3lk9lK6k5MtsrM978wLiTYrrPs4EqZFJ";
		const _unshift_function_bCzR = await _Readable_object_NUWj.unshift(_chunk_string_gddn)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_object_FvnF = {
		
	}
		const _Readable_object_KupH = new Readable(_options_object_FvnF)
		const _unpipe_function_QHcW = await _Readable_object_KupH.unpipe()
		const _pause_function_yoas = await _Readable_object_KupH.pause()
		const _enc_string_bJdp = "5N6soszG1EGjyQ4pH4G4DJmiOqPTDJXbIbRYk2asO437O7qq4xsqtCKutGuvPMxwq";
		const _setEncoding_function_EXQU = await _Readable_object_KupH.setEncoding(_enc_string_bJdp)
		const _chunk_string_RThg = "waVgGQAHr8gO9qG2ioBrQh74x0EqfzGSiWLzGDH660N7IwO9yCsRgiSX2LlIoHgrxaPsbQUjxVup";
		const _unshift_function_XVaS = await _Readable_object_KupH.unshift(_chunk_string_RThg)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_RPqy = new Readable()
		const _ev_numeric_aJjb = 8.240859521448215;
		const _fn_string_ZqND = "OgXhTq8X7xkpV3FI1TBqpxse3d";
		const _on_function_tHZZ = await _Readable_object_RPqy.on(_ev_numeric_aJjb, _fn_string_ZqND)
		const _n_array_vPYG = []
		const _read_function_eneT = await _Readable_object_RPqy.read(_n_array_vPYG)
		const _enc_function_NPnP = () => { };
		const _setEncoding_function_TFKe = await _Readable_object_RPqy.setEncoding(_enc_function_NPnP)
		const __read_function_PtBi = await _Readable_object_RPqy._read()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_ewlU = new Readable()
		const _dest_null_cfAh = null;
		const _unpipe_function_oPnk = await _Readable_object_ewlU.unpipe(_dest_null_cfAh)
		const _ev_string_MklP = "mxwH9ykPCmuXpYUCqIdieHDIr1wryNh93";
		const _fn_string_TvUA = "tvX8iaZJhHkCCQzleMFl8R1m1nruG";
		const _on_function_HBxT = await _Readable_object_ewlU.on(_ev_string_MklP, _fn_string_TvUA)
		const _pause_function_hEhh = await _Readable_object_ewlU.pause()
		const _pause_function_zALB = await _Readable_object_ewlU.pause()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_ZKRX = false;
		const _Readable_object_ocaJ = new Readable(_options_boolean_ZKRX)
		const _ev_object_ovKV = {
		
	}
		const _fn_string_Wdjq = "MuimOFsxAb9OEkzb2hXnL1rdRWKNBThjiyUSLBxrAGjcIxh7ZpPYLdqxVkaUwYcwmZn8XvmhKOqYIebbPy4LKWXnVk57yYWGM";
		const _on_function_MYlf = await _Readable_object_ocaJ.on(_ev_object_ovKV, _fn_string_Wdjq)
		const __read_function_VWeb = await _Readable_object_ocaJ._read()
		const _chunk_string_WWBc = "k3XWnZaMP9zNwsnPLmI5L39ISwbAaTrDWcJsdY83AsMcswONzm5TqdJzijIPNn1ivDgw3HsUHSn2lx";
		const _unshift_function_UQOt = await _Readable_object_ocaJ.unshift(_chunk_string_WWBc)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_function_XgbZ = () => { };
		const _Readable_object_vfbs = new Readable(_options_function_XgbZ)
		const _ev_string_dMpZ = "DXv6Z7E0E2";
		const _fn_numeric_QzQl = -4.071328383434008;
		const _on_function_YUOi = await _Readable_object_vfbs.on(_ev_string_dMpZ, _fn_numeric_QzQl)
		const _n_array_FZSp = []
		const __read_function_mQNf = await _Readable_object_vfbs._read(_n_array_FZSp)
		const _resume_function_jJFl = await _Readable_object_vfbs.resume()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_IZnJ = new Readable()
		const _ev_array_zkxK = []
		const _fn_string_kJOs = "JR8pzHnCTcNwrsOaApsc7fhjEJEYPLNwX4GpGOgTklQejp1MOk4X9fC2tW9nTpYn04tbovQovZ3vh2syYUvIXwEprxLJd";
		const _on_function_reSz = await _Readable_object_IZnJ.on(_ev_array_zkxK, _fn_string_kJOs)
		const __read_function_hiqt = await _Readable_object_IZnJ._read()
		const _pipe_function_WqUV = await _Readable_object_IZnJ.pipe()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_null_rCiD = null;
		const _Readable_object_Ghwa = new Readable(_options_null_rCiD)
		const _ev_string_ZtBv = "HXL6DWhffRO9nwpoqkeDhKRtGMta20o0W1ueFIPixBRLjWdLGD1KqXMCEsFWhSEvCvnSKCzoC1PQt0";
		const _fn_numeric_tVbr = 4.386364894628629;
		const _on_function_NEcX = await _Readable_object_Ghwa.on(_ev_string_ZtBv, _fn_numeric_tVbr)
		const _chunk_numeric_FSYO = 1.2251401183675625;
		const _encoding_array_TqSt = []
		const _push_function_rIbA = await _Readable_object_Ghwa.push(_chunk_numeric_FSYO, _encoding_array_TqSt)
		const _resume_function_UEpk = await _Readable_object_Ghwa.resume()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_Uyxr = new Readable()
		const _ev_function_wthU = () => { };
		const _fn_numeric_LHBW = -0.3675829548604099;
		const _on_function_UnrW = await _Readable_object_Uyxr.on(_ev_function_wthU, _fn_numeric_LHBW)
		const _read_function_izYq = await _Readable_object_Uyxr.read()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_string_iQdg = "KGWRe4FqYXRq7bBeD7oU85iz7X";
		const _Readable_object_yBmD = new Readable(_options_string_iQdg)
		const _ev_string_HbwD = "kHDdp9QjVIjFkIVNGCMqGmoGOf8hMumUoT";
		const _fn_string_kZqC = "ozjIiF1ASejzpdTy9cguHjsaY5ySRuYFmXoEZAXmW45IjYO1kVoElhIAGfsmVOai6MSzBMJC3";
		const _on_function_cTEW = await _Readable_object_yBmD.on(_ev_string_HbwD, _fn_string_kZqC)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_object_mGDG = {
		
	}
		const _Readable_object_BUNx = new Readable(_options_object_mGDG)
		const _pause_function_QICH = await _Readable_object_BUNx.pause()
		const _ev_object_MRlH = {
		
	}
		const _fn_numeric_nrto = -2.7979338877636355;
		const _on_function_KezT = await _Readable_object_BUNx.on(_ev_object_MRlH, _fn_numeric_nrto)
		const _chunk_function_QfRd = () => { };
		const _unshift_function_ImRt = await _Readable_object_BUNx.unshift(_chunk_function_QfRd)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_aoUA = new Readable()
		const _setEncoding_function_YcQt = await _Readable_object_aoUA.setEncoding()
		const _enc_string_Bntg = "wY";
		const _setEncoding_function_kdfx = await _Readable_object_aoUA.setEncoding(_enc_string_Bntg)
		const _dest_function_efSk = () => { };
		const _pipeOpts_string_wjbu = "vGKqQavb88fXsSaTRwnOaXEVB0Kg9DzSzPJ3w8tfrBJk";
		const _pipe_function_eXkO = await _Readable_object_aoUA.pipe(_dest_function_efSk, _pipeOpts_string_wjbu)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_ODlL = new Readable()
		const _ev_string_CLhE = "iDPJOyVN9h757DCUhEhyYyTUn6g2OazuPa1utG5T9oZkWLqCIuzmqty84VA6";
		const _fn_string_DaJA = "dWGZIcOgEdunNDSK9PTPBC2YXjOqISQuoamdCLCUvGSlUoBoEnLGPB40VzgL8bqNBfqG4tee88ACJB8WsjRo";
		const _on_function_JGOb = await _Readable_object_ODlL.on(_ev_string_CLhE, _fn_string_DaJA)
		const _pause_function_kPgN = await _Readable_object_ODlL.pause()
		const _chunk_string_KEuw = "zgMsc8vtzhfIjkFYMcP8SYh6m8m2Sdb1JgFnDCKVUAwBSADJQiGTkdi8mgcJjXzpdpkDq6AY33OGBiTUaIdcyE";
		const _encoding_function_qhsR = () => { };
		const _push_function_YJNo = await _Readable_object_ODlL.push(_chunk_string_KEuw, _encoding_function_qhsR)
		const _chunk_string_JYbz = "YvR3YEgDDFTejFrV1R97meHYcwcIJfVaf1SAQYpPJhlKA9UxXfgVQLtqAMMJgvQl0diWwoxxxzElr62a";
		const _encoding_object_oQWD = {
		
	}
		const _push_function_nKkS = await _Readable_object_ODlL.push(_chunk_string_JYbz, _encoding_object_oQWD)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_string_Beok = "yyJRYhyuTrBfnHNGAP6yiZVUL3TnyLIeIzw3upGQvPlB3RYFt2Ku3ey035qWjV9dtgdOUnoQgAzxGhun";
		const _Readable_object_APfH = new Readable(_options_string_Beok)
		const _unpipe_function_UzFd = await _Readable_object_APfH.unpipe()
		const _ev_string_ypqY = "Y8PPVjelfDXuG3naatiLH9rajdTO2PVv8n1fzWD8MytUvtmOE5ar5n9g";
		const _fn_string_snGE = "wDpVGkUYEc5zj5ariSqbWSnLTCGIsoG0lHY7tsbwugUErytAWCzwwKdQwQlMh3Hmq7qmu5BUJindB09NaUZHn5YWCUj";
		const _on_function_UMJZ = await _Readable_object_APfH.on(_ev_string_ypqY, _fn_string_snGE)
		const _pause_function_BmQZ = await _Readable_object_APfH.pause()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_string_nclj = "lQqX";
		const _Readable_object_HMqE = new Readable(_options_string_nclj)
		const _pause_function_DKaH = await _Readable_object_HMqE.pause()
		const _ev_null_JAQn = null;
		const _fn_string_fgWh = "IuQnngM1PU8zhYupdLj2WcFkNgtU2F";
		const _on_function_NsUB = await _Readable_object_HMqE.on(_ev_null_JAQn, _fn_string_fgWh)
		const _chunk_string_ykcc = "vFs7exBiDw0vPLFoNvhBSHghvRI1qATbSP5g2zbT0sdag9qWEBmGpRnw3nvnlVTho";
		const _unshift_function_yFXp = await _Readable_object_HMqE.unshift(_chunk_string_ykcc)
		const _chunk_object_oHsd = {
		
	}
		const _unshift_function_ysTI = await _Readable_object_HMqE.unshift(_chunk_object_oHsd)
		const _on_function_frdP = await _Readable_object_HMqE.on()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_function_IJsh = () => { };
		const _Readable_object_Gddk = new Readable(_options_function_IJsh)
		const _dest_array_PvBC = []
		const _unpipe_function_AoFU = await _Readable_object_Gddk.unpipe(_dest_array_PvBC)
		const _ev_string_xmWU = "jN8WxU8sHWHO4GP6W2BUpFMElrRAF1FL";
		const _fn_string_BGAE = "WgF6dRsV3qlG03WljmOBo3LZsAk1CtJn5TsSaWd2V3itH5jOqwRCocXsVtucKApOoSe3ScWzhUqA8w9TqLHQea3WC3WV2";
		const _on_function_fXey = await _Readable_object_Gddk.on(_ev_string_xmWU, _fn_string_BGAE)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_function_dfom = () => { };
		const _Readable_object_Ucvx = new Readable(_options_function_dfom)
		const _unpipe_function_xhRG = await _Readable_object_Ucvx.unpipe()
		const _dest_function_xCWy = () => { };
		const _unpipe_function_lsJj = await _Readable_object_Ucvx.unpipe(_dest_function_xCWy)
		const _ev_string_BZHL = "8IeOi5lnK1zKDvhtPDKsKUfAUC8gbCdXQEX4yDEQMAGZJvOILF0IlKBJNBc";
		const _fn_numeric_NNOx = -1.8553674358827639;
		const _on_function_QFnH = await _Readable_object_Ucvx.on(_ev_string_BZHL, _fn_numeric_NNOx)
		const _pipe_function_gFJE = await _Readable_object_Ucvx.pipe()
		const _pause_function_IKIL = await _Readable_object_Ucvx.pause()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_numeric_xcYg = -1.1737835931981486;
		const _Readable_object_jXhB = new Readable(_options_numeric_xcYg)
		const _ev_string_AIbI = "skksJ6M1N1h";
		const _fn_string_VXRF = "jM6OlGHBjfs5TtWfi8JUVyIwdf72shw5ctZUMAvy2hgUOL7B4mP5PyPERbxEY7mT9zHrYYRtPw";
		const _on_function_rwkS = await _Readable_object_jXhB.on(_ev_string_AIbI, _fn_string_VXRF)
		const _pause_function_fsiD = await _Readable_object_jXhB.pause()
		const _n_null_MzoZ = null;
		const __read_function_Tnew = await _Readable_object_jXhB._read(_n_null_MzoZ)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_string_yvNk = "tiktQIj2";
		const _Readable_object_ZGoq = new Readable(_options_string_yvNk)
		const _chunk_null_cpRt = null;
		const _unshift_function_GtEW = await _Readable_object_ZGoq.unshift(_chunk_null_cpRt)
		const _ev_object_GgBR = {
		
	}
		const _fn_string_qCeT = "OG5KXoijvfKxlGZQXH";
		const _on_function_gcJR = await _Readable_object_ZGoq.on(_ev_object_GgBR, _fn_string_qCeT)


	}).timeout(3000);
})