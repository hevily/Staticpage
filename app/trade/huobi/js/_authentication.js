function _authentication() {
	// 验证地址
	const UID = 11872567;
	var url = huobi.verify.url
		,date = new Date()
		,Y = date.getUTCFullYear()
		,M = add0(date.getUTCMonth()+1)
		,D = add0(date.getUTCDate())
		,H = add0(date.getUTCHours())
		,Mi= add0(date.getUTCMinutes())
		,S = add0(date.getUTCSeconds())
		,utcDate = Y+'-'+ M +'-'+ D +'T'+ H +':'+ Mi +':'+ S
		console.log(utcDate)
		// 需要编码参数 private除外
		
		,AccessKeyId = 'AccessKeyId='+huobi.key.useing[0].public
		,private = huobi.key.useing[0].private
		,SignatureMethod = 'SignatureMethod=HmacSHA256'
		,SignatureVersion = 'SignatureVersion=2'

		,Timestamp = 'Timestamp='+encodeURIComponent(utcDate)
		,perConfirm = AccessKeyId +'&'+ SignatureMethod +'&'+ SignatureVersion +'&'+ Timestamp
		console.log(Timestamp)
		console.log('encodeURIComponent编码后：---'+perConfirm)
		,type = 'GET'
		,url = url
		,application = huobi.verify.accounts

		,reqContent = type+'\n'
					 +url+'\n'
					 +application+'\n'
					 +perConfirm
		console.log(reqContent)
		$('footer').html(reqContent)
		// get crypto parameter reqContent & private
		,hmacSHA256 = CryptoJS.HmacSHA256(reqContent,private)
		,base64 = CryptoJS.enc.Base64.stringify(hmacSHA256)
		,Signature = 'Signature='+base64
		console.log(hmacSHA256)
		console.log(base64)
		console.log(Signature)
	var request = $.ajax({
	  url: url+huobi.verify.accounts,
	  type: type,
	  data: perConfirm+'&'+Signature,
	  // dataType: "json"
	});
	request.done(function(res) {
	  console.log( res['err-msg'] );
	  console.log( 'data:'+res.data );
	});
	request.fail(function(jqXHR, textStatus) {
		var res = $.parseJSON(jqXHR.responseText);
	 	console.log(res['err-msg']);
	});

	function add0(num) {
		return num<10? '0'+num :num
	}
	function encodeParameterS(parameters) {
		var result = '';
		for(let i = 0;i<parameters.length;i++){
			result +=encodeParameter(parameters[i])
		}
		return result;
	}
	function encodeParameter(parameter) {
		return '&'+encodeURIComponent(parameter)
	}

}