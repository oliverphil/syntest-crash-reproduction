const Readable = require("../../benchmark/crashes/atom/atom-22894/node_modules/readable-stream/lib/_stream_readable.js");
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('_stream_readable', () => {
	it('test for _stream_readable', async () => {
		const _options_boolean_JnPI = false;
		const _Readable_object_aiPa = new Readable(_options_boolean_JnPI)
		const _resume_function_POBb = await _Readable_object_aiPa.resume()
		const _unpipe_function_yBXV = await _Readable_object_aiPa.unpipe()
		const _n_array_vWmS = []

		expect(JSON.parse(JSON.stringify(_Readable_object_aiPa))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":null,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_n_array_vWmS))).to.deep.equal([])
		expect(JSON.parse(JSON.stringify(_resume_function_POBb))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":true,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":true,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})
		expect(JSON.parse(JSON.stringify(_unpipe_function_yBXV))).to.deep.equal({"_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":null,"pipesCount":0,"flowing":true,"ended":false,"endEmitted":false,"reading":false,"sync":true,"needReadable":false,"emittedReadable":false,"readableListening":false,"resumeScheduled":true,"destroyed":false,"defaultEncoding":"utf8","awaitDrain":0,"readingMore":false,"decoder":null,"encoding":null},"readable":true,"_events":{},"_eventsCount":0})

		try {
			const __read_function_NVle = await _Readable_object_aiPa._read(_n_array_vWmS)
		} catch (e) {
			expect(e).to.be.an('error')
		}
	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_YpnF = new Readable()
		const _on_function_jQvS = await _Readable_object_YpnF.on()
		const _isPaused_function_Zsow = await _Readable_object_YpnF.isPaused()
		const __read_function_qLPs = await _Readable_object_YpnF._read()
		const _wrap_function_ihnL = await _Readable_object_YpnF.wrap()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_XkKX = false;
		const _Readable_object_MUiM = new Readable(_options_boolean_XkKX)
		const _dest_string_yalu = "JlWCccBkjHxMACr3hcBAjvxdBQE5mruHxLYRzIpCQ1aEfG5tZfH7k9";
		const _pipeOpts_array_RKqC = []
		const _pipe_function_dEbG = await _Readable_object_MUiM.pipe(_dest_string_yalu, _pipeOpts_array_RKqC)
		const _read_function_uEoD = await _Readable_object_MUiM.read()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_yiAF = new Readable()
		const _isPaused_function_wCaK = await _Readable_object_yiAF.isPaused()
		const _resume_function_BcDi = await _Readable_object_yiAF.resume()
		const _isPaused_function_GjeS = await _Readable_object_yiAF.isPaused()
		const _enc_object_NECK = {
		
	}
		const _setEncoding_function_VnUJ = await _Readable_object_yiAF.setEncoding(_enc_object_NECK)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_rONN = new Readable()
		const _pause_function_LlzD = await _Readable_object_rONN.pause()
		const _chunk_object_NWpq = {
		
	}
		const _encoding_boolean_etpY = false;
		const _push_function_jahA = await _Readable_object_rONN.push(_chunk_object_NWpq, _encoding_boolean_etpY)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_OdJs = false;
		const _Readable_object_mkRw = new Readable(_options_boolean_OdJs)
		const _err_array_Tpsv = []
		const _cb_numeric_udZv = -7.523683989274927;
		const __destroy_function_PVCm = await _Readable_object_mkRw._destroy(_err_array_Tpsv, _cb_numeric_udZv)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_fsjY = new Readable()
		const _dest_null_ewuV = null;
		const _pipeOpts_null_SvJu = null;
		const _pipe_function_OZDl = await _Readable_object_fsjY.pipe(_dest_null_ewuV, _pipeOpts_null_SvJu)
		const _pause_function_VPdp = await _Readable_object_fsjY.pause()
		const _n_null_IcgI = null;
		const __read_function_Lojn = await _Readable_object_fsjY._read(_n_null_IcgI)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_string_DfXE = "YyPlKdCr4Iuy";
		const _Readable_object_Htmd = new Readable(_options_string_DfXE)
		const _dest_boolean_YvUi = false;
		const _unpipe_function_ohFC = await _Readable_object_Htmd.unpipe(_dest_boolean_YvUi)
		const _isPaused_function_XFIl = await _Readable_object_Htmd.isPaused()
		const _push_function_NRyj = await _Readable_object_Htmd.push()
		const _pipe_function_NPjU = await _Readable_object_Htmd.pipe()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_null_GCji = null;
		const _Readable_object_JXuc = new Readable(_options_null_GCji)
		const _ev_string_cVdg = "z6yShE1jYEljXGi8YsbboOacfGigbgnpAguS5FC1A2YaUKwDImoYbGQL3jTRjXywGUSGEmz";
		const _fn_null_JTLe = null;
		const _on_function_ZRKz = await _Readable_object_JXuc.on(_ev_string_cVdg, _fn_null_JTLe)
		const _pipe_function_OwVx = await _Readable_object_JXuc.pipe()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_object_rZow = {
		
	}
		const _Readable_object_EMmn = new Readable(_options_object_rZow)
		const _ev_string_QNbM = "DF8tPA7UD9E7y7euoxE3OPoXREyi5BnaHuvZpiSVLqcj1Ip55JFpQoFImFGGfhRDDDUT";
		const _fn_object_USHj = {
		
	}
		const _on_function_ntox = await _Readable_object_EMmn.on(_ev_string_QNbM, _fn_object_USHj)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_object_RgXO = {
		
	}
		const _Readable_object_bWcL = new Readable(_options_object_RgXO)
		const _pause_function_tEic = await _Readable_object_bWcL.pause()
		const _resume_function_vOhG = await _Readable_object_bWcL.resume()
		const _setEncoding_function_woMW = await _Readable_object_bWcL.setEncoding()
		const _stream_string_yGgq = "gSogdw80zvJgk6c3LgPILoWxM8sK3ofTYQYhvpHkYaX1FXgcaBmoEuODRhgn6h5tyAmvue";
		const _wrap_function_NqRK = await _Readable_object_bWcL.wrap(_stream_string_yGgq)
		const _pause_function_BEBL = await _Readable_object_bWcL.pause()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_eKjc = true;
		const _Readable_object_nnFf = new Readable(_options_boolean_eKjc)
		const _ev_boolean_RBrq = true;
		const _fn_string_wzEM = "Sxj2vNxs2w";
		const _on_function_LRiy = await _Readable_object_nnFf.on(_ev_boolean_RBrq, _fn_string_wzEM)
		const _unpipe_function_hATo = await _Readable_object_nnFf.unpipe()
		const _isPaused_function_uVmD = await _Readable_object_nnFf.isPaused()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_dNLc = new Readable()
		const _enc_string_neFr = "Qmxql3fwfKlJfwfKcbYKS4eMnyYa7Q6OlJDe7MT8urbuKfc9rJ";
		const _setEncoding_function_kIMJ = await _Readable_object_dNLc.setEncoding(_enc_string_neFr)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_loeP = new Readable()
		const _isPaused_function_Wedn = await _Readable_object_loeP.isPaused()
		const _ev_string_dNJS = "OmjBVhMWvam8cyb8faQuKk4TSiXP5VUak4qmnmMMyyKgwwCERRJ0BA";
		const _fn_function_ETlm = () => { };
		const _on_function_rCct = await _Readable_object_loeP.on(_ev_string_dNJS, _fn_function_ETlm)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_JJSy = new Readable()
		const _ev_string_AncE = "1BGUMdRfjucRZQ8NOSuTDEMCSYfJLYYXOId1whykLTqAkTAyxC5UBF2";
		const _fn_boolean_KLNx = false;
		const _on_function_kVYP = await _Readable_object_JJSy.on(_ev_string_AncE, _fn_boolean_KLNx)
		const _chunk_object_dBBF = {
		
	}
		const _encoding_string_mzYh = "N6ERKd9Nio";
		const _push_function_tTez = await _Readable_object_JJSy.push(_chunk_object_dBBF, _encoding_string_mzYh)
		const __read_function_JFxw = await _Readable_object_JJSy._read()
		const _isPaused_function_boJj = await _Readable_object_JJSy.isPaused()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_null_czsT = null;
		const _Readable_object_sxZP = new Readable(_options_null_czsT)
		const _enc_function_hWJj = () => { };
		const _setEncoding_function_Uxrn = await _Readable_object_sxZP.setEncoding(_enc_function_hWJj)
		const __destroy_function_Njeq = await _Readable_object_sxZP._destroy()
		const _chunk_array_avpp = []
		const _unshift_function_dOLs = await _Readable_object_sxZP.unshift(_chunk_array_avpp)
		const _pause_function_Clim = await _Readable_object_sxZP.pause()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_IsTB = true;
		const _Readable_object_pEnz = new Readable(_options_boolean_IsTB)
		const _pause_function_Mtkp = await _Readable_object_pEnz.pause()
		const _ev_string_SQIA = "7xrKvgHY64CgXI7EQsK7wx77nbZ5t";
		const _fn_numeric_mIiL = 2.392410826302001;
		const _on_function_VLjw = await _Readable_object_pEnz.on(_ev_string_SQIA, _fn_numeric_mIiL)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_FGlb = false;
		const _Readable_object_OlWO = new Readable(_options_boolean_FGlb)
		const _unshift_function_dQrv = await _Readable_object_OlWO.unshift()
		const _push_function_BqzO = await _Readable_object_OlWO.push()
		const _setEncoding_function_TyEx = await _Readable_object_OlWO.setEncoding()
		const _isPaused_function_KvTu = await _Readable_object_OlWO.isPaused()
		const _ev_array_IBXc = []
		const _fn_string_KCIw = "IqDyIxnywn44f7BMTNRn1UKaVDlTjrmjXQkarBXMs";
		const _on_function_fVsh = await _Readable_object_OlWO.on(_ev_array_IBXc, _fn_string_KCIw)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_Okpk = new Readable()
		const _ev_undefined_LBQH = undefined;
		const _fn_string_tReJ = "3xupsm9xeQ1w3zYo2R4ql5YKsL1sLu9cZjlEmLBxHS1KwcnJ2qDmdjzU6ni2nnOS4VnFjF7kghndGTzmRFzUTzGX1mM";
		const _on_function_Uyik = await _Readable_object_Okpk.on(_ev_undefined_LBQH, _fn_string_tReJ)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_NlZr = true;
		const _Readable_object_NRRS = new Readable(_options_boolean_NlZr)
		const _enc_function_hWar = () => { };
		const _setEncoding_function_TRnX = await _Readable_object_NRRS.setEncoding(_enc_function_hWar)
		const _chunk_object_ntWU = {
		
	}
		const _unshift_function_dkcN = await _Readable_object_NRRS.unshift(_chunk_object_ntWU)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_LutW = new Readable()
		const _ev_array_BfzV = []
		const _fn_string_LZRO = "J8mjDKIbxf1gph4NJgwf39SgLV41es0uKxVerK4uM4MJKnzpzSLyOy2AiaURMhWTTYHvs8MuzRHiOf";
		const _on_function_lcbc = await _Readable_object_LutW.on(_ev_array_BfzV, _fn_string_LZRO)
		const _pause_function_jVow = await _Readable_object_LutW.pause()
		const __read_function_VxPt = await _Readable_object_LutW._read()
		const _isPaused_function_gRCu = await _Readable_object_LutW.isPaused()
		const _pause_function_odJP = await _Readable_object_LutW.pause()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_tRsN = new Readable()
		const _enc_function_HcVN = () => { };
		const _setEncoding_function_mNQk = await _Readable_object_tRsN.setEncoding(_enc_function_HcVN)
		const _unshift_function_fFXo = await _Readable_object_tRsN.unshift()
		const _pause_function_Ggrx = await _Readable_object_tRsN.pause()
		const _pipe_function_Ykee = await _Readable_object_tRsN.pipe()
		const _pause_function_rcss = await _Readable_object_tRsN.pause()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_XBNB = new Readable()
		const _push_function_Cjzk = await _Readable_object_XBNB.push()
		const _enc_array_lrgj = []
		const _setEncoding_function_IEnh = await _Readable_object_XBNB.setEncoding(_enc_array_lrgj)
		const _resume_function_hCmQ = await _Readable_object_XBNB.resume()
		const _push_function_smWj = await _Readable_object_XBNB.push()
		const _n_array_wKgr = []
		const _read_function_bLzQ = await _Readable_object_XBNB.read(_n_array_wKgr)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_NYpE = false;
		const _Readable_object_PFgA = new Readable(_options_boolean_NYpE)
		const _isPaused_function_AbIx = await _Readable_object_PFgA.isPaused()
		const _unpipe_function_wmGc = await _Readable_object_PFgA.unpipe()
		const _dest_object_nmNG = {
		
	}
		const _unpipe_function_zTNa = await _Readable_object_PFgA.unpipe(_dest_object_nmNG)
		const _ev_array_FiJB = []
		const _fn_array_MDvl = []
		const _on_function_nQAD = await _Readable_object_PFgA.on(_ev_array_FiJB, _fn_array_MDvl)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_string_cpYb = "IWanhxmxGXku8g3cTG8DmFllpMbUb4AzxiiQoYJkyygZrrUos3hJktqHLMAGlL";
		const _Readable_object_TDNQ = new Readable(_options_string_cpYb)
		const _enc_string_XkWF = "tEOTREYDVUg1RXb3PxIO0b4zQo2RSPuyr1CTfmty8Lsup39vIp7x2EsBYjzqLLgtijJa73heokoZuhlJfuccZXqtco";
		const _setEncoding_function_UfDh = await _Readable_object_TDNQ.setEncoding(_enc_string_XkWF)
		const _read_function_MLZO = await _Readable_object_TDNQ.read()
		const _dest_string_qKPU = "Ra";
		const _unpipe_function_oeTM = await _Readable_object_TDNQ.unpipe(_dest_string_qKPU)
		const _setEncoding_function_zIEM = await _Readable_object_TDNQ.setEncoding()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_numeric_SyEH = 3.075917860698926;
		const _Readable_object_Xjon = new Readable(_options_numeric_SyEH)
		const _chunk_null_xsMW = null;
		const _unshift_function_frQq = await _Readable_object_Xjon.unshift(_chunk_null_xsMW)
		const _ev_undefined_tmLy = undefined;
		const _fn_string_Igro = "GjBw4VxN3Bh7DWXmWcuFF7MgYcmiUlUR5hA12LeQqXGKFvvro6hMOLW1rKf17";
		const _on_function_MkYj = await _Readable_object_Xjon.on(_ev_undefined_tmLy, _fn_string_Igro)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_KHVg = new Readable()
		const _pause_function_HycE = await _Readable_object_KHVg.pause()
		const _push_function_jYlS = await _Readable_object_KHVg.push()
		const _ev_undefined_skkg = undefined;
		const _fn_string_uhzm = "ixCxt9eLkjT5XlSzXN7XnTy";
		const _on_function_tnwL = await _Readable_object_KHVg.on(_ev_undefined_skkg, _fn_string_uhzm)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_RZVy = new Readable()
		const _pause_function_yxFh = await _Readable_object_RZVy.pause()
		const _ev_boolean_OwPq = true;
		const _fn_boolean_Bqsz = true;
		const _on_function_MScO = await _Readable_object_RZVy.on(_ev_boolean_OwPq, _fn_boolean_Bqsz)
		const _push_function_kCpk = await _Readable_object_RZVy.push()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_dyPX = new Readable()
		const _pause_function_LpyZ = await _Readable_object_dyPX.pause()
		const _ev_string_XYyA = "IzKDhTJKmjlBOkycto24D8ed2gRVw2NGcD4fknretU2dcQU6Ds7b";
		const _fn_string_eHmy = "tRHHGRHl7IDBT4HlWIkhpW37CyJND91Rhl6sVeZLGAAPT1dcsrtM6L5VhU8jsv6B";
		const _on_function_RBzY = await _Readable_object_dyPX.on(_ev_string_XYyA, _fn_string_eHmy)
		const __destroy_function_ajGY = await _Readable_object_dyPX._destroy()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_AqFh = false;
		const _Readable_object_RCNm = new Readable(_options_boolean_AqFh)
		const _ev_string_vzMd = "c0Nhq9nNAIn91AAdVzVroXTUuNLmZLSMygUbMndlpiBjWaMHzXaFuUY6DWzygC4LxYxMvV";
		const _fn_numeric_rAYH = 7.8603617052022585;
		const _on_function_aiRi = await _Readable_object_RCNm.on(_ev_string_vzMd, _fn_numeric_rAYH)
		const _pause_function_uzia = await _Readable_object_RCNm.pause()
		const _resume_function_HsGs = await _Readable_object_RCNm.resume()
		const _n_string_Tiph = "sqQJm7EE96mkDjp1g2vsBQc325da0aOVIMI";
		const __read_function_rJvj = await _Readable_object_RCNm._read(_n_string_Tiph)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_juSY = new Readable()
		const _enc_function_ipxl = () => { };
		const _setEncoding_function_XouV = await _Readable_object_juSY.setEncoding(_enc_function_ipxl)
		const _push_function_pIKa = await _Readable_object_juSY.push()
		const _unpipe_function_MYsB = await _Readable_object_juSY.unpipe()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_FvQz = new Readable()
		const _enc_string_nOfJ = "VQhOeqjqswpCC2LSkaQpMzgO57n4rg4nwqkNP5tEz";
		const _setEncoding_function_KrYe = await _Readable_object_FvQz.setEncoding(_enc_string_nOfJ)
		const _resume_function_pueR = await _Readable_object_FvQz.resume()
		const _unpipe_function_wRBt = await _Readable_object_FvQz.unpipe()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_JpwD = new Readable()
		const _ev_boolean_JXWh = false;
		const _fn_string_zQDX = "l7uFk22AvTnESzFpTQuuDH9qn6JUhngGjTqFBlsI7f3TJBkm5TlTOzOC8nl7EvGTi2Jcg8ZpwLQ";
		const _on_function_UTzo = await _Readable_object_JpwD.on(_ev_boolean_JXWh, _fn_string_zQDX)
		const _unpipe_function_feAn = await _Readable_object_JpwD.unpipe()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_pqbd = false;
		const _Readable_object_ecYn = new Readable(_options_boolean_pqbd)
		const _pause_function_vGdZ = await _Readable_object_ecYn.pause()
		const _ev_string_RRPl = "1YmCEGi21e7ljBsAREXeidkdJsYv7G2yMubRI5INxHrJvvF";
		const _fn_string_RQWZ = "onKxK7pREfBbQlGnm6gkozv2ykFzABgtu";
		const _on_function_Yjuc = await _Readable_object_ecYn.on(_ev_string_RRPl, _fn_string_RQWZ)
		const _resume_function_gUFG = await _Readable_object_ecYn.resume()
		const _setEncoding_function_Gwqo = await _Readable_object_ecYn.setEncoding()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_numeric_gMVU = 3.9008627928225046;
		const _Readable_object_BELy = new Readable(_options_numeric_gMVU)
		const _ev_string_bWOk = "8ztWXOFDflTnyQ9WgjAAn9hMOMHr6U6tCQfS6NM08VhP8J6K0LbxaFHko6NsoRFRYuuq3Oc8uhsXbebhe";
		const _fn_string_FEwp = "4cRnB";
		const _on_function_tSXg = await _Readable_object_BELy.on(_ev_string_bWOk, _fn_string_FEwp)
		const _enc_function_ZxMx = () => { };
		const _setEncoding_function_vuGM = await _Readable_object_BELy.setEncoding(_enc_function_ZxMx)
		const _n_numeric_YewB = 8.642466379276435;
		const __read_function_kzYQ = await _Readable_object_BELy._read(_n_numeric_YewB)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_object_JQTa = {
		
	}
		const _Readable_object_iKuB = new Readable(_options_object_JQTa)
		const _dest_string_ThYK = "57DWDsrNF4dzgw5lSym8ZuGqJ1Y0LdIEJA9T5bSQX63CGcKVffNWs2JYBEbe";
		const _unpipe_function_tkNf = await _Readable_object_iKuB.unpipe(_dest_string_ThYK)
		const _enc_string_Orop = "yrh97UFqlcMzHuFzN4uWbDJt61F1";
		const _setEncoding_function_wlHx = await _Readable_object_iKuB.setEncoding(_enc_string_Orop)
		const _pause_function_nVvb = await _Readable_object_iKuB.pause()
		const _isPaused_function_SMaT = await _Readable_object_iKuB.isPaused()
		const _unpipe_function_UpyT = await _Readable_object_iKuB.unpipe()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_GNdV = new Readable()
		const _unpipe_function_WWYt = await _Readable_object_GNdV.unpipe()
		const _ev_boolean_ZFSH = false;
		const _fn_string_rLqi = "5MwbXFaiNNsDNxC36BIHXxb59tF4BIdo6N4iOTpxA5";
		const _on_function_BECV = await _Readable_object_GNdV.on(_ev_boolean_ZFSH, _fn_string_rLqi)
		const _chunk_object_eqoe = {
		
	}
		const _encoding_string_fuWx = "nPB3REsX1Nd2tN3AK4bNa4Ww3r8dL3toU3KzJbtMudi6gonWa61UQeVSetx";
		const _push_function_Ldzu = await _Readable_object_GNdV.push(_chunk_object_eqoe, _encoding_string_fuWx)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_function_UYRn = () => { };
		const _Readable_object_MiRb = new Readable(_options_function_UYRn)
		const _enc_function_Vbgr = () => { };
		const _setEncoding_function_rvyH = await _Readable_object_MiRb.setEncoding(_enc_function_Vbgr)
		const _push_function_PemO = await _Readable_object_MiRb.push()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_Lyah = new Readable()
		const _pause_function_dYRW = await _Readable_object_Lyah.pause()
		const _push_function_NMDs = await _Readable_object_Lyah.push()
		const _ev_function_MnQu = () => { };
		const _fn_string_HwWm = "zg2UqiFv7gwwlwBSK1bGNvhVKO4stosW2OdFIV9fK57P7bCmsloJ0YWvUBThelwUsTwIGpSygV8";
		const _on_function_fxPg = await _Readable_object_Lyah.on(_ev_function_MnQu, _fn_string_HwWm)
		const _chunk_undefined_Xcdu = undefined;
		const _encoding_numeric_YXdu = -9.485773799842132;
		const _push_function_IytK = await _Readable_object_Lyah.push(_chunk_undefined_Xcdu, _encoding_numeric_YXdu)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_dOQG = new Readable()
		const _enc_function_IwWM = () => { };
		const _setEncoding_function_gIsD = await _Readable_object_dOQG.setEncoding(_enc_function_IwWM)
		const _enc_array_sNwj = []
		const _setEncoding_function_SvlX = await _Readable_object_dOQG.setEncoding(_enc_array_sNwj)
		const _n_object_lRkY = {
		
	}
		const _read_function_TKhz = await _Readable_object_dOQG.read(_n_object_lRkY)
		const _resume_function_IRyB = await _Readable_object_dOQG.resume()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_object_fQKu = {
		
	}
		const _Readable_object_sAzG = new Readable(_options_object_fQKu)
		const _setEncoding_function_ykZA = await _Readable_object_sAzG.setEncoding()
		const _enc_string_YuJr = "IB0NsFbcynCS8tVeIFXzphyeq4h8yL0qFlcR0DrrNwEJji7taK7Uko2VWPTdQR7Zv7NMQDsMj";
		const _setEncoding_function_plra = await _Readable_object_sAzG.setEncoding(_enc_string_YuJr)
		const _chunk_string_aYXy = "JYoRmKNtyHJ5laQBCerMnPNzDS";
		const _unshift_function_zCtM = await _Readable_object_sAzG.unshift(_chunk_string_aYXy)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_null_Whyh = null;
		const _Readable_object_CWrR = new Readable(_options_null_Whyh)
		const _ev_string_axVl = "YAVhilJ1qlhLsxxgruVE4UKSRju1tA1burjvefl83d3L16gs3FB1JM6MH";
		const _fn_string_aVHJ = "jyGdApSoPphEBRh6B";
		const _on_function_cawx = await _Readable_object_CWrR.on(_ev_string_axVl, _fn_string_aVHJ)
		const _read_function_tZmr = await _Readable_object_CWrR.read()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_array_lIAG = []
		const _Readable_object_MXLG = new Readable(_options_array_lIAG)
		const _ev_string_lLhi = "FyPOwxAhbPkbyDMALMLJICYOSi9IT5BhRq8y2Dt5IwrpLROZXMqiSLn1XR7zeUOCNyRortgpTdRefN3eoSVT7NqDayQUc";
		const _fn_numeric_jsGn = 5.904400862917729;
		const _on_function_dlrR = await _Readable_object_MXLG.on(_ev_string_lLhi, _fn_numeric_jsGn)
		const _wrap_function_mHUw = await _Readable_object_MXLG.wrap()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_BMMY = new Readable()
		const _ev_string_OeDn = "JyRgAaFjpnepStR73LvBzOA2mN1ch8UEAyafq7laDHEZ8ba7dm9kGRbL5LRnOW0jKhga5aBMChkAc59MGlTZLslIn";
		const _fn_string_VUSd = "BL6wXUUrj34tOUTrtsjZRQjsyOFh9XxT80kDJq";
		const _on_function_fPQS = await _Readable_object_BMMY.on(_ev_string_OeDn, _fn_string_VUSd)
		const _chunk_undefined_zDYH = undefined;
		const _unshift_function_qIyV = await _Readable_object_BMMY.unshift(_chunk_undefined_zDYH)
		const _isPaused_function_PNJD = await _Readable_object_BMMY.isPaused()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_numeric_foyl = 1.074681899658696;
		const _Readable_object_LNiN = new Readable(_options_numeric_foyl)
		const _pause_function_FPAp = await _Readable_object_LNiN.pause()
		const _enc_function_oZXA = () => { };
		const _setEncoding_function_vcMe = await _Readable_object_LNiN.setEncoding(_enc_function_oZXA)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_undefined_Iojg = undefined;
		const _Readable_object_iHsM = new Readable(_options_undefined_Iojg)
		const _isPaused_function_sMql = await _Readable_object_iHsM.isPaused()
		const _ev_string_rTAh = "aT8dYIFL9NaVCKbHuOG1AImP5bcc8zGoiwgc7v6vc";
		const _fn_string_nvXt = "VKiH54zZdik9vR";
		const _on_function_ZwfN = await _Readable_object_iHsM.on(_ev_string_rTAh, _fn_string_nvXt)
		const _read_function_Rzuc = await _Readable_object_iHsM.read()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_AzyA = false;
		const _Readable_object_HyOq = new Readable(_options_boolean_AzyA)
		const _enc_function_DoQK = () => { };
		const _setEncoding_function_KaIf = await _Readable_object_HyOq.setEncoding(_enc_function_DoQK)
		const _unshift_function_AYBt = await _Readable_object_HyOq.unshift()
		const _pipe_function_BRxd = await _Readable_object_HyOq.pipe()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_array_nJuv = []
		const _Readable_object_hlCs = new Readable(_options_array_nJuv)
		const _isPaused_function_SeHc = await _Readable_object_hlCs.isPaused()
		const _resume_function_mfgy = await _Readable_object_hlCs.resume()
		const _ev_null_RMHQ = null;
		const _fn_string_iLqS = "lxy7D47yFWEyowidAbL6Kw4fK9SvhNQx6L5ON5mHineCjj9NAzskHohob5vgut1MX2";
		const _on_function_hIVD = await _Readable_object_hlCs.on(_ev_null_RMHQ, _fn_string_iLqS)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_scMS = new Readable()
		const _isPaused_function_rAmf = await _Readable_object_scMS.isPaused()
		const _enc_string_tEjz = "PQTuo5B8u7pIFl";
		const _setEncoding_function_brjM = await _Readable_object_scMS.setEncoding(_enc_string_tEjz)
		const _dest_function_Omaf = () => { };
		const _pipeOpts_string_Lyxj = "B";
		const _pipe_function_TIHK = await _Readable_object_scMS.pipe(_dest_function_Omaf, _pipeOpts_string_Lyxj)
		const _pause_function_ISVF = await _Readable_object_scMS.pause()
		const _setEncoding_function_CHrM = await _Readable_object_scMS.setEncoding()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_object_ZAGp = {
		
	}
		const _Readable_object_FwbH = new Readable(_options_object_ZAGp)
		const _ev_function_VtmY = () => { };
		const _fn_string_UgGm = "bVWHvpcLiRhOQLiiQ1QAy55jJ21UgaEIn2e0O";
		const _on_function_vONZ = await _Readable_object_FwbH.on(_ev_function_VtmY, _fn_string_UgGm)
		const _push_function_drnF = await _Readable_object_FwbH.push()
		const _n_object_HbrQ = {
		
	}
		const _read_function_AnzE = await _Readable_object_FwbH.read(_n_object_HbrQ)
		const _err_string_wNWh = "67w7OTgDPd9kHoWFng";
		const _cb_null_WcCK = null;
		const __destroy_function_YhYD = await _Readable_object_FwbH._destroy(_err_string_wNWh, _cb_null_WcCK)
		const _enc_function_bTZV = () => { };
		const _setEncoding_function_EVdI = await _Readable_object_FwbH.setEncoding(_enc_function_bTZV)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_FxPj = false;
		const _Readable_object_RqYN = new Readable(_options_boolean_FxPj)
		const _enc_function_SZdy = () => { };
		const _setEncoding_function_Yjxq = await _Readable_object_RqYN.setEncoding(_enc_function_SZdy)
		const _ev_string_BXLq = "TFZ3uQlHnMnf8NCI2b8l5Wb";
		const _fn_numeric_fTuC = 6.3413978845489325;
		const _on_function_sbkJ = await _Readable_object_RqYN.on(_ev_string_BXLq, _fn_numeric_fTuC)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _Readable_object_ZSdy = new Readable()
		const _ev_object_LycR = {
		
	}
		const _fn_string_ngGZ = "ib1BwjixMRaGxEqANQWtJyJN6Gfx9HVVZhvbUrSdTOaB4VGEDqVMhZPE24t6HElAW1v";
		const _on_function_golk = await _Readable_object_ZSdy.on(_ev_object_LycR, _fn_string_ngGZ)
		const _on_function_qGiY = await _Readable_object_ZSdy.on()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_cnnw = false;
		const _Readable_object_MdqU = new Readable(_options_boolean_cnnw)
		const _pause_function_DwjV = await _Readable_object_MdqU.pause()
		const _enc_function_zZbh = () => { };
		const _setEncoding_function_hult = await _Readable_object_MdqU.setEncoding(_enc_function_zZbh)
		const _on_function_WjOC = await _Readable_object_MdqU.on()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_DtMv = false;
		const _Readable_object_xgtT = new Readable(_options_boolean_DtMv)
		const _enc_string_bDmG = "5AQCAyXr5qL4XDnQNGdOgUGxoLwr1q7vuk7lYaOozh2nEmK1hLK8Ii8G2HbkZ";
		const _setEncoding_function_IimN = await _Readable_object_xgtT.setEncoding(_enc_string_bDmG)
		const _unshift_function_pnWB = await _Readable_object_xgtT.unshift()
		const _isPaused_function_HgHg = await _Readable_object_xgtT.isPaused()
		const _stream_string_ZKpg = "wpF7FCbs4s49Slzbe9bJQusoAygQJ1Vpfvb9Puzz4rGmh4n5vTaR4X5N";
		const _wrap_function_VICu = await _Readable_object_xgtT.wrap(_stream_string_ZKpg)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_numeric_Rfgb = -1.1993534655373832;
		const _Readable_object_xJko = new Readable(_options_numeric_Rfgb)
		const _push_function_fAzO = await _Readable_object_xJko.push()
		const _enc_numeric_ZNND = -1.5729578823579633;
		const _setEncoding_function_zzpf = await _Readable_object_xJko.setEncoding(_enc_numeric_ZNND)
		const _unshift_function_BIQr = await _Readable_object_xJko.unshift()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_qpNR = false;
		const _Readable_object_VFTB = new Readable(_options_boolean_qpNR)
		const _ev_string_GRdy = "PtgiTeSbIq8QFu4TOYEIWNN6xqhXgKyWDtqV6aEPY3ofJozZsXJO1L4IOICw8OOsbphOMv1683SEtj5PbV";
		const _fn_string_JcYz = "YuLOUojgRAjhljius";
		const _on_function_rQtl = await _Readable_object_VFTB.on(_ev_string_GRdy, _fn_string_JcYz)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_FgZd = false;
		const _Readable_object_Yqyx = new Readable(_options_boolean_FgZd)
		const _ev_string_cKyg = "vfMf5xAHMbSTg3XegQKJNZOiqHhoMpuN6dA";
		const _fn_string_ZKPc = "jUFOIcEY2AaPUuoMzTHCa9cPwBFKlbU3AtgSW5HvIWRCzLReAUzs";
		const _on_function_QxUu = await _Readable_object_Yqyx.on(_ev_string_cKyg, _fn_string_ZKPc)
		const _wrap_function_svsl = await _Readable_object_Yqyx.wrap()
		const __read_function_CWur = await _Readable_object_Yqyx._read()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_string_ZhYR = "EgFekstF";
		const _Readable_object_Jewf = new Readable(_options_string_ZhYR)
		const _ev_string_abSP = "G5cv7vy53gkpsC9r3PA2V1FJCYX45wXWeLaO5cT1f1cPLLn92b1Z";
		const _fn_numeric_rJxM = 1.361672348279921;
		const _on_function_LNMp = await _Readable_object_Jewf.on(_ev_string_abSP, _fn_numeric_rJxM)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_undefined_uheO = undefined;
		const _Readable_object_EVcy = new Readable(_options_undefined_uheO)
		const _ev_string_tLco = "tfDx6hlMBohdqmNEB7iycDG5X0k";
		const _fn_numeric_mfmp = 6.913861625409449;
		const _on_function_uStU = await _Readable_object_EVcy.on(_ev_string_tLco, _fn_numeric_mfmp)
		const _n_function_xCLP = () => { };
		const __read_function_Dmla = await _Readable_object_EVcy._read(_n_function_xCLP)
		const _dest_function_HYbl = () => { };
		const _unpipe_function_qdth = await _Readable_object_EVcy.unpipe(_dest_function_HYbl)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_zfAr = true;
		const _Readable_object_HtUz = new Readable(_options_boolean_zfAr)
		const _isPaused_function_ZkyO = await _Readable_object_HtUz.isPaused()
		const _pause_function_LagW = await _Readable_object_HtUz.pause()
		const _ev_undefined_PsuP = undefined;
		const _fn_string_CgbI = "57wynswqsLeKqufW6bhtiELTY81UWjV8QYlJqU2YAW";
		const _on_function_YTjO = await _Readable_object_HtUz.on(_ev_undefined_PsuP, _fn_string_CgbI)
		const _unpipe_function_yOMs = await _Readable_object_HtUz.unpipe()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_boolean_sgTR = true;
		const _Readable_object_MQzW = new Readable(_options_boolean_sgTR)
		const _enc_numeric_Rbzp = 3.6141641200269383;
		const _setEncoding_function_LOAH = await _Readable_object_MQzW.setEncoding(_enc_numeric_Rbzp)
		const _resume_function_wOMD = await _Readable_object_MQzW.resume()
		const _chunk_undefined_xXKM = undefined;
		const _encoding_function_iNHA = () => { };
		const _push_function_pNVx = await _Readable_object_MQzW.push(_chunk_undefined_xXKM, _encoding_function_iNHA)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_undefined_XAOp = undefined;
		const _Readable_object_SIos = new Readable(_options_undefined_XAOp)
		const _enc_function_EqNh = () => { };
		const _setEncoding_function_oWJu = await _Readable_object_SIos.setEncoding(_enc_function_EqNh)
		const _read_function_FMIW = await _Readable_object_SIos.read()
		const _pause_function_QjsT = await _Readable_object_SIos.pause()


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_object_gVNm = {
		
	}
		const _Readable_object_iYlm = new Readable(_options_object_gVNm)
		const _err_array_KKLw = []
		const _cb_function_PIhf = () => { };
		const __destroy_function_WqlE = await _Readable_object_iYlm._destroy(_err_array_KKLw, _cb_function_PIhf)
		const _enc_function_CtwC = () => { };
		const _setEncoding_function_XRtI = await _Readable_object_iYlm.setEncoding(_enc_function_CtwC)


	}).timeout(3000);

	it('test for _stream_readable', async () => {
		const _options_string_dftI = "0pqvPGU0jQ7m6wire8Eqlg1KIEmMhPvqCt94XfwtHTbKiHIY";
		const _Readable_object_tfFx = new Readable(_options_string_dftI)
		const _enc_function_cnWo = () => { };
		const _setEncoding_function_iJAL = await _Readable_object_tfFx.setEncoding(_enc_function_cnWo)
		const _isPaused_function_xFnO = await _Readable_object_tfFx.isPaused()
		const _push_function_LxOw = await _Readable_object_tfFx.push()
		const _isPaused_function_bXXv = await _Readable_object_tfFx.isPaused()


	}).timeout(3000);
})