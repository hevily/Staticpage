const huobi = {
	market:{
		url:'https://api.huobi.pro'
		,kline:'/market/history/kline'
		,symbol:['btcusdt']
		,ticker:'/market/detail/merged'
		,depth:'/market/depth'
	},
	verify:{
		url:'https://be.huobi.com'
		,order:'/v1/order/orders'
		,AccessKeyId:'d1268541-b2d225d0-727bb37c-9333b'
		,symbols:'/v1/common/symbols'
		,accounts:'/v1/account/accounts'
	},
	key:{
		useing:[
			{
				public:'96ea09d0-073cedad-d9d2f722-a572a',
				private:'fde3a13c-99fa22f6-77aaa5ad-60623'
			},
			{
				public:'0f7bf42f-00ec26cb-914bb968-f01b8',
				private:'a120a9ce-7a37d59d-0d87e3a5-8333e'
			},
			{
				public:null,
				private:null
			}
		],
		del:[
			{
				public:'512e5d0f-1090531e-36d553dc-595e9',
				private:'86d32dfc-3e796f30-1973a3f7-78eab'
			}
		]
	}
}
const okex = {
	market:{
		url:'https://www.okex.com/api/v1/',
		userinfo:'userinfo.do',
		ticker:'ticker.do'
	},
	key:{
		use:[
			{
				public:'9b25e41a-f6c8-44b6-9ea9-ba4ea4692938',
				private:'AD867F523996E99342F683C45C9E5072'
			}
		],
		del:[
			{
				public:null,
				private:null
			}
		]
	}

}


// 使用国内服务器的用户，请使用api.huobipro.com域名；
// 使用香港阿里云的用户，请暂时不要绑定ip。
// 另外，建议大家用日本亚马逊，不要用国内服务器。