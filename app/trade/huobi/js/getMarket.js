function getMarket() {
	var url = huobi.market.url+huobi.market.kline+'?symbol='+huobi.market.symbol[0]+'&period=30min'
	console.log(url)
	$.get(url,function (data) {
		console.log($.parseJSON(data))
	})
}