$.ajaxSetup({
  contentType:'application/x-www-form-urlencoded'
});
function getMarket(parameters) {
	var url = okex.market.url
		,api = okex.market.ticker
		,secret_key = 'secret_key='+okex.key.use[0].private
		,parameter = ''
		,symbol = parameters[symbol]?parameters[symbol]:'btc_usdt'

		,account = symbol?symbol:'btc_usdt'
		,account = symbol?symbol:'btc_usdt'

		console.log(url,api,parameter,symbol)
		,enStr = symbol +'&'+ secret_key
		,sign = 'sign='+_Signature(enStr)
		console.log(sign)
		sendRequest(url,api,parameter,sign)
}
function _Signature(str) {
	return MD5(str)
}
function _Sortparameter(parameters) {
	// body...
}
function sendRequest(url,api,parameter,_Signature) {
	alert()
	var request = $.ajax({
	  url: url+api,
	  type: 'post',
	  data: parameter+_Signature,
	  dataType: "json"
	});
	request.done(function(res) {
	  console.log( res['err-msg'] );
	  console.log( 'data:'+res.data );
	});
	request.fail(function(jqXHR, textStatus) {
		var res = $.parseJSON(jqXHR.responseText);
	 	console.log(res['err-msg']);
	});
}